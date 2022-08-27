package com.example.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
@Service
public class UserDao {
	@Autowired
	private UserRepo repo;
	
	public User addUser(User u) {
		return repo.save(u);
	}
	public List<User> getAllUser(){
		return repo.findAll();
	}
	public User getUserById(int id) {
		if(repo.findById(id).isPresent()) {
			return repo.findById(id).get();
		}
		else {
			return null;
		}
		
	}
	public User updateUser(int id, User u) {
		if(repo.findById(id).isPresent()) {
			User user= repo.findById(id).get();
            user.setName(u.getName());
            user.setEmail(u.getEmail());
            user.setPassword(u.getPassword());
            user.setAddress(u.getAddress());
            user.setContactno(u.getContactno());
            user.setCity(u.getCity());
			
			return repo.save(user);
		}
		else {
			return null;
		}
	}
	
	
	public boolean deleteUser(int id) {
		if(repo.findById(id).isPresent()) {
			repo.deleteById(id);
			return true;
		}
		
		else {
			return false;
		}
	}
	
	public List<User> findByNamePw(String email,String password) {
		return repo.findByNamePw(email, password);
	}
}
