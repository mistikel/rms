package com.mitrais.rms.repository;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import com.mitrais.rms.entity.Employee;
import com.mitrais.rms.entity.Location;
import com.mitrais.rms.entity.enumareted.Gender;

@RestResource(exported = false)
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long>{
	public List<Employee> findByLastName(@Param(value = "lastName") String lastName);
	public List<Employee> findByGenderAndLocation(@Param(value="gender") Gender gender, @Param(value="location") Location location);
	public Iterable<Employee> findByFirstNameContainingOrLastNameContainingAllIgnoreCase(
			@Param("firstName") String firstName, @Param("lastName") String lastName, @Param(value = "asc") Sort sort);
}
