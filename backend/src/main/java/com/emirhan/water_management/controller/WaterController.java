package com.emirhan.water_management.controller;

import com.emirhan.water_management.simulator.WaterSimulator;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.stereotype.Controller;

@Controller
public class WaterController {

    private final WaterSimulator waterSimulator;

    public WaterController(WaterSimulator waterSimulator) {
        this.waterSimulator = waterSimulator;
    }

    @MessageMapping("/valve")
    public void handleValve(@Payload String valveCommand) {
        waterSimulator.updateValve(valveCommand);
    }
}