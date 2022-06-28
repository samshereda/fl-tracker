package com.example.flTrackerBackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

import com.example.flTrackerBackend.model.ActiveEncounter;
import com.example.flTrackerBackend.model.Monster;

@SpringBootApplication
public class FlTrackerBackendApplication implements RepositoryRestConfigurer{

	public static void main(String[] args) {
		SpringApplication.run(FlTrackerBackendApplication.class, args);
	}
	
	@Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        config.exposeIdsFor(Monster.class);
        config.exposeIdsFor(ActiveEncounter.class);
    }

}
