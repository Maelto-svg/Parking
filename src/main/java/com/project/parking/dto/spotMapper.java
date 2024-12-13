package com.project.parking.dto;

import com.project.parking.entity.ParkingSpot;

public class spotMapper {
    public static spot of(ParkingSpot parkingSpot) {
        return new spot(
                parkingSpot.getId(),
                parkingSpot.getSpotNumber(),
                parkingSpot.getOccupied(),
                parkingSpot.getVehicle().getLicensePlate(),
                parkingSpot.getLot().getName()
        );
    }
}
