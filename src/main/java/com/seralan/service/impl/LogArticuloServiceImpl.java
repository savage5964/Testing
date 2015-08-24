/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seralan.service.impl;

import javax.annotation.Resource;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import com.seralan.dto.ArticuloDto;
import com.seralan.dto.LogArticuloDto;
import com.seralan.model.Acabado;
import com.seralan.model.Articulo;
import com.seralan.model.ContratoCmm;
import com.seralan.model.Decreto;
import com.seralan.model.Estado;
import com.seralan.model.Familia;
import com.seralan.model.LogArticulo;
import com.seralan.model.LogArticuloId;
import com.seralan.model.Metal;
import com.seralan.model.TipoArticulo;
import com.seralan.repository.AcabadoRepository;
import com.seralan.repository.ArticuloRepository;
import com.seralan.repository.ContratoCmmRepository;
import com.seralan.repository.DecretoRepository;
import com.seralan.repository.EstadoRepository;
import com.seralan.repository.FamiliaRepository;
import com.seralan.repository.LogArticuloRepository;
import com.seralan.repository.MetalRepository;
import com.seralan.repository.TipoArticuloRepositoty;
import com.seralan.service.LogArticuloService;
import com.seralan.utils.CommonException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 *
 * @author t41841
 */
@Service
@Repository
public class LogArticuloServiceImpl implements LogArticuloService{
    
    private final Logger log = LogManager.getLogger(LogArticuloServiceImpl.class);

    private Integer ESTADO_GUARDADO;

    private @Resource
    ArticuloRepository articuloRepository;
    private @Resource
    LogArticuloRepository logArticuloRepository;
    private @Resource
    DecretoRepository decretoRepository;
    private @Resource
    AcabadoRepository acabadoRepository;
    private @Resource
    FamiliaRepository familiaRepository;
    private @Resource
    MetalRepository metalRepository;
    private @Resource
    EstadoRepository estadoRepository;
    private @Resource
    TipoArticuloRepositoty tipoArticuloRepository;
    private @Resource
    ContratoCmmRepository contratoCmmRepository;
//    private @Resource
//    LogArticuloIdRepository logArticuloIdRepository;

    SimpleDateFormat formatterFechaHora = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss.SS");
    SimpleDateFormat formatterFecha = new SimpleDateFormat("dd/MM/yyyy");

