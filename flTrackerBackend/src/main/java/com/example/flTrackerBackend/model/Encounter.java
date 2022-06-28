package com.example.flTrackerBackend.model;

import java.util.Map;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "encounters")
public class Encounter {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "name")
	@NotNull
	private String name;
	
	@ElementCollection
	@NotNull
	private Map<Integer, Integer> monsterQuantities;

	public Encounter(long id, @NotNull String name, @NotNull Map<Integer, Integer> monsterQuantities) {
		super();
		this.id = id;
		this.name = name;
		this.monsterQuantities = monsterQuantities;
	}

	public Encounter() {
		super();
		// TODO Auto-generated constructor stub
	}

	public long getId() {
		return id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Map<Integer, Integer> getMonsterQuantities() {
		return monsterQuantities;
	}

	public void setMonsterQuantities(Map<Integer, Integer> monsterQuantities) {
		this.monsterQuantities = monsterQuantities;
	}

	
	
}
