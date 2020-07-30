package com.starwars.apirest;

//import java.util.ArrayList;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import org.springframework.web.util.UriComponents;
import org.springframework.http.ResponseEntity;

@SpringBootTest
class StarwarsApplicationTests {

	@Test
	void consumerAPI() {
		RestTemplate template = new RestTemplate();
		
		UriComponents uri = UriComponentsBuilder.newInstance()
				.scheme("https")
				.host("swapi.dev/api")
				.path("people/1/")
				.build();
		ResponseEntity<People> entity = template.getForEntity(uri.toUriString(), People.class);
		
		System.out.println(entity.getBody().getName());
		
//		Starship startships = new Starship();
//		System.out.println(startships.getName());
	}

}
