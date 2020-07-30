package com.starwars.service;


import org.springframework.web.util.UriComponents;
import org.springframework.web.util.UriComponentsBuilder;


public class Request {
	public String swapiUri(String path, String page) {

		UriComponents uri = UriComponentsBuilder.newInstance()
				.scheme("https")
				.host("swapi.dev/api")
				.queryParam("page", page)
				.path(path)
				.build();
		return uri.toUriString();	
	}
}
