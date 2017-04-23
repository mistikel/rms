package com.mitrais.rms.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(
		value = HttpStatus.NOT_FOUND,
		reason = "Not found")
public class Exception extends RuntimeException {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

}
