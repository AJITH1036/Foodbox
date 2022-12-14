package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
	@Autowired
	private AdminDao dao;
	
	@PostMapping("/")
	public ResponseEntity<Admin> addAdmin(@RequestBody Admin a){
		
		Admin admin= dao.addAdmin(a);
		
		if(admin!=null)
			return new ResponseEntity<Admin>(admin,HttpStatus.CREATED);
		else
			return new ResponseEntity<Admin>(admin,HttpStatus.INTERNAL_SERVER_ERROR);		
	}

	

	@GetMapping("/{name},{password}")
	public ResponseEntity<Admin> findByNamePw(@PathVariable String name,@PathVariable String password){

      return new ResponseEntity<Admin>(HttpStatus.FOUND);

 
	
	}
}
