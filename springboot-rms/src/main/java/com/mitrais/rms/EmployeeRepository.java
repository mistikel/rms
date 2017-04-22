package com.mitrais.rms;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

//@RestResource(exported = false) menghilangkan fungsi default untuk REST dan harus membuat controller
public interface EmployeeRepository extends PagingAndSortingRepository<Employee, Long>{
	public List<Employee> findByLastName(@Param(value = "lastName") String lastName);
}
