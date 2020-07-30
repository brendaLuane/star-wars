package com.starwars.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.starwars.apirest.People;
import com.starwars.apirest.ResultsFindAll;


public class PeopleService {


	public ResponseEntity<ResultsFindAll> findAll(String page) {
		RestTemplate template = new RestTemplate();
		Request request = new Request();
		String uri = request.swapiUri("people/", page);
		
		return  template.getForEntity(uri, ResultsFindAll.class);
	}
	
	public ResponseEntity<People> findOne(Integer id) {
		RestTemplate template = new RestTemplate();
		Request request = new Request();
		String uri = request.swapiUri("people/".concat(id.toString()).concat("/"), "1");
		
		return  template.getForEntity(uri, People.class);
	}
}
