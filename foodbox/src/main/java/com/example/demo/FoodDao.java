package com.example.demo;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodDao implements FoodDaoImpl {
	@Autowired
	FoodRepo repo;

	@Override
	public Food addFood(Food f) {
		return repo.save(f);
	}
	@Override
	public List<Food> getAll(){
		return repo.findAll();
	}
	
	public Food updateFood(int id,Food f) {
		if(repo.findById(id).isPresent()) {
			Food ff=repo.findById(id).get();
			ff.setName(f.getName());
			ff.setPrice(f.getPrice());
			ff.setCuisine(f.getCuisine());
			ff.setDescription(f.getDescription());
			ff.setOffers(f.getOffers());
			return repo.save(ff);
		}
		else {
			return null;
		}
	}
	
	public boolean deleteFood(int id) {
		if(repo.findById(id).isPresent()) {
			repo.deleteById(id);
			return true;
		}
		else {
			return false;
		}
	}
	
	public Optional<Food> getFoodById(int id) {
		if(repo.findById(id).isPresent()) {
		return repo.findById(id);
	}
		else {
			return null;
		}
	}
	
	public List<Food>findByName(String name){
		return repo.findByName(name);
	}
}
