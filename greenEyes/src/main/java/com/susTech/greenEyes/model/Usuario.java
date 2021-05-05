package com.susTech.greenEyes.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.Size;

import com.sun.istack.NotNull;

@Entity
@Table (name = "usuario")
public class Usuario {
	@Id
	@GeneratedValue
	private long id;
	
	@NotNull
	@Size (min = 5, max = 100)
	private String nome;

	@NotNull
	@Size (min = 5, max = 100)
	private String sobrenome;
	
	@NotNull
	@Size (min = 3, max = 50)
	private String email;
	
	@NotNull
	private String senha;

	public void setId(long id) {
		this.id = id;
	}

	public long getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getSobrenome() {
		return sobrenome;
	}

	public void setSobrenome(String sobrenome) {
		this.sobrenome = sobrenome;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getSenha() {
		return senha;
	}

	public void setSenha(String senha) {
		this.senha = senha;
	}
}
