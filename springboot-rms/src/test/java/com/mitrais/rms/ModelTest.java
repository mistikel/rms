package com.mitrais.rms;

import static org.junit.Assert.*;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.mitrais.rms.entity.Employee;
import com.mitrais.rms.entity.Location;
import com.mitrais.rms.entity.enumareted.Gender;
/**
 * Unit test for model employee and location
 * @author misti
 *
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class ModelTest {
	@Test
	public void validateEmployee(){
		Employee emp = new Employee();
		emp.setFirstName("Agus");
		emp.setLastName("Mistiawan");
		emp.setGender(Gender.Male);
		
		assertEquals("Agus",emp.getFirstName());
		assertEquals("Mistiawan", emp.getLastName());
		assertNotEquals("agus", emp.getLastName());
		assertEquals(Gender.Male, emp.getGender());
	}
	
	@Test
	public void validateLocation(){
		Location loc = new Location();
		loc.setCity("Jakarta");
		loc.setId(1);
		
		Employee emp = new Employee();
		emp.setFirstName("Agus");
		emp.setLastName("Mistiawan");
		emp.setLocation(loc);
		
		assertNotEquals("Bandung", loc.getCity());
		assertNotNull(loc);
		assertEquals(loc, emp.getLocation());
	}
}
