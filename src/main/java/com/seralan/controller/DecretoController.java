/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seralan.controller;

import javax.annotation.Resource;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import com.seralan.service.CatalogoService;
import com.seralan.service.DecretoService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author t41841
 */
@Controller
@RequestMapping("/decreto")
public class DecretoController {
    
    private @Resource
    CatalogoService catalogoService;
    private @Resource
    DecretoService decretoService;
    
    private final Logger log = LogManager.getLogger(DecretoController.class);
    
    @RequestMapping
    public String populate(ModelMap map) {
        log.info("llenando los datos del decreto");
        map.addAttribute("idDecreto", decretoService.findDecretoMaxId());
        log.info(decretoService.findDecretoMaxId());
        map.addAttribute("listaDecreto", catalogoService.listAllDecreto());
        log.info(catalogoService.listAllDecreto());
        return "/catalogo/decreto";
    }
    
}
