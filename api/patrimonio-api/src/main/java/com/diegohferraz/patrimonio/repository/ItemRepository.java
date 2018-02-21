package com.diegohferraz.patrimonio.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.diegohferraz.patrimonio.model.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {

}
