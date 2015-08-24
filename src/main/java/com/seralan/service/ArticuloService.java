/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seralan.service;

import com.seralan.dto.LogArticuloDto;
import com.seralan.model.Articulo;
import java.util.List;

/**
 *
 * @author t41841
 */
public interface ArticuloService {

    /**
     * 
     * @param dto
     * @return id del artículo registrado
     */
    public Integer guardarArticulo(LogArticuloDto dto);

    public List<Articulo> listAllArticulo();

    public Integer getLogArtiucloMaxId();

    public Articulo buscarArticulo(Integer id);
    
}
