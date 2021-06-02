package com.capgi.demo.service;

import java.util.List;

import com.capgi.demo.entity.Product;

public interface ProductService {

	public List<Product> createProduct(Product product);
	public Product getProductById(Integer id);
	
	public List<Product> getAllProducts();
	
	public List<Product> removeProduct(Integer id);
	public List<Product> getProductsByPriceRange(int min, int max);
	public List<Product> getProductsOrderByPriceDesc();
	public Product getProductByName(String pname);
	public List<Product> updateProduct(Product product);
}
