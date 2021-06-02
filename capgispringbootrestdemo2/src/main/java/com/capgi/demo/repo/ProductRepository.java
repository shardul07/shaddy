package com.capgi.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.capgi.demo.entity.Product;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
    @Query(value = "select p from Product p where p.price>=:min and p.price<=:max")
	public List<Product> getProductsByPriceRange(int min, int max);
    
    @Query(value = "select p from Product p order by p.price desc")
    public List<Product> getProductsOrderByPriceDesc();
    
    public List<Product> findByOrderByPriceDesc();
    
    @Query(value = "select p from Product p where p.pname=:pname")
    public Product getProductByName(String pname);
    
    public Product findByPname(String pname);
}
