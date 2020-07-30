package com.starwars.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.starwars.apirest.People;
import com.starwars.apirest.ResultsFindAll;
import com.starwars.service.PeopleService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;

@RestController
@Api(value = "People")
@RequestMapping("/api/people")
public class PeopleController {

	private PeopleService peopleService = new PeopleService();
	
	@ApiOperation(value = "list all people")
	@GetMapping("/page/{page}")
	public ResponseEntity<ResultsFindAll> listAll(@PathVariable("page") String page){
		return (ResponseEntity<ResultsFindAll>) peopleService.findAll(page);
	}
	
	@ApiOperation(value = "list one people by id")
	@GetMapping("/{id}")
	public ResponseEntity<People> listOne(@PathVariable("id") int id){
		return (ResponseEntity<People>) peopleService.findOne(id);
	}
	
}
