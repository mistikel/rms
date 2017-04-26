package com.mitrais.rms.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity
@Table(name="t_grade")
public class Grade {
	@Id
	@Column(name="id_grade")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name="desc_grade", nullable=false)
	private String descGrade;
	
	@OneToOne(mappedBy="grade",cascade=CascadeType.ALL)
	@JsonBackReference
	private Employee employe;
	
	public Grade(String descGrade) {
		this.descGrade = descGrade;
	}
	
	public Grade() {}

	public Employee getEmploye() {
		return employe;
	}

	public void setEmploye(Employee employe) {
		this.employe = employe;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getDescGrade() {
		return descGrade;
	}

	public void setDescGrade(String descGrade) {
		this.descGrade = descGrade;
	}

	
}
