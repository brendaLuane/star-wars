package com.starwars.service;

import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.starwars.apirest.Planet;
import com.starwars.apirest.ResultsFindAll;

public class PlanetService {
	public ResponseEntity<ResultsFindAll> findAll(String page) {
		RestTemplate template = new RestTemplate();
		Request request = new Request();
		String uri = request.swapiUri("planets/", page);
		
		return  template.getForEntity(uri, ResultsFindAll.class);
	}
	
	public ResponseEntity<Planet> findOne(Integer id) {
		RestTemplate template = new RestTemplate();
		Request request = new Request();
		String uri = request.swapiUri("planets/".concat(id.toString()).concat("/"), "1");
		
		return  template.getForEntity(uri, Planet.class);
	}
}
