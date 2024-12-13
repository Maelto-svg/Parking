package com.project.parking.controller;

import com.project.parking.dto.lot;
import com.project.parking.entity.ParkingLot;
import com.project.parking.entity.ParkingSpot;
import com.project.parking.repository.ParkingSpotRepository;
import com.project.parking.service.ParkingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;



@RestController
@RequestMapping("/api/parking")
public class ParkingController {

    @Autowired
    private ParkingService parkingService;

    // Endpoint pour obtenir tous les parkings
    @GetMapping("/lots")
    public List<lot> getAllParkingLots() {
        return parkingService.getAllParkingLots();
    }

    // Endpoint pour obtenir les places disponibles d'un parking
    @GetMapping("/{parkingLotId}/available-spots")
    public List<ParkingSpot> getAvailableSpots(@PathVariable Long parkingLotId) {
        return parkingService.getAvailableSpots(parkingLotId);
    }

    @Autowired
    private ParkingSpotRepository parkingSpotRepository;

    @GetMapping("/spots")
    public List<ParkingSpot> getAllParkingSpots() {
        return parkingSpotRepository.findAll();
    }
}

