package com.mitrais.rms.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.mitrais.rms.entity.Location;
import com.mitrais.rms.exception.Exception;
import com.mitrais.rms.repository.LocationRepositroy;

@RestController
public class LocationController {
	@Autowired
	private LocationRepositroy locRepo;
	
	@GetMapping("/locations")
	@ResponseBody
	public Iterable<Location> getLocations(){
		try {
			return locRepo.findAll();
		} catch (Exception e) {
			System.err.println(e.getMessage());
			throw new Exception();
		}
		
	}
}
