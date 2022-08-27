package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminDao {
	
	@Autowired
	private AdminRepo repo;
	
	public Admin addAdmin(Admin a) {
		return repo.save(a);
	}
	
	public List<Admin> findByNamePw(String name,String password) {
		return repo.findByNamePw(name, password);
	}
	
	

}
