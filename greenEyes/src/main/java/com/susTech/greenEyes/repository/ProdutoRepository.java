package com.susTech.greenEyes.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.susTech.greenEyes.model.Produto;

@Repository
public interface ProdutoRepository extends JpaRepository<Produto, Long>
{
	public List<Produto> findAllByNomeContainingIgnoreCase(String nome);
}
