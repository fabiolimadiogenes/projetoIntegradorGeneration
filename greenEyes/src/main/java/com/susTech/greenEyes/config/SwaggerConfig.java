package com.susTech.greenEyes.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@EnableSwagger2
@Configuration
public class SwaggerConfig {

	@Bean    
	public Docket docket(){       
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage
				 ("org.generation.blogpessoal.controler") )
				 .paths(PathSelectors.any())
				 .build()
				 .apiInfo(apiInfo());
	}
	
	private ApiInfo apiInfo() {
		return new ApiInfoBuilder()
				.title("Blog Pessoal")
				.description("Api do Projeto do Blog Pessoal")
				.version("1.0")
				.contact(contact())
				.build();
	}
	private Contact contact(){
		return new Contact("Vinicius De Melo",
				"https://github.com/Vini-Melo01",
				"Estudante GenerationBrasil Java Full-Stack");		
	}

	@Bean
	public Docket docket(){
		return new Docket(DocumentationType.SWAGGER_2)
			.select()
			.apis( RequestHandlerSelectors.basePackage
			("com.susTech.greenEyes.controller") )
			.paths(PathSelectors.any())
			.build()
			.apiInfo(apiInfo());
	}
	private ApiInfo apiInfo(){
		return new ApiInfoBuilder()
			.title("Green Eyes")
			.description("API do Projeto integrador")
			.version("1.0")
			.contact(contact())
			.build();
	}
	private Contact contact(){
		return new Contact("Grupo 03 Projeto integrador",
			"https://github.com/fabiolimadiogenes/projetoIntegradorGeneration",
			"");
		}
}

