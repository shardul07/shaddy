package com.capg.MovieJpa.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capg.MovieJpa.entity.Movie;
import com.capg.MovieJpa.service.MovieService;

@RestController
@RequestMapping("/api/v1")
public class MovieController {
	@Autowired MovieService movieService;
	
	@PostMapping(path="/add")
	public ResponseEntity<List<Movie>> addMovie(@Valid @RequestBody Movie movie)
	{
		List<Movie> list = movieService.addMovie(movie);
		return new ResponseEntity<List<Movie>>(list, HttpStatus.OK);
	}
	
	@DeleteMapping(path="/deleteById/{id}")
	public ResponseEntity<List<Movie>> deleteTraineeById(@PathVariable Integer id)
	{
		List<Movie> list = movieService.deleteMovie(id);
		return new ResponseEntity<List<Movie>>(list, HttpStatus.OK); 
	}
	
	@GetMapping(path="/getall")
	public ResponseEntity<List<Movie>> getAllMovies()
	{
		List<Movie> list = movieService.getAllMovies();
		if(list.isEmpty())
		{
			return new ResponseEntity("Sorry! Movie not available!", HttpStatus.NOT_FOUND);
		}
		else
		{
		    return new ResponseEntity<List<Movie>>(list, HttpStatus.OK);
		}
	}
	
	
	@GetMapping(path="/getMovieByCatagory/{catagory}")
	public ResponseEntity<List<Movie>> getMovieByCatagory(@PathVariable String catagory)
	{
		List<Movie> list = movieService.getMovieByCatagory(catagory);
		/*if(list.isEmpty())
		{
			return new ResponseEntity("Sorry! Movie not available!", HttpStatus.NOT_FOUND);
		}
		else
		{*/
		    return new ResponseEntity<List<Movie>>(list, HttpStatus.OK);
		}
	
	
	@PutMapping(path="/updateMovie")
	public ResponseEntity<List<Movie>> updateMovie(@RequestBody Movie movie)
	{
		List<Movie> list = movieService.updateMovie(movie);
		return new ResponseEntity<List<Movie>>(list, HttpStatus.OK);
	}
}
