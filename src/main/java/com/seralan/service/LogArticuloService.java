/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seralan.service;

import com.seralan.dto.ArticuloDto;
import com.seralan.dto.LogArticuloDto;
import com.seralan.model.Articulo;
import com.seralan.model.LogArticulo;
import com.seralan.utils.CommonException;
import java.util.List;

/**
 *
 * @author t41841
 */
public interface LogArticuloService {

    public Integer guardarArticulo(LogArticuloDto dto) throws CommonException;

    public LogArticulo consultarArticulo(Integer id);

    public Integer getLogArtiucloMaxId();

    public List<LogArticulo> listAllArticulo();
    
}
