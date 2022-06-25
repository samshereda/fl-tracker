package com.example.flTrackerBackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "monsters")
public class Monster {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	@NotNull
	private String name;

	@Column(name = "strength")
	@NotNull
	private int strength;

	@Column(name = "agility")
	@NotNull
	private int agility;
	
	@Column(name = "wits")
	private int wits;
	
	@Column(name = "empathy")
	private int empathy;
	
	@Column(name = "skills")
	private String skills;
	
	@Column(name = "movement")
	private int movement;
	
	@Column(name = "armor_bonus")
	private int armor_bonus;
	
	@Column(name = "weapon_bonus")
	private int weapon_bonus;

	public Monster(long id, @NotNull String name, @NotNull int strength, @NotNull int agility, int wits, int empathy,
			String skills, int movement, int armor_bonus, int weapon_bonus) {
		super();
		this.id = id;
		this.name = name;
		this.strength = strength;
		this.agility = agility;
		this.wits = wits;
		this.empathy = empathy;
		this.skills = skills;
		this.movement = movement;
		this.armor_bonus = armor_bonus;
		this.weapon_bonus = weapon_bonus;
	}
	
	public Monster() {
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

	public int getStrength() {
		return strength;
	}

	public void setStrength(int strength) {
		this.strength = strength;
	}

	public int getAgility() {
		return agility;
	}

	public void setAgility(int agility) {
		this.agility = agility;
	}

	public int getWits() {
		return wits;
	}

	public void setWits(int wits) {
		this.wits = wits;
	}

	public int getEmpathy() {
		return empathy;
	}

	public void setEmpathy(int empathy) {
		this.empathy = empathy;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public int getMovement() {
		return movement;
	}

	public void setMovement(int movement) {
		this.movement = movement;
	}

	public int getArmor_bonus() {
		return armor_bonus;
	}

	public void setArmor_bonus(int armor_bonus) {
		this.armor_bonus = armor_bonus;
	}

	public int getWeapon_bonus() {
		return weapon_bonus;
	}

	public void setWeapon_bonus(int weapon_bonus) {
		this.weapon_bonus = weapon_bonus;
	}

	public void setId(long id) {
		this.id = id;
	}
	
	
}