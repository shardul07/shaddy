package com.capg.MovieJpa.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;



@Entity
public class Movie {
	@Id	
@NotNull(message = "Please provide movie id")
@Min(value=1,message = "id should be greater than 0")	
	private int id;
	
@NotEmpty(message = "Please provide moviename")
@Size(min = 6, max = 30, message = "movie name should be between  6 to 30")	
	private String name;

@NotNull(message = "Please provide rating")
@Min(value = 1 ,message = "rating minimum should be 1 ")
@Max(value=10 , message="rating maximum should be 10")

	private double rating;
	@Column(name="category")
	@NotEmpty(message = "Please provide catagory")
	private String catagory;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getRating() {
		return rating;
	}
	public void setRating(double rating) {
		this.rating = rating;
	}
	public String getCatagory() {
		return catagory;
	}
	public void setCatagory(String catagory) {
		this.catagory = catagory;
	}
}
