package com.project.parking.service;

import com.project.parking.entity.ParkingSpot;
import com.project.parking.entity.ParkingLot;
import com.project.parking.repository.ParkingLotRepository;
import com.project.parking.repository.ParkingSpotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ParkingService {

    @Autowired
    private ParkingLotRepository parkingLotRepository;

    @Autowired
    private ParkingSpotRepository parkingSpotRepository;

    // Récupérer tous les parkings
    public List<ParkingLot> getAllParkingLots() {
        return parkingLotRepository.findAll();
    }

    // Récupérer toutes les places libres dans un parking
    public List<ParkingSpot> getAvailableSpots(Long parkingLotId) {
        return parkingSpotRepository.findByIsOccupied(false);
    }

    // Réserver une place pour un véhicule
    public Optional<ParkingSpot> reserveSpot(Long parkingSpotId) {
        Optional<ParkingSpot> spot = parkingSpotRepository.findById(parkingSpotId);
        spot.ifPresent(s -> s.setOccupied(true));
        spot.ifPresent(parkingSpotRepository::save);
        return spot;
    }

    // Libérer une place
    public void releaseSpot(Long parkingSpotId) {
        Optional<ParkingSpot> spot = parkingSpotRepository.findById(parkingSpotId);
        spot.ifPresent(s -> s.setOccupied(false));
        spot.ifPresent(parkingSpotRepository::save);
    }
}

