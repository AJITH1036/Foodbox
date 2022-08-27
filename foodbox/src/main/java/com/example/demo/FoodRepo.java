package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
@Repository
public interface FoodRepo extends JpaRepository<Food, Integer> {
	
@Query("select food from Food food where food.name=?1")
public List<Food> findByName(String name);

}
