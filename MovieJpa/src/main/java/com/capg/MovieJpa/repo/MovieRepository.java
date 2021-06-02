package com.capg.MovieJpa.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capg.MovieJpa.entity.Movie;
@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer>{

	public List<Movie> findByCatagory(String catagory);

}
