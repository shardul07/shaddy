package com.capgi.demo;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.web.client.RestTemplate;

import com.capgi.demo.entity.Product;
import com.capgi.demo.service.ProductService;
import com.capgi.demo.service.ProductServiceImpl;



@SpringBootApplication
//@EnableAutoConfiguration
//@ComponentScan("com.capgi.demo")
public class Capgispringbootdemo1Application2 {
	
	public static void main(String[] args) {
		SpringApplication.run(Capgispringbootdemo1Application2.class, args);
		
		String url="http://localhost:8083/api/v1";
		RestTemplate template = new RestTemplate();
		Product[] parray = template.getForObject(url+"/getall", Product[].class);
		List<Product> list = Arrays.asList(parray);
		for(Product p:list) {
			System.out.println(p.getPid()+" "+p.getPname()+" "+p.getPrice());
		}
		
		Product p = template.getForObject(url+"/getproduct/100", Product.class);
		System.out.println("--------------");
		System.out.println(p.getPid()+" "+p.getPname()+" "+p.getPrice());
		
		Map<String,Integer> map = new HashMap<String, Integer>();
		map.put("pid", 100);
		Product p1 = template.getForObject(url+"/getproduct/{pid}", Product.class,map);
		System.out.println("--------------");
		System.out.println(p1.getPid()+" "+p1.getPname()+" "+p1.getPrice());
		
	}

}
