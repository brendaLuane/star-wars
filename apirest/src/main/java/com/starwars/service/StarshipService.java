package com.starwars.service;


import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;

import com.starwars.apirest.ResultsFindAll;
import com.starwars.apirest.Starship;

public class StarshipService {
	public ResponseEntity<ResultsFindAll> findAll(String page) {
		RestTemplate template = new RestTemplate();
		Request request = new Request();
		String uri = request.swapiUri("starships/",page);
		
		return  template.getForEntity(uri, ResultsFindAll.class);
	}
	
	public ResponseEntity<Starship> findOne(Integer id) {
		RestTemplate template = new RestTemplate();
		Request request = new Request();
		String uri = request.swapiUri("starships/".concat(id.toString()).concat("/"), "1");
		
		return  template.getForEntity(uri, Starship.class);
	}
	
	public ResponseEntity<ResultsFindAll> supplyStops(Object reqBody) {
		return this.findAll("1");
		
//		let all = this.findAll("1");
//		let currentDistance;
//		let count;
//		let aux = 2;
//		let distanceParam = reqBody.distance;
//		
//		for(let i =0; i < all.length; i++) {
//			count = 0;
//			currentDistance = all[i].distance;
//			while(currentDistance < distanceParam) {
//				count++;
//				currentDistance = (currentDistance * aux);
//				aux++;
//			}
//			all[i].stops = count;
//		}
//		
//		return all;
	}
	
	public ResponseEntity<Starship> bestStarship(Object reqBody) {
		return  this.findOne(3);
		
//		let all = this.findAll("1");
//		let best;
//		let distance = reqBody.distance;
//		let passengers = reqBody.passengers;
//		let current;
//		
//		for(let i=0; i < all.length. i++) {
//			current = all[i];
//			if(current.passengers >= passengers) {
//				if(!best || current.distance >= distance)
//					best = current;
//				else if(best.passengers > current.passengers || 
//						(best.passengers > current.passengers && best.distance > current.distance))
//					best = current;
//			}
//					
//		}
//		
//		return best;
		
	}
}
