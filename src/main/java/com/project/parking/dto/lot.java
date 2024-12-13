package com.project.parking.dto;

import com.project.parking.entity.ParkingLot;
import com.project.parking.entity.ParkingSpot;
import com.project.parking.entity.Vehicle;

import java.util.List;

public record lot(Long id, String name, String location, Integer capacity, List<String> spots) {
}
