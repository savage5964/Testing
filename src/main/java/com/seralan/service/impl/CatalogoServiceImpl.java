package com.seralan.service.impl;

import com.seralan.dto.AcabadoDto;
import com.seralan.dto.FamiliaDto;
import com.seralan.dto.MetalDto;
import com.seralan.dto.TipoComercializacionDto;
import java.util.List;
import javax.annotation.Resource;
import com.seralan.model.Acabado;
import com.seralan.model.ContratoCmm;
import com.seralan.model.Decreto;
import com.seralan.model.Estado;
import com.seralan.model.Familia;
import com.seralan.model.Metal;
import com.seralan.model.TipoArticulo;
import com.seralan.model.TipoComercializacion;
import com.seralan.repository.AcabadoRepository;
import com.seralan.repository.ContratoCmmRepository;
import com.seralan.repository.DecretoRepository;
import com.seralan.repository.EstadoRepository;
import com.seralan.repository.FamiliaRepository;
import com.seralan.repository.MetalRepository;
import com.seralan.repository.TipoArticuloRepositoty;
import com.seralan.repository.TipoComercializacionRepository;
import com.seralan.service.CatalogoService;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

/**
 *
 * @author G13380
 */
@Service
@Repository
public class CatalogoServiceImpl implements CatalogoService {

    private @Resource
    DecretoRepository decretoRepository;
    private @Resource
    TipoArticuloRepositoty tipoArticuloRepository;
    private @Resource
    TipoComercializacionRepository tipoComercializacionRepository;
    private @Resource
    AcabadoRepository acabadoRepository;
    private @Resource
    FamiliaRepository familiaRepository;
    private @Resource
    MetalRepository metalRepository;
    private @Resource
    EstadoRepository estadoRepository;
    private @Resource
    ContratoCmmRepository contratoCmmRepository;
    
    
    @Override
    public List<Decreto> listAllDecreto() {
        return decretoRepository.findAll();
    }

    @Override
    public List<TipoArticulo> listAllTipoArticulo() {
        return tipoArticuloRepository.findAll();
    }

    @Override
    public List<TipoComercializacion> listAllTipoComercializacion() {
        return tipoComercializacionRepository.findAll();
    }

    @Override
    public List<Acabado> listAllAcabado() {
        return acabadoRepository.findAll();
    }

    @Override
    public List<Familia> listAllFamilia() {
        return familiaRepository.findAll();
    }

    @Override
    public List<Metal> listAllMetal() {
        return metalRepository.findAll();
    }

    @Override
    public List<Estado> listAllEstado() {
        return estadoRepository.findAll();
    }

    @Override
    public List<ContratoCmm> listAllContratoCmm() {
        return contratoCmmRepository.findAll();
    }

//    @Override
//    public Integer listAllDecretoById() {
//        return decretoRepository.findDecretoMaxId();
//    }

}
