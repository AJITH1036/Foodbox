package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepo extends JpaRepository<User, Integer>{
@Query("select user from User user where user.email=?1 and user.password=?1")
public List<User> findByNamePw(String email, String password);
}
