package com.example.crud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.crud.entity.Employee;
import com.example.crud.repos.employeeCrudRepo;

@Service
public class employeeService implements employeeServiceInterface {

	@Autowired
	private employeeCrudRepo crudRepo;

	@Override
	public Employee addEmployee(Employee employee) {
		Employee emp = crudRepo.save(employee);
		return emp;
	}

	@Override
	public List<Employee> getAllEmployees() {
		return crudRepo.findAll();
	}

	@Override
	public Employee getEmployee(Long empId) {
		return crudRepo.findById(empId).get();
	}

	@Override
	public void deleteEmployee(Long empId) {
		crudRepo.deleteById(empId);
	}
}
