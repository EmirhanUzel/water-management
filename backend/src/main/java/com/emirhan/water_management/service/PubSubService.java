package com.emirhan.water_management.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.datatype.jsr310.JavaTimeModule;
import com.emirhan.water_management.model.SensorData;
import com.google.cloud.pubsub.v1.Publisher;
import com.google.protobuf.ByteString;
import com.google.pubsub.v1.PubsubMessage;
import com.google.pubsub.v1.TopicName;
import org.springframework.stereotype.Service;

@Service
public class PubSubService {

    private static final String PROJECT_ID = "project-aa05760a-c7d2-402f-b44";
    private static final String TOPIC_ID = "water-management-topic";
    private final ObjectMapper objectMapper;

    public PubSubService() {
        this.objectMapper = new ObjectMapper()
                .registerModule(new JavaTimeModule());
    }

    public void sendToKinesis(SensorData data) {
        try {
            TopicName topicName = TopicName.of(PROJECT_ID, TOPIC_ID);
            Publisher publisher = Publisher.newBuilder(topicName).build();

            String json = objectMapper.writeValueAsString(data);
            ByteString byteString = ByteString.copyFromUtf8(json);
            PubsubMessage message = PubsubMessage.newBuilder()
                    .setData(byteString)
                    .build();

            publisher.publish(message);
            publisher.shutdown();

        } catch (Exception e) {
            System.err.println("Pub/Sub gönderim hatası: " + e.getMessage());
        }
    }
}