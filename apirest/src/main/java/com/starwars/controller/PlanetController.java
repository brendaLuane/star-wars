package com.starwars.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starwars.apirest.Planet;
import com.starwars.apirest.ResultsFindAll;
import com.starwars.service.PlanetService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(value = "Planets")
@RequestMapping("/api/planet")
public class PlanetController {
	
	private PlanetService planetService = new PlanetService();
	
	@ApiOperation(value = "list all planets")
	@GetMapping("/page/{page}")
	public ResponseEntity<ResultsFindAll> listAll(@PathVariable("page") String page){
		return (ResponseEntity<ResultsFindAll>) planetService.findAll(page);
	}
	
	@ApiOperation(value = "list one planet by id")
	@GetMapping("/{id}")
	public ResponseEntity<Planet> listOne(@PathVariable("id") int id){
		return (ResponseEntity<Planet>) planetService.findOne(id);
	}
}
