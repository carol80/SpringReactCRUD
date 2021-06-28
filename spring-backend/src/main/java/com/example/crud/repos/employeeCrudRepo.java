package com.example.crud.repos;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.crud.entity.Employee;

@Repository
public interface employeeCrudRepo extends JpaRepository<Employee, Long> {

}
