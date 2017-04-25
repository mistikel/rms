package com.mitrais.rms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	public EmployeeController() {
		// TODO Auto-generated constructor stub
	}
	/**
	 * get all employee
	 * @return employees
	 */
	@GetMapping("/employees")
	@ResponseBody
	public Iterable<Employee> getEmployees(){
		return empRepo.findAll();
	}
	/**
	 * post new employee
	 * @param employee
	 * @return status
	 */
	@PostMapping("/employees")
	@ResponseBody
	public Employee postEmployee(@RequestBody Employee employee){
		return empRepo.save(employee);
	}
	/**
	 * find by last name
	 * @param name
	 * @return employee 
	 */
	@PostMapping("/employees/findbylastname")
	@ResponseBody
	public List<Employee> findByName(@RequestParam String name){
		List<Employee> emp = empRepo.findByLastName(name);
		if(emp.size() > 0){
			return emp;
		}else{
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
	public void putEmployeById(@PathVariable long id, @RequestBody Employee emp){
		emp.setEmpId(id);
		empRepo.save(emp);
	}
	/**
	 * delete or remove employee by id
	 * @param id
	 */
	@DeleteMapping("/employees/{id}")
	@ResponseBody
	public void deleteEmployeeById(@PathVariable long id){
		empRepo.delete(id);
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
		Location loc = new Location();
		loc.setId(location);
		List<Employee> emp = empRepo.findByGenderAndLocation(gender, loc);
		return emp;
	}
	
	
}
