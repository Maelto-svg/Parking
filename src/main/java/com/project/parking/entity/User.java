package com.project.parking.entity;

import jakarta.persistence.*;

import java.util.Set;

@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;

    @Enumerated(EnumType.STRING)
    private UserRole role; // Enum définissant les rôles

    @ManyToMany
    @JoinTable(
            name = "user_parking_lot",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "parking_lot_id")
    )
    private Set<ParkingLot> accessibleParkingLots;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Set<ParkingLot> getAccessibleParkingLots() {
        return accessibleParkingLots;
    }

    public void setAccessibleParkingLots(Set<ParkingLot> accessibleParkingLots) {
        this.accessibleParkingLots = accessibleParkingLots;
    }

    public UserRole getRole() {
        return role;
    }

    public void setRole(UserRole role) {
        this.role = role;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