    @Override
    @Transactional(readOnly = false, rollbackFor = CommonException.class)
    public Integer guardarArticulo(LogArticuloDto dto) throws CommonException {
        log.info("--- Guardar Artículo ---");
        try {
            Integer maxIdArticulo = logArticuloRepository.findMaxId();

//        LogArticuloId logArticuloId = new LogArticuloId();
            Date fechaHora = formatterFechaHora.parse(dto.getFechaHora());

//        hacer primero la consulta para ver si el registro existe
//        LogArticulo logArticulo = logArticuloRepository.findByFechaHoraAndIdArticulo(fechaHora, dto.getIdArticulo());
            LogArticulo logArticulo = new LogArticulo();
//            if (dto == null) {
//                // articulo Nuevo
//                System.out.println("--------------------------");
//                System.out.println("articulo Nuevo");
//            } else {
//            }

            
            Decreto decreto = dto.getDecreto() != null ? decretoRepository.findOne(dto.getDecreto()) : null;
            Acabado acabado = dto.getAcabado() != null ? acabadoRepository.findOne(dto.getAcabado()) : null;
            Familia familia = dto.getFamilia() != null ? familiaRepository.findOne(dto.getFamilia()) : null;
            Metal metal = dto.getMetal() != null ? metalRepository.findOne(dto.getMetal()) : null;
            TipoArticulo tipoArticulo = dto.getTipoArticulo() != null ? tipoArticuloRepository.findOne(dto.getTipoArticulo()) : null;
            Estado estado = dto.getEstado() != null ? estadoRepository.findOne(dto.getEstado()) : null;
            ContratoCmm contratoCmm = dto.getContratoCmm() != null ? contratoCmmRepository.findOne(dto.getContratoCmm()) : null;
            log.info("dropdown revisados");
            
//            if (decreto ) {
//                
//            } else {
//            }

            log.info("Max id= " + maxIdArticulo);
            log.info(dto);
            // Id
            logArticulo.setFechaHora(fechaHora);
            logArticulo.setIdArticulo(maxIdArticulo == null ? 1 : maxIdArticulo + 1);
            log.info("FechaHora " + logArticulo.getFechaHora());
            log.info("ID: " + logArticulo.getIdArticulo());
//        insertar el idArticuloErp desde la base de datos
            logArticulo.setIdArticuloErp("");
            logArticulo.setDecreto(decreto);
            logArticulo.setAcabado(acabado);
            logArticulo.setFamilia(familia);
            logArticulo.setMetal(metal);
            logArticulo.setTipoArticulo(tipoArticulo);
            logArticulo.setEstado(estado);
            logArticulo.setContratoCmm(contratoCmm);
//        hacer la lógica para agregar una cápsula
//        ver que artículos llevan cápsula
            // verificar los tipos de cápsula
            logArticulo.setIdCapsula(null);
            logArticulo.setClaveCmm(dto.getClaveCmm());
            logArticulo.setDescripcionLarga(dto.getDescripcionLarga());
//            logArticulo.setDescripcionLarga("Pieza de Oro");
            logArticulo.setDescripcionCorta(dto.getDescripcionCorta());
            logArticulo.setDescripcionIngles(dto.getDescripcionIngles());
            logArticulo.setCunio(dto.getCunio());
            logArticulo.setLey(dto.getLey());
            log.info("si pasa la ley");
//            logArticulo.setEspesor(BigDecimal.valueOf(dto.getEspesor()));
            logArticulo.setEspesor(dto.getEspesor());
            logArticulo.setDiametro(dto.getDiametro());
            logArticulo.setValorNominal(dto.getValorNominal());
            logArticulo.setTolLeyOro(dto.getTolLeyOro());
            logArticulo.setTolLeyPlata(dto.getTolLeyPlata());
            logArticulo.setTolPesoOro(dto.getTolPesoOro());
            logArticulo.setTolPesoPlata(dto.getTolPesoPlata());
            logArticulo.setTolConjuntoPesoOro(dto.getTolConjuntoPesoOro());
            logArticulo.setTolConjuntoPesoPlata(dto.getTolConjuntoPesoPlata());
            logArticulo.setPremioDolar(dto.getPremioDolar());
            logArticulo.setPremioPorcentaje(dto.getPremioPorcentaje());
            logArticulo.setClaveInforme(dto.getClaveInforme());
//        logArticulo.setIva(dto.getIva());
            // ver como rescatar el campo de iva y activo
            logArticulo.setIva(Boolean.FALSE);
            logArticulo.setActivo(true);
            logArticulo.setCostoProduccionUsd(dto.getCostoProduccionUsd());
            logArticulo.setCostoVariable(dto.getCostoVariable());
            logArticulo.setCostoFijoHerramental(dto.getCostoFijoHerramental());
            logArticulo.setContenidoOnzasOro(dto.getContenidoOnzasOro());
            logArticulo.setContenidoOnzasPlata(dto.getContenidoOnzasPlata());
            logArticulo.setContenidoOnzasCobre(dto.getContenidoOnzasCobre());
            logArticulo.setContenidoPorcentajeCobre(dto.getContenidoPorcentajeCobre());
            logArticulo.setMermaOro(dto.getMermaOro());
            logArticulo.setMermaPlata(dto.getMermaPlata());
//        agregar lo de la información extra
//        agregar datos para la información de los usuarios
            logArticulo.setClaveUsuAutoriza(null);
            logArticulo.setClaveUsuRegistra(null);
            logArticulo.setFechaAutorizado(null);
            logArticulo.setFechaEnvioAutorizar(null);

            log.info("Set de los datos");
//        terminar la parte del guardado de las imágenes
            log.info(logArticulo);

            //LogArticulo savedArticulo = 
            logArticuloRepository.save(logArticulo);
            log.info("Se guardó el registro correctamente");
//            return 1;
            return 1;
        } catch (Exception e) {
            log.error(e);
            throw new CommonException("No se pudo guardar el Artículo");
        }
    }

    @Override
    public Integer getLogArtiucloMaxId() {
        Integer id = logArticuloRepository.findMaxId();
        return id == null ? 1 : id + 1;
    }

    @Override
    public List<LogArticulo> listAllArticulo() {
        return logArticuloRepository.findAll();
    }

    @Override
    @Transactional(readOnly = true, rollbackFor = CommonException.class)
    public LogArticulo consultarArticulo(Integer id) {
        log.info("En implementación");
        log.info(id);
        LogArticulo logArticulo = logArticuloRepository.findOne(new LogArticuloId(id));
        return logArticulo;
    }
    
}
