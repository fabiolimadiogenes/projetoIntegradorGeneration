package com.susTech.greenEyes.service;

import java.nio.charset.Charset;
import java.util.Optional;

import org.apache.commons.codec.binary.Base64;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.susTech.greenEyes.model.Login;
import com.susTech.greenEyes.model.Usuario;
import com.susTech.greenEyes.repository.UsuarioRepository;

@Service
public class UsuarioService
{
	@Autowired
	private UsuarioRepository repository;
	
	public Optional<Usuario> CadastrarEmail(Usuario usuario) {
		
		if(repository.findByEmail(usuario.getEmail()).isPresent())
			return null;
		
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		
		String senhaEncoder = encoder.encode(usuario.getSenha());
		
		usuario.setSenha(senhaEncoder);
		
		return Optional.of(repository.save(usuario));
	}
	
	public Optional<Login> Logar(Optional<Login> login)
	{
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		Optional<Usuario> usuario = repository.findByEmail(login.get().getEmail());
		
		if(usuario.isPresent())
		{
			if(encoder.matches(login.get().getSenha(), usuario.get().getSenha()))
			{
				String auth = login.get().getEmail() + ":" + login.get().getSenha();
				byte[] encodedAuth = Base64.encodeBase64(auth.getBytes(Charset.forName("US-ASCII")));
				String authHeader = "Basic " + new String(encodedAuth);
				
				login.get().setToken(authHeader);
				login.get().setEmail(usuario.get().getEmail());
				login.get().setNome(usuario.get().getNome());
				login.get().setSenha(usuario.get().getSenha());
				
				return login;
			}
		}
		return null;
	}
}