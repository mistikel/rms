package com.mitrais.rms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import org.springframework.web.bind.annotation.RestController;

import com.mitrais.rms.repository.EmployeeRepository;
import com.mitrais.rms.entity.Employee;
import com.mitrais.rms.entity.Location;
import com.mitrais.rms.entity.enumareted.Gender;
import com.mitrais.rms.exception.Exception;
/**
 * 
 * @author misti
 * Controller Employee
 */
@RestController
public class EmployeeController {
	@Autowired
	private EmployeeRepository empRepo;
	
	public EmployeeController(EmployeeRepository empRepo) {
		this.empRepo = empRepo;
	}
	/**
	 * get all employee
	 * @return employees
	 */
	@GetMapping("/employees")
	@ResponseBody
	public Iterable<Employee> getEmployees(){
		try {
			return empRepo.findAll();
		} catch (Exception e) {
			System.err.println(e.getMessage());
			throw new Exception();
		}
		
	}
	/**
	 * post new employee
	 * @param employee
	 * @return status
	 */
	@PostMapping("/employees")
	@ResponseBody
	public Employee postEmployee(@RequestBody Employee employee){
		try {
			return empRepo.save(employee);
		} catch (Exception e) {
			System.err.println(e.getMessage());
			throw new Exception();
		}
		
	}
	/**
	 * find by last name
	 * @param name
	 * @return employee 
	 */
	@GetMapping("/employees/sort")
	@ResponseBody
	public Iterable<Employee> sortByLastName(@RequestParam String sort){
		Sort.Order sorted;
	    if(sort.equals("asc")){
	    	sorted = new Sort.Order(Sort.Direction.ASC, "lastName").ignoreCase();
	    }else{
	    	sorted = new Sort.Order(Sort.Direction.DESC, "lastName").ignoreCase();
	    }
		try {
			return empRepo.findAll(new Sort(sorted));
		} catch (Exception e) {
			throw new Exception();
		}
	}
	
	@GetMapping("/employees/search")
	@ResponseBody
	public Iterable<Employee> findByName(@RequestParam String name){
		Sort.Order sorted = new Sort.Order(Sort.Direction.ASC, "lastName").ignoreCase();
		try {
			return empRepo.findByFirstNameContainingOrLastNameContainingAllIgnoreCase(name, name, new Sort(sorted));
		} catch (Exception e) {
			throw new Exception();
		}
	}
	
	/**
	 * get employee by id
	 * @param id
	 * @return employee
	 */
	@GetMapping("/employees/{id}")
	@ResponseBody
	public Employee getEmployeById(@PathVariable long id){
		Employee emp = empRepo.findOne(id);
		if(emp != null){
			return emp;
		}else{
			throw new Exception();
		}
	}
	
	/**
	 * update employee by id
	 * @param id
	 * @param emp
	 */
	@PutMapping("/employees/{id}")
	@ResponseBody
	public Employee putEmployeById(@PathVariable long id, @RequestBody Employee emp){
		try {
			emp.setEmpId(id);
			empRepo.save(emp);
			return emp;
		} catch (Exception e) {
			System.err.println(e.getMessage());
			throw new Exception();
		}
		
	}
	/**
	 * delete or remove employee by id
	 * @param id
	 */
	@DeleteMapping("/employees/{id}")
	@ResponseBody
	public void deleteEmployeeById(@PathVariable long id){
		try {
			empRepo.delete(id);
		} catch (Exception e) {
			System.err.println(e.getMessage());
			throw new Exception();
		}
		
	}
	/**
	 * Filter Employee by location and gender
	 * @param location
	 * @param gender
	 * @return employee
	 */
	@GetMapping("employee/filter/{location}/{gender}")
	@ResponseBody
	public List<Employee> getEmployeeFilter(@PathVariable long location, @PathVariable Gender gender){
		try {
			Location loc = new Location();
			loc.setId(location);
			List<Employee> emp = empRepo.findByGenderAndLocation(gender, loc);
			return emp;
		} catch (Exception e) {
			System.err.println(e.getMessage());
			throw new Exception();
		}
	}
	
	
}
