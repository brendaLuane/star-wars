package com.starwars.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starwars.apirest.ResultsFindAll;
import com.starwars.apirest.Starship;
import com.starwars.service.StarshipService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;


@RestController
@Api(value = "Starships")
@RequestMapping("/api/starship")
public class StarshipController {
	
	private StarshipService starshipService = new StarshipService();
	
	@ApiOperation(value = "list all starships")
	@GetMapping("/page/{page}")
	public ResponseEntity<ResultsFindAll> listAll(@PathVariable("page") String page){
		return (ResponseEntity<ResultsFindAll>) starshipService.findAll(page);
	}
	
	@ApiOperation(value = "list one starship by id")
	@GetMapping("/{id}")
	public ResponseEntity<Starship> listOne(@PathVariable("id") int id){
		return (ResponseEntity<Starship>) starshipService.findOne(id);
	}
	
	@ApiOperation(value = "list all starships with the number of necessary stops ")
	@PostMapping("/stops")
	public ResponseEntity<ResultsFindAll> supplyStops(@RequestBody Object reqBody){
		return  starshipService.supplyStops(reqBody);
	}
	
	@ApiOperation(value = "list the best starship indicated for a given number of passengers over a given distance")
	@PostMapping("/beststarship")
	public ResponseEntity<Starship> bestStarship(@RequestBody Object reqBody){
		return  starshipService.bestStarship(reqBody);
	}
}
