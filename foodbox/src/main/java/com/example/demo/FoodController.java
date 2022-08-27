package com.example.demo;


import java.util.List;
import java.util.Optional;

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




@RestController
@RequestMapping("/api/food")
@CrossOrigin("http://localhost:4200/")
public class FoodController {
	
    @Autowired
	private FoodDao dao;
   

    
	@PostMapping("/")
    public ResponseEntity<Food> addFood(@RequestBody Food f ){
       Food ff =dao.addFood(f);
       if(ff!=null) 
    	   return new ResponseEntity<Food>(f, HttpStatus.CREATED);       
       else 
    	   return new ResponseEntity<Food>(f, HttpStatus.INTERNAL_SERVER_ERROR);
       
    }
    
    @GetMapping("/")
    public List<Food> getAllFood(){
    	return dao.getAll();
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<Object> updateFood(@PathVariable int id,@RequestBody Food f){
    	Food food=dao.updateFood(id, f);
    	if (food!=null) {
    		return new ResponseEntity<Object>(food,HttpStatus.OK);    		
    	}
    	else {
    		return new ResponseEntity<Object>(food,HttpStatus.NOT_FOUND);
    	}
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteFood(@PathVariable int id){
    	boolean result=dao.deleteFood(id);
    	if(result) {
    		return new ResponseEntity<String>("Object Deleted",HttpStatus.OK);
    	}
    	else {
    		return new ResponseEntity<String>("Object not Deleted",HttpStatus.NOT_FOUND);
    	}
    }
    
    @GetMapping("/{id}")
    public Optional<Food> getFoodById(@PathVariable int id){
    	return dao.getFoodById(id);
    }
    
    @GetMapping("/{name}")
    public List<Food> findByName(@PathVariable String name){
    	return dao.findByName(name);
    }
    
    
}
