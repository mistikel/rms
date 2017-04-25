package com.mitrais.rms.repository;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mitrais.rms.entity.Employee;
import com.mitrais.rms.entity.Location;
import com.mitrais.rms.entity.enumareted.Gender;
import com.mitrais.rms.entity.enumareted.MaritalStatus;
import com.mitrais.rms.entity.enumareted.Nationality;

import static org.assertj.core.api.Assertions.*;

@RunWith(SpringRunner.class)
@DataJpaTest
public class EmployeeRepositoryTest {
	@Autowired
	private EntityManager entity;
	
	@Autowired
	private EmployeeRepository empRepo;
	
	@Test
	public void empTest() throws Exception{
		Location loc = new Location(1,"Jakarta");
		Employee emp = new Employee();
		emp.setDivision("SE");
		emp.setDob(new Date());
		emp.setEmail("Mistiawanagsu@gmail.com");
		emp.setFirstName("Agus");
		emp.setLastName("Mistiawan");
		emp.setGender(Gender.Male);
		emp.setGrade("JP");
		emp.setHiredDate(new Date());
		emp.setImageUrl("Image");
		emp.setMaritalStatus(MaritalStatus.SINGLE);
		emp.setNationality(Nationality.INDONESIAN);
		emp.setPhone("081369713112");
		emp.setStatus("Single");
		emp.setSubDivision("SE");
		emp.setSuspendDate(new Date());
		emp.setLocation(loc);
		
		entity.persist(emp);
		List<Employee> employee = this.empRepo.findByLastName("Mistiawan");
		assertThat(employee.get(0).getEmail()).isEqualTo("Mistiawanagus@gmail.com");
		assertThat(employee.get(0).getGender()).isEqualTo(Gender.Male);
	}
}
