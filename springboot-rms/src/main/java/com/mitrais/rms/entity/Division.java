package com.mitrais.rms.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="t_division")
public class Division {
	@Id
	@Column(name="id_division")
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	
	@OneToMany(targetEntity=SubDivision.class,mappedBy="division",cascade=CascadeType.ALL)
	@JsonBackReference
	private List<SubDivision> subDivision;
	
	@Column(name="desc",nullable=false)
	private String description;
	
	public Division() {}

	public Division(String description) {
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<SubDivision> getSubDivision() {
		return subDivision;
	}

	public void setSubDivision(List<SubDivision> subDivision) {
		this.subDivision = subDivision;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
}
