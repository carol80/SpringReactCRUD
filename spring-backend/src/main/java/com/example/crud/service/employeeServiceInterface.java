package com.example.crud.service;

import java.util.List;

import com.example.crud.entity.Employee;

public interface employeeServiceInterface {

	public Employee addEmployee(Employee employee);

	public List<Employee> getAllEmployees();

	public Employee getEmployee(Long empId);

	public void deleteEmployee(Long empId);

}
