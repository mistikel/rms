package com.mitrais.rms.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;


import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@RunWith(SpringRunner.class)
@WebAppConfiguration
@ContextConfiguration
@SpringBootTest
public class EmployeeControllerTest {
	@Autowired
	private WebApplicationContext wac;
	
	private MockMvc mockEmployee;
	
	@Configuration
	@EnableAutoConfiguration
	public static class Config{
		@Autowired
		public EmployeeController  employeeController(){
			return new EmployeeController();
		}
	}
	@Before
	public void setup(){
		MockitoAnnotations.initMocks(this);
		this.mockEmployee = MockMvcBuilders.webAppContextSetup(wac).build();
	}
	/*
	 * Error, find how to mock data response
	 */
	@Test
	public void getEmployee() throws Exception{
		this.mockEmployee.perform(get("/employees"))
		.andExpect(status().isOk());
	}
//	@Autowired
//	private EmployeeController empCont;
//	
//	@Configuration
//	@Import(EmployeeController.class)
//	static class config{}
//		
//	@MockBean
//	private EmployeeRepository empRepo;
//	
//	@Before
//	public void setup(){
//		Location loc = new Location(1,"Jakarta");
//		Employee emp = new Employee();
//		emp.setDivision("SE");
//		emp.setDob(new Date());
//		emp.setEmail("Mistiawanagsu@gmail.com");
//		emp.setFirstName("Agus");
//		emp.setLastName("Mistiawan");
//		emp.setGender(Gender.Male);
//		emp.setGrade("JP");
//		emp.setHiredDate(new Date());
//		emp.setImageUrl("Image");
//		emp.setMaritalStatus("Single");
//		emp.setNationality("INA");
//		emp.setPhone("081369713112");
//		emp.setStatus("Single");
//		emp.setSubDivision("SE");
//		emp.setSuspendDate(new Date());
//		emp.setLocation(loc);
//		try{
//			Field id = emp.getClass().getDeclaredField("empId");
//			id.setAccessible(true);
//			id.set(emp, new Long(2));
//		}catch(Exception ex){
//			System.err.println(ex.getMessage());
//		}
//		
//		Mockito.when(empRepo.findAll())
//			.thenReturn(nCopies(1, emp));
//		Mockito.when(empRepo.findOne((long)1))
//			.thenAnswer(new Answer() {
//
//				@Override
//				public Object answer(InvocationOnMock invocation) throws Throwable {
//					Long longId = (Long) invocation.getArguments()[0];
//					try {
//						Field id = emp.getClass().getDeclaredField("empId");
//						id.setAccessible(true);
//						id.set(emp, longId);
//					} catch(Exception ex) {
//						System.err.println(ex.getMessage());
//					}
//
//						return emp;
//				}
//				
//			});
//	}
//	
//	@Test
//	public void itShouldFindById()
//	{
//		given().
//			standaloneSetup(this.empCont).
//		when().
//			get("/employees/{employeeId}", 3).
//		then().
//			statusCode(200).
//			contentType(ContentType.JSON).
//			body("id", equalTo("/employees/" + 3)).
//			body("name", equalTo("Mukidi")).
//			body("birthDate", equalTo("2017-12-12"));
//}
//	
	
}
