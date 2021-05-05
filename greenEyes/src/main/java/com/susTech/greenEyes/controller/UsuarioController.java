package com.susTech.greenEyes.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.susTech.greenEyes.model.Login;
import com.susTech.greenEyes.model.Usuario;
import com.susTech.greenEyes.repository.UsuarioRepository;
import com.susTech.greenEyes.service.UsuarioService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UsuarioController
{
	@Autowired
	UsuarioRepository repository;

	@Autowired
	private UsuarioService usuarioService;
	
	
	  @GetMapping public ResponseEntity<List<Usuario>> getAll() { return
	  ResponseEntity.ok(repository.findAll()); }
	  
	  @GetMapping("/{id}") public ResponseEntity<Usuario>
	  findByIdCategoria(@PathVariable long id) { return repository.findById(id)
	  .map(resp -> ResponseEntity.ok(resp))
	  .orElse(ResponseEntity.notFound().build()); }
	  
	  @GetMapping("/nome/{nome}") public ResponseEntity<List<Usuario>>
	  getByNome(@PathVariable String nome) { return
	  ResponseEntity.status(HttpStatus.OK).body(repository.
	  findAllByNomeContainingIgnoreCase(nome)); }
	 
	@PostMapping("/logar")
	public ResponseEntity<Login> Authentication(@RequestBody Optional<Login> user)
	{
		return usuarioService.Logar(user).map(resp -> ResponseEntity.ok(resp))
				.orElse(ResponseEntity.status(HttpStatus.UNAUTHORIZED).build());
	}
	
	@PostMapping("/cadastrar")
	public ResponseEntity<Usuario> post (@RequestBody Usuario usuario){
		Optional<Usuario> user = usuarioService.CadastrarEmail(usuario);
		try {
				return ResponseEntity.ok(user.get());
		}catch  (Exception e) {
				return ResponseEntity.badRequest().build();
		}
	}
	
			
	
	  @PutMapping public ResponseEntity<Usuario> put(@RequestBody Usuario
	  categoria) { return
	  ResponseEntity.status(HttpStatus.OK).body(repository.save(categoria)); }
	  
	  @DeleteMapping("/{id}") public void delete (@PathVariable long id) {
	  repository.deleteById(id); }
	 
}