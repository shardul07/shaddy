package com.capgi.demo.exception;



//@ResponseStatus(value = HttpStatus.BAD_REQUEST, reason = "Product Id not found")
public class ProductEmptyException extends RuntimeException{
  /**
	 * 
	 */
	private static final long serialVersionUID = 1L;

public ProductEmptyException(String msg) {
	  super(msg);
  }
}
