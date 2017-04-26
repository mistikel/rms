package com.mitrais.rms.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name="t_sub_division")
public class SubDivision {
	@Id
	@Column(name="id_sub_division")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@ManyToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="division", referencedColumnName="id_division")
	@JsonManagedReference
	private Division division;
	
	@OneToOne(mappedBy="subDivision",cascade=CascadeType.ALL)
	@JsonBackReference
	private Employee employee;
	
	@Column(name="desc",nullable=false)
	private String description;
	
	public SubDivision() {}
	
	public SubDivision(Division division, String description) {
		this.division = division;
		this.description = description;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Division getDivision() {
		return division;
	}

	public void setDivision(Division division) {
		this.division = division;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	
}
