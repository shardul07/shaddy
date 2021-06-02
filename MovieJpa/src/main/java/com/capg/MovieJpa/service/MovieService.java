package com.capg.MovieJpa.service;

import java.util.List;

import com.capg.MovieJpa.entity.Movie;

public interface MovieService {
	public List<Movie> addMovie(Movie movie);
	public List<Movie> deleteMovie(int id);
	public List<Movie> getAllMovies();
	public List<Movie> getMovieByCatagory(String catagory);
	public List<Movie> updateMovie(Movie movie);
}
