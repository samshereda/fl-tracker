package com.SamuelShereda.flTrackerBackend.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Parameter;	

@Entity
@Table(name= "active_encounters")
public class ActiveEncounter {
	@Id
	@Column
	@GeneratedValue(generator = "sequence-generator")
    @GenericGenerator(
      name = "sequence-generator",
      strategy = "org.hibernate.id.enhanced.SequenceStyleGenerator",
      parameters = {
        @Parameter(name = "sequence_name", value = "active_encounter_sequence"),
        @Parameter(name = "initial_value", value = "1"),
        @Parameter(name = "increment_size", value = "1")
        }
    )
	private long id;
	
	@OneToMany
    private List<ActiveMonster> activeMonsters;

	@Column
	private String type;
	
	

	public ActiveEncounter(long id, List<ActiveMonster> activeMonsters, String type) {
		super();
		this.id = id;
		this.activeMonsters = activeMonsters;
		this.type = type;
	}

	

	public ActiveEncounter() {
		super();
	}



	public long getId() {
		return id;
	}


	public List<ActiveMonster> getActiveMonsters() {
		return activeMonsters;
	}

	public void setActiveMonsters(List<ActiveMonster> activeMonsters) {
		this.activeMonsters = activeMonsters;
	}


	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
	
	
}
