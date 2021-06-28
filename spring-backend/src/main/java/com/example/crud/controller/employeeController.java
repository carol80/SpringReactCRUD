package com.example.crud.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.crud.entity.Employee;
import com.example.crud.service.employeeServiceInterface;

@CrossOrigin(maxAge = 3600)
@RestController
@RequestMapping("/api/v1")
public class employeeController {
	
	@Autowired
	private employeeServiceInterface empServiceInterface;
	
	@GetMapping("/showAll")
	public ResponseEntity<List<Employee>> getAllEmployees(){
		List<Employee> allEmployees = empServiceInterface.getAllEmployees();
		return new ResponseEntity<List<Employee>>(allEmployees, HttpStatus.OK);
	}
	
	@GetMapping("/show/{empId}")
	public ResponseEntity<Employee> getEmployee(@PathVariable("empId") Long empId){
		Employee selectedEmployee = empServiceInterface.getEmployee(empId);
		return new ResponseEntity<Employee>(selectedEmployee, HttpStatus.OK);
	}
	
	@PostMapping("/save")
	public ResponseEntity<Employee> addEmployee(@RequestBody Employee employee) {
		Employee savedEmployee = empServiceInterface.addEmployee(employee);
		return new ResponseEntity<Employee>(savedEmployee, HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete/{empId}")
	public ResponseEntity<Void> deleteEmployee(@PathVariable("empId") Long empId){
		empServiceInterface.deleteEmployee(empId);
		return new ResponseEntity<Void>(HttpStatus.ACCEPTED);
	}
	
	@PutMapping("/update/{empId}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("empId") Long EmpId, @RequestBody Employee employee) {
		Employee savedEmployee = empServiceInterface.addEmployee(employee);
		return new ResponseEntity<Employee>(savedEmployee, HttpStatus.CREATED);
	}
}
