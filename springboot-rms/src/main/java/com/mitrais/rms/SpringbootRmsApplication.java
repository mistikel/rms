package com.mitrais.rms;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import com.mitrais.rms.model.Employee;
import com.mitrais.rms.model.Gender;
import com.mitrais.rms.model.Location;
import com.mitrais.rms.repository.EmployeeRepository;
import com.mitrais.rms.repository.LocationRepositroy;

/**
 * 
 * @author misti
 *
 */
@SpringBootApplication
public class SpringbootRmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootRmsApplication.class, args);
	}
	@Autowired
	private LocationRepositroy locRepo;
	
	@Autowired
	private EmployeeRepository empRepo;

	@Bean
	public CommandLineRunner printAll(ApplicationContext ctx){
		return args-> {
			Location l = new Location();
			l.setCity("Jakarta");
			locRepo.save(l);
			Employee e = new Employee();
			e.setDob(new Date());
			e.setFirstName("Agus");
			e.setLastName("Mistiawan");
			e.setGender(Gender.Male);
			e.setDivision("SE");
			e.setEmail("Mistiawanagus@gmail.com");
			e.setHiredDate(new Date());
			e.setLocation(l);
			e.setMaritalStatus("Single");
			e.setGrade("JP");
			e.setNationality("Indonesian");
			e.setPhone("081368713112");
			e.setImageUrl("image");
			e.setSubDivision("SE");
			e.setSuspendDate(new Date());
			e.setStatus("Contract");
			//set everything
			empRepo.save(e);
		};
	}
}
