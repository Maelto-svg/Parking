package com.project.parking.entity;

import jakarta.persistence.*;

@Entity
@Table(name ="SP_PARKINGSPOT")
public class ParkingSpot {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String spotNumber;
    private Boolean isOccupied;

    @OneToOne
    private Vehicle vehicle;

    @ManyToOne
    private ParkingLot parkingLot;

    // Getters et setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSpotNumber() {
        return spotNumber;
    }

    public void setSpotNumber(String spotNumber) {
        this.spotNumber = spotNumber;
    }

    public Boolean getOccupied() {
        return isOccupied;
    }

    public void setOccupied(Boolean isOccupied) {
        this.isOccupied = isOccupied;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }
}

