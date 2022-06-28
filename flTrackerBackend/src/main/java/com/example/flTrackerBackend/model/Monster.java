package com.example.flTrackerBackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;
import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement

@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Table(name = "monsters")
public class Monster {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "name")
	@NotNull
	private String name;

	@Column(name = "strength")
	@NotNull
	private Integer strength;

	@Column(name = "agility")
	@NotNull
	private Integer agility;
	
	@Column(name = "wits")
	private Integer wits;
	
	@Column(name = "empathy")
	private Integer empathy;
	
	@Column(name = "skills")
	private String skills;
	
	@Column(name = "movement")
	private Integer movement;
	
	@Column(name = "armor_bonus")
	private Integer armor_bonus;
	
	@Column(name = "weapon_bonus")
	private Integer weapon_bonus;

	public Monster(long id, @NotNull String name, @NotNull Integer strength, @NotNull Integer agility, Integer wits, Integer empathy,
			String skills, Integer movement, Integer armor_bonus, Integer weapon_bonus) {
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

	public Integer getStrength() {
		return strength;
	}

	public void setStrength(Integer strength) {
		this.strength = strength;
	}

	public Integer getAgility() {
		return agility;
	}

	public void setAgility(Integer agility) {
		this.agility = agility;
	}

	public Integer getWits() {
		return wits;
	}

	public void setWits(Integer wits) {
		this.wits = wits;
	}

	public Integer getEmpathy() {
		return empathy;
	}

	public void setEmpathy(Integer empathy) {
		this.empathy = empathy;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public Integer getMovement() {
		return movement;
	}

	public void setMovement(Integer movement) {
		this.movement = movement;
	}

	public Integer getArmor_bonus() {
		return armor_bonus;
	}

	public void setArmor_bonus(Integer armor_bonus) {
		this.armor_bonus = armor_bonus;
	}

	public Integer getWeapon_bonus() {
		return weapon_bonus;
	}

	public void setWeapon_bonus(Integer weapon_bonus) {
		this.weapon_bonus = weapon_bonus;
	}
	
	
}