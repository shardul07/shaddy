package com.capgi.demo.contoller;

import java.util.List;

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

import com.capgi.demo.entity.Product;
import com.capgi.demo.exception.ProductEmptyException;
import com.capgi.demo.exception.ProductNotFoundException;
import com.capgi.demo.service.ProductService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ProductController {

	@Autowired
	ProductService productService;
	
	@DeleteMapping(path="/deleteproduct/{pid}")
	public ResponseEntity<List<Product>> deleteProduct(@PathVariable Integer pid){
		List<Product> list = productService.removeProduct(pid);
		return new ResponseEntity<List<Product>>(list, HttpStatus.OK);
	}
	
	
	@PostMapping(path="/create")
	public ResponseEntity<List<Product>> addProduct( @RequestBody Product product) {
		List<Product> list = productService.createProduct(product);
		return new ResponseEntity<List<Product>>(list, HttpStatus.OK);
	}
	
	@PutMapping(path="/updateproduct")
	public ResponseEntity<List<Product>> updateProduct( @RequestBody Product product) {
		List<Product> list = productService.updateProduct(product);
		return new ResponseEntity<List<Product>>(list, HttpStatus.OK);
	}
	
	
	@GetMapping(path = "/getall")
	public ResponseEntity<List<Product>> getAllProducts(){
		List<Product> list =  productService.getAllProducts();
		System.out.println("List:"+list);
		//list.removeAll(list);
		if(list.isEmpty())
		{
			//return new ResponseEntity("Sorry! Products not available!", HttpStatus.NOT_FOUND);
			throw new ProductEmptyException("List is empty");
		}
		else
		return new ResponseEntity<List<Product>>(list, HttpStatus.OK);
	}
	
	@GetMapping(path = "/getproduct/{pid}")
	public ResponseEntity<Product> getProductById(@PathVariable Integer pid) {
		Product product = productService.getProductById(pid);
		if(product==null) {
			//return new ResponseEntity("Sorry! Product not available!", HttpStatus.NOT_FOUND);
			throw  new ProductNotFoundException();
		}
		else {
			return new ResponseEntity<Product>(product, HttpStatus.OK);
		}
		
	}
}







