package com.capg.MovieJpa.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capg.MovieJpa.entity.Movie;
import com.capg.MovieJpa.error.MovieListEmptyException;
import com.capg.MovieJpa.error.MovieNotFoundException;
import com.capg.MovieJpa.repo.MovieRepository;

@Service
public class MovieServiceImpl implements MovieService{
	@Autowired MovieRepository movieRepository;
	
	@Override
	@Transactional
	public List<Movie> addMovie(Movie movie) {
		movieRepository.save(movie);
		return movieRepository.findAll();
	}

	@Override
	@Transactional
	public List<Movie> deleteMovie(int id) {
		Optional<Movie> movie = movieRepository.findById(id);
		if(movie.isPresent())
		{
			movieRepository.deleteById(id);
		}
		return movieRepository.findAll();
	}

	@Override
	@Transactional
	public List<Movie> getAllMovies() {
		return movieRepository.findAll();
	}

	@Override
	@Transactional
	public List<Movie> getMovieByCatagory(String catagory) {
		List<Movie> movie = movieRepository.findByCatagory(catagory);
		
		if(movie.isEmpty())
		{
			throw new MovieListEmptyException();
		}
		return movie;
	}
	

	@Override
	public List<Movie> updateMovie(Movie movie) {
		movieRepository.save(movie);
		return movieRepository.findAll();
	}

}
