package com.seralan.service;

import com.seralan.dto.AcabadoDto;
import com.seralan.dto.FamiliaDto;
import com.seralan.dto.MetalDto;
import java.util.List;
import com.seralan.model.Acabado;
import com.seralan.model.ContratoCmm;
import com.seralan.model.Decreto;
import com.seralan.model.Estado;
import com.seralan.model.Familia;
import com.seralan.model.Metal;
import com.seralan.model.TipoArticulo;
import com.seralan.model.TipoComercializacion;

public interface CatalogoService {
    
//    List<Idioma> listAllIdioma();
//    
//    List<Pais> listAllPais();
//    
//    List<TipoCliente> listAllTipoCliente();
//    
//    List<TipoContrato> listAllTipoContrato();
//    
//    List<TipoDireccion> listAllTipoDireccion();
    
//    List<TipoMercado> listAllTipoMercado();   
    
//    List<Almacen> listAllAlmacen();
    
    List<Estado> listAllEstado(); 

    List<Decreto> listAllDecreto();

    List<TipoArticulo> listAllTipoArticulo();

    List<TipoComercializacion> listAllTipoComercializacion();

    List<Acabado> listAllAcabado();

    List<Familia> listAllFamilia();

    List<Metal> listAllMetal();
    
    public List<ContratoCmm> listAllContratoCmm();

//    public List<Decreto> listAllDecretoById();
    
}
