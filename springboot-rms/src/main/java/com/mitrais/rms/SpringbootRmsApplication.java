package com.mitrais.rms;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import com.mitrais.rms.entity.Employee;
import com.mitrais.rms.entity.Location;
import com.mitrais.rms.entity.enumareted.Gender;
import com.mitrais.rms.entity.enumareted.MaritalStatus;
import com.mitrais.rms.entity.enumareted.Nationality;
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
			for(int i=0; i<13; i++){
				Employee e = new Employee();
				e.setDob(new Date());
				e.setFirstName("Agus"+i);
				e.setLastName("Mistiawan"+i);
				e.setGender(Gender.Male);
				e.setEmail("Mistiawanagus@gmail.com"+i);
				e.setHiredDate(new Date());
				e.setLocation(l);
				e.setMaritalStatus(MaritalStatus.Single);
				e.setGrade("SE - JP");
				e.setNationality(Nationality.INDONESIAN);
				e.setPhone("081368713112");
				e.setImageUrl("image");
				e.setSubDivision("Software Engineer");
				e.setDivision("CDC - Red");
				e.setSuspendDate(new Date());
				e.setStatus("Contract");
				empRepo.save(e);
			}
			
		};
	}
}
