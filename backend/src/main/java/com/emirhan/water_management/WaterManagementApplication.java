package com.emirhan.water_management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
public class WaterManagementApplication {
	public static void main(String[] args) {
		SpringApplication.run(WaterManagementApplication.class, args);
	}
}