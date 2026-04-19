package com.emirhan.water_management.simulator;


import com.emirhan.water_management.model.SensorData;
import com.emirhan.water_management.service.FirestoreService;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import com.emirhan.water_management.service.PubSubService;
import java.time.LocalDateTime;

@Component
public class WaterSimulator {

    private final SimpMessagingTemplate messagingTemplate;
    private double mainTankLevel=72.0;
    private boolean poolValveOpen = true;
    private boolean gardenValveOpen = true;
    private boolean houseValveOpen = true;
    private final PubSubService pubSubService;
    private final FirestoreService firestoreService;

    public WaterSimulator(SimpMessagingTemplate messagingTemplate,
                          PubSubService pubSubService,
                          FirestoreService firestoreService) {
        this.messagingTemplate = messagingTemplate;
        this.pubSubService = pubSubService;
        this.firestoreService = firestoreService;
    }

    @Scheduled(fixedRate = 2000)
    public void simulate(){

        mainTankLevel += (Math.random() - 0.52) * 0.8;
        mainTankLevel = Math.max(10, Math.min(99, mainTankLevel));

        SensorData data = SensorData.builder()
                .timestamp(LocalDateTime.now())
                .mainTankLevel(Math.round(mainTankLevel * 10.0) / 10.0)
                .poolFlow(poolValveOpen ? Math.round((40 + Math.random() * 20) * 10.0) / 10.0 : 0.0)
                .gardenFlow(gardenValveOpen ? Math.round((10 + Math.random() * 10) * 10.0) / 10.0 : 0.0)
                .houseFlow(houseValveOpen ? Math.round((50 + Math.random() * 20) * 10.0) / 10.0 : 0.0)
                .poolValveOpen(poolValveOpen)
                .gardenValveOpen(gardenValveOpen)
                .houseValveOpen(houseValveOpen)
                .build();

        // WebSocket'e gönder
        messagingTemplate.convertAndSend("/topic/sensor", data);

        // Kinesis'e gönder
        pubSubService.sendToKinesis(data);

        // DynamoDB'ye kaydet
        firestoreService.saveData(data);
    }

    public void updateValve(String command) {
        // command örneği: "pool:false" veya "garden:true"
        String[] parts = command.split(":");
        boolean state = Boolean.parseBoolean(parts[1]);

        switch (parts[0]) {
            case "pool" -> poolValveOpen = state;
            case "garden" -> gardenValveOpen = state;
            case "house" -> houseValveOpen = state;
        }
    }

}
