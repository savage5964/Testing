/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seralan.service.impl;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import com.seralan.dto.LogArticuloDto;
import com.seralan.model.Articulo;
import com.seralan.repository.ArticuloRepository;
import com.seralan.service.ArticuloService;
import java.util.List;
import javax.annotation.Resource;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

/**
 *
 * @author t41841
 */
@Service
@Repository
public class ArticuloServiceImpl implements ArticuloService{
    
    private final Logger logger = LogManager.getLogger(ArticuloServiceImpl.class);
    private @Resource ArticuloRepository articuloRepository;

    @Override
    public Integer guardarArticulo(LogArticuloDto dto) {
        logger.info(dto);
        return 1;
    }

    @Override
    public List<Articulo> listAllArticulo() {
//        mostrat artículos de la tabla artículos
//        Así como mostrar los artículos guardados
        return articuloRepository.findAll();
    }

    @Override
    public Integer getLogArtiucloMaxId() {
        Integer id = articuloRepository.findMaxId();
        return id == null ? 0 : id + 1;
    }

    @Override
    public Articulo buscarArticulo(Integer id) {
        Articulo articulo = articuloRepository.findOne(id);
        return articulo;
    }
    
}
