/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seralan.repository;

import com.seralan.model.Familia;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author t41841
 */
public interface FamiliaRepository extends JpaRepository<Familia, Integer>{
    
}
