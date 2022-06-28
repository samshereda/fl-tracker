package com.SamuelShereda.flTrackerBackend.model;

import javax.persistence.Entity;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;


@Entity
@Table(name= "active_monsters")
public class ActiveMonster extends Monster{
	@ManyToOne
	private ActiveEncounter activeEncounter;

	public ActiveMonster(long id, @NotNull String name, @NotNull int strength, @NotNull int agility, int wits,
			int empathy, String skills, int movement, int armor_bonus, int weapon_bonus,
			ActiveEncounter activeEncounter) {
		super(id, name, strength, agility, wits, empathy, skills, movement, armor_bonus, weapon_bonus);
		this.activeEncounter = activeEncounter;
	}

	public ActiveMonster() {
		super();
		// TODO Auto-generated constructor stub
	}

	public ActiveMonster(long id, @NotNull String name, @NotNull int strength, @NotNull int agility, int wits,
			int empathy, String skills, int movement, int armor_bonus, int weapon_bonus) {
		super(id, name, strength, agility, wits, empathy, skills, movement, armor_bonus, weapon_bonus);
		// TODO Auto-generated constructor stub
	}

	public ActiveEncounter getActiveEncounter() {
		return activeEncounter;
	}

	public void setActiveEncounter(ActiveEncounter activeEncounter) {
		this.activeEncounter = activeEncounter;
	}
	
	
}
