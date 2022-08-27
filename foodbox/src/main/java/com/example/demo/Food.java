package com.example.demo;



import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Food {
	@Id
    
	@GeneratedValue(strategy = GenerationType.AUTO)
private int id;
private String name;
private int price;
private String cuisine;
private String description;
private String offers;
private String photo;


}
