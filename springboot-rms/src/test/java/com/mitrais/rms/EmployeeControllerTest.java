package com.mitrais.rms;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.mitrais.rms.controller.EmployeeController;
import com.mitrais.rms.entity.Employee;
import com.mitrais.rms.entity.Location;
import com.mitrais.rms.entity.enumareted.Gender;
import com.mitrais.rms.entity.enumareted.MaritalStatus;
import com.mitrais.rms.entity.enumareted.Nationality;
import com.mitrais.rms.repository.EmployeeRepository;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import java.util.Date;

@RunWith(SpringRunner.class)
@SpringBootTest
public class EmployeeControllerTest {
	
	private MockMvc mockEmployee;
	
	@Autowired
	private EmployeeRepository empRepo;
	
	@Before
	public void setup(){
		this.mockEmployee = MockMvcBuilders.standaloneSetup(new EmployeeController(empRepo)).build();
		this.empRepo.deleteAll();
		Location loc = new Location(1,"Jakarta");
		Employee emp = new Employee();
		emp.setEmpId(1L);
		emp.setDob(new Date());
		emp.setEmail("Mistiawanagsu@gmail.com");
		emp.setFirstName("Agus");
		emp.setLastName("Mistiawan");
		emp.setGender(Gender.Male);
		emp.setGrade("SE-JP");
		emp.setHiredDate(new Date());
		emp.setImageUrl("Image");
		emp.setMaritalStatus(MaritalStatus.Single);
		emp.setNationality(Nationality.INDONESIAN);
		emp.setPhone("081369713112");
		emp.setStatus("Single");
		emp.setSubDivision("SE");
		emp.setDivision("adasd");
		emp.setSuspendDate(new Date());
		emp.setLocation(loc);
		
		this.empRepo.save(emp);
		System.out.println(this.empRepo.findOne(1L));
	}
	@Test
	public void getEmployee() throws Exception{

		this.mockEmployee.perform(get("/employees"))
		.andExpect(status().isOk());
	}
}
