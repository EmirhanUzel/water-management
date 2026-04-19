package com.emirhan.water_management.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SensorData {
    private LocalDateTime timestamp;
    private double mainTankLevel;
    private double poolFlow;
    private double gardenFlow;
    private double houseFlow;
    private boolean poolValveOpen;
    private boolean gardenValveOpen;
    private boolean houseValveOpen;


}
