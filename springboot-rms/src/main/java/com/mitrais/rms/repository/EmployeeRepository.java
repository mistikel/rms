package com.mitrais.rms.repository;

import org.springframework.data.domain.Sort;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RestResource;

import com.mitrais.rms.entity.Employee;
import com.mitrais.rms.entity.Location;
import com.mitrais.rms.entity.enumareted.Gender;

@RestResource(exported = false)
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long>{
	public Iterable<Employee> findByGenderAndLocation(@Param(value="gender") Gender gender, @Param(value="location") Location location);
	public Iterable<Employee> findByFirstNameContainingOrLastNameContainingAllIgnoreCase(
			@Param("firstName") String firstName, @Param("lastName") String lastName, @Param(value = "asc") Sort sort);
	public Iterable<Employee> findByLocation(@Param(value="location") Location location);
	public Iterable<Employee> findByGender(@Param(value="gender") Gender gender);
}
