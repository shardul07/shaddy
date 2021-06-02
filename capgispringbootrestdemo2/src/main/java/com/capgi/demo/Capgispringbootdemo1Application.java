package com.capgi.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import com.capgi.demo.entity.Product;
import com.capgi.demo.service.ProductService;
import com.capgi.demo.service.ProductServiceImpl;



@SpringBootApplication
//@EnableAutoConfiguration
//@ComponentScan("com.capgi.demo")
public class Capgispringbootdemo1Application {
	
	public static void main(String[] args) {
		SpringApplication.run(Capgispringbootdemo1Application.class, args);
	}

}
