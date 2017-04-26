package com.mitrais.rms.entity;
/**
 * Class Entity of Employee
 */
import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import org.hibernate.validator.constraints.Email;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.mitrais.rms.entity.enumareted.Gender;
import com.mitrais.rms.entity.enumareted.MaritalStatus;
import com.mitrais.rms.entity.enumareted.Nationality;
@Entity
@Table(name="t_employee")
public class Employee {
	@Id
	@Column(name="emp_id")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long empId;
	
	@Column(name="first_name", nullable = false)
	private String firstName;
	
	@Column(name="last_name", nullable =false)
	private String lastName;
	
	@Enumerated(EnumType.STRING)
	@Column(name="gender", nullable = false)
	private Gender gender;
	
	@Column(name="dob", nullable = false)
	private Date dob;
	
	@Enumerated(EnumType.STRING)
	@Column(name="nationality", nullable=false)
	private Nationality nationality;
	
	@Enumerated(EnumType.STRING)
	@Column(name="marital_status", nullable=false)
	private MaritalStatus maritalStatus;
	
	@Column(name="phone", nullable=false)
	private String phone;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="sub_division")
	@JsonManagedReference
	private SubDivision subDivision;
	
	@Column(name="status", nullable=false)
	private String status;
	
	@Column(name="suspend_date")
	private Date suspendDate;
	
	@Column(name="hired_date", nullable=false)
	private Date hiredDate;
	
	@OneToOne(cascade=CascadeType.ALL)
	@JoinColumn(name="grade")
	@JsonManagedReference
	private Grade grade;
		
	@Email
	@Column(name="email", unique = true, nullable=false)
	private String email;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name="location", referencedColumnName="loc_id")
	@JsonManagedReference
	private Location location;
	
	@Column(name="image_url", nullable=false)
	private String imageUrl;
	
	public Employee() {}
	
	
	
	public Employee(String firstName, String lastName, Gender gender, Date dob, Nationality nationality,
			MaritalStatus maritalStatus, String phone, SubDivision subDivision, String status, Date suspendDate, Date hiredDate,
			Grade grade, String email, Location location, String imageUrl) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.gender = gender;
		this.dob = dob;
		this.nationality = nationality;
		this.maritalStatus = maritalStatus;
		this.phone = phone;
		this.subDivision = subDivision;
		this.status = status;
		this.suspendDate = suspendDate;
		this.hiredDate = hiredDate;
		this.grade = grade;
		this.email = email;
		this.location = location;
		this.imageUrl = imageUrl;
	}
	public Nationality getNationality() {
		return nationality;
	}
	public void setNationality(Nationality nationality) {
		this.nationality = nationality;
	}
	public MaritalStatus getMaritalStatus() {
		return maritalStatus;
	}
	public void setMaritalStatus(MaritalStatus maritalStatus) {
		this.maritalStatus = maritalStatus;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public SubDivision getSubDivision() {
		return subDivision;
	}
	public void setSubDivision(SubDivision subDivision) {
		this.subDivision = subDivision;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Date getSuspendDate() {
		return suspendDate;
	}
	public void setSuspendDate(Date suspendDate) {
		this.suspendDate = suspendDate;
	}
	public Date getHiredDate() {
		return hiredDate;
	}
	public void setHiredDate(Date hiredDate) {
		this.hiredDate = hiredDate;
	}
	public Grade getGrade() {
		return grade;
	}
	public void setGrade(Grade grade) {
		this.grade = grade;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public void setEmpId(Long empId) {
		this.empId = empId;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public Gender getGender() {
		return gender;
	}
	public void setGender(Gender gender) {
		this.gender = gender;
	}
	public Date getDob() {
		return dob;
	}
	public void setDob(Date dob) {
		this.dob = dob;
	}
	public Long getEmpId() {
		return empId;
	}

	public Location getLocation() {
		return location;
	}

	public void setLocation(Location location) {
		this.location = location;
	}
	
	
}
