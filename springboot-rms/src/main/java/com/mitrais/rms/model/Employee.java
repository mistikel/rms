package com.mitrais.rms.model;
/**
 * Class Entity of Employee
 */
import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
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
	
	@Column(name="dob")
	private Date dob;
	
	@Column(name="nationality", nullable=false)
	private String nationality;
	
	@Column(name="marital_status", nullable=false)
	private String maritalStatus;
	
	@Column(name="phone", nullable=false)
	private String phone;
	
	@Column(name="sub_division", nullable=false)
	private String subDivision;
	@Column(name="status", nullable=false)
	private String status;
	
	@Column(name="suspend_date")
	private Date suspendDate;
	
	@Column(name="hired_date", nullable=false)
	private Date hiredDate;
	
	@Column(name="grade", nullable=false)
	private String grade;
	
	@Column(name="division", nullable=false)
	private String division;
	
	@Column(name="email", nullable=false)
	private String email;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name="loc_id", referencedColumnName="loc_id")
	private Location location;
	
	@Column(name="image_url", nullable=false)
	private String imageUrl;
	
	public Employee() {}
	
	public String getNationality() {
		return nationality;
	}
	public void setNationality(String nationality) {
		this.nationality = nationality;
	}
	public String getMaritalStatus() {
		return maritalStatus;
	}
	public void setMaritalStatus(String maritalStatus) {
		this.maritalStatus = maritalStatus;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getSubDivision() {
		return subDivision;
	}
	public void setSubDivision(String subDivision) {
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
	public String getGrade() {
		return grade;
	}
	public void setGrade(String grade) {
		this.grade = grade;
	}
	public String getDivision() {
		return division;
	}
	public void setDivision(String division) {
		this.division = division;
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
