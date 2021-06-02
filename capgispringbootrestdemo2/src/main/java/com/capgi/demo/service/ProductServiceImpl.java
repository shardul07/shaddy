package com.capgi.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgi.demo.entity.Product;
import com.capgi.demo.exception.ProductNotFoundException;
import com.capgi.demo.repo.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
	ProductRepository  productRepository;
	
	@Override
	public List<Product> createProduct(Product product) {
		productRepository.save(product);
		return productRepository.findAll();
		
	}

	@Override
	public List<Product> updateProduct(Product product) {
		productRepository.save(product);
		return productRepository.findAll();
		
	}
	
	@Override
	public Product getProductById(Integer id) {
		Optional<Product> product = productRepository.findById(id);
		if(product.isPresent())
			return product.get();
		else
		    throw new ProductNotFoundException();
	}

	@Override
	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}

	@Override
	public List<Product> removeProduct(Integer id) {
		Optional<Product> product = productRepository.findById(id);
		if(product.isPresent())
		     productRepository.deleteById(id);
		return productRepository.findAll();
		
	}

	@Override
	public List<Product> getProductsByPriceRange(int min, int max) {
		return productRepository.getProductsByPriceRange(min, max);
	}

	@Override
	public List<Product> getProductsOrderByPriceDesc() {
		//return productRepository.getProductsOrderByPriceDesc();
		return productRepository.findByOrderByPriceDesc();
	}

	@Override
	public Product getProductByName(String pname) {
		//return productRepository.getProductByName(pname);
		return productRepository.findByPname(pname);
	}

	
}




