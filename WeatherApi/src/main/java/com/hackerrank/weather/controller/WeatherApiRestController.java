package com.hackerrank.weather.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import com.hackerrank.weather.model.Weather;
import com.hackerrank.weather.repository.WeatherRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class WeatherApiRestController {

  @Autowired
  WeatherRepository repo;

  @PostMapping("/weather")
  public ResponseEntity<Weather> addWeatherRecord(@RequestBody Weather weather){
    Weather w = new Weather();
    w.setCity(weather.getCity());
    w.setDateRecorded(weather.getDateRecorded());
    w.setLat(weather.getLat());
    w.setLon(weather.getLon());
    w.setState(weather.getState());
    w.setTemperature(weather.getTemperature());

    repo.save(w);

    return new ResponseEntity<Weather>(w,HttpStatus.CREATED);

  }
  @GetMapping("/weather")
  public ResponseEntity<List<Weather>> getWeatherRecords(){
    List<Weather> list = new ArrayList<>();
    list = repo.findAll();
    return new ResponseEntity<List<Weather>>(list,HttpStatus.OK);
  }
  @GetMapping("/weather/{id}")
  public ResponseEntity<Weather> getWeatherById(@PathVariable int id){
    Optional<Weather> w = repo.findById(id);
    if(w.isPresent()) return new ResponseEntity<Weather>(w.get(),HttpStatus.OK);
    else return new ResponseEntity<Weather>(new Weather(), HttpStatus.NOT_FOUND);
  }
  @DeleteMapping("/weather/{id}")
  public ResponseEntity<String> deleteWeather(@PathVariable int id){
    Optional<Weather> w = repo.findById(id);
    if(!w.isPresent()) return new ResponseEntity<String>("", HttpStatus.NOT_FOUND);
    else{
      repo.deleteById(id);
      return new ResponseEntity<String>("", HttpStatus.NO_CONTENT);
    }
    
  }
}
