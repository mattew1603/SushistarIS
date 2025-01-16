package com.Sushistar.SushistarIS.repo;

import com.Sushistar.SushistarIS.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ProductRepo extends JpaRepository<Product, Long> {
    Optional<Product> findByid(Long id);
    Optional<Product> findByProductName(String name);
}
