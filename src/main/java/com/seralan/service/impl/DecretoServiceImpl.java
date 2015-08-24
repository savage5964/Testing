/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seralan.service.impl;

import com.seralan.repository.DecretoRepository;
import com.seralan.service.DecretoService;
import javax.annotation.Resource;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

/**
 *
 * @author TOSHIBA
 */
@Repository
@Service
public class DecretoServiceImpl implements DecretoService {

    private final Logger log = LogManager.getLogger(DecretoServiceImpl.class);
    
    private @Resource
    DecretoRepository decretoRepository;
    
    @Override
    public Integer findDecretoMaxId() {
        return decretoRepository.findDecretoMaxId();
    }
    
}
