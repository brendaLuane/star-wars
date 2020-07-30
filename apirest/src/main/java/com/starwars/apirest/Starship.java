package com.starwars.apirest;


public class Starship {
	private String name;
	private String model;
	private String passengers;
	private float MGLT;
	private Integer stops;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public String getPassengers() {
		return passengers;
	}
	public void setPassengers(String passengers) {
		this.passengers = passengers;
	}
	public float getMGLT() {
		return MGLT;
	}
	public void setMGLT(float mGLT) {
		MGLT = mGLT;
	}
	public Integer getStops() {
		return stops;
	}
	public void setStops(Integer stops) {
		this.stops = stops;
	}
}
