package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface AdminRepo extends JpaRepository<Admin, Integer>{
	
	@Query("select admin from Admin admin where admin.name=?1 and admin.password=?1")
	
	public List<Admin> findByNamePw(String name, String password);
	}


