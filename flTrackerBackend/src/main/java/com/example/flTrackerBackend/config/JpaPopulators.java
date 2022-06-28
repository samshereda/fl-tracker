package com.example.flTrackerBackend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.data.repository.init.Jackson2RepositoryPopulatorFactoryBean;

import com.example.flTrackerBackend.model.Monster;

@Configuration
public class JpaPopulators {

//    @Bean
//    public Jackson2RepositoryPopulatorFactoryBean getRespositoryPopulator() throws Exception {
//        Jackson2RepositoryPopulatorFactoryBean factory = new Jackson2RepositoryPopulatorFactoryBean();
//        factory.setResources(new Resource[] { new ClassPathResource("seed_data.json") });
//        return factory;
//    }
}