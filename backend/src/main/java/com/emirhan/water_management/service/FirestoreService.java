package com.emirhan.water_management.service;

import com.emirhan.water_management.model.SensorData;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.FirestoreOptions;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;

@Service
public class FirestoreService {

    private final Firestore firestore;

    public FirestoreService() {
        this.firestore = FirestoreOptions.newBuilder()
                .setProjectId("project-aa05760a-c7d2-402f-b44")
                .setDatabaseId("water-management-db")
                .build()
                .getService();
    }

    public void saveData(SensorData data) {
        try {
            Map<String, Object> doc = new HashMap<>();
            doc.put("timestamp", data.getTimestamp().toString());
            doc.put("mainTankLevel", data.getMainTankLevel());
            doc.put("poolFlow", data.getPoolFlow());
            doc.put("gardenFlow", data.getGardenFlow());
            doc.put("houseFlow", data.getHouseFlow());
            doc.put("poolValveOpen", data.isPoolValveOpen());
            doc.put("gardenValveOpen", data.isGardenValveOpen());
            doc.put("houseValveOpen", data.isHouseValveOpen());

            firestore.collection("sensor-data")
                    .add(doc)
                    .get(); // sonucu bekle

            System.out.println("Firestore kayıt başarılı!");
        } catch (Exception e) {
            System.err.println("Firestore kayıt hatası: " + e.getMessage());
        }

    }
}