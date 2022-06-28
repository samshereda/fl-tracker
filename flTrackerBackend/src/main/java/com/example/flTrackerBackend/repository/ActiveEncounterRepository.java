package com.example.flTrackerBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.flTrackerBackend.model.ActiveEncounter;
@Repository
@CrossOrigin("http://localhost:3000/")

public interface ActiveEncounterRepository extends JpaRepository<ActiveEncounter, Long> {
	
}