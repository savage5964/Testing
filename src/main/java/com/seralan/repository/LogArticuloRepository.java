/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seralan.repository;

import java.util.Date;
import com.seralan.model.Estado;
import com.seralan.model.LogArticulo;
import com.seralan.model.LogArticuloId;
import org.springframework.data.jpa.repository.JpaRepository;



/**
 *
 * @author t41841
 */
public interface LogArticuloRepository extends JpaRepository<LogArticulo, LogArticuloId>{
//public interface LogArticuloRepository extends JpaRepository<LogArticulo, Integer>{
    /**
     * 
     * @return el máximo valor de los id de LogArticulo
     */
    public Integer findMaxId();
    
    /**
     * 
     * @param idArticulo
     * @param idEstado
     * @return regresa la fechaHora de LogArticulo
     */
//    public Date findMaxFechaByIdArticuloAndEstado(Integer idArticulo, Estado idEstado);
    
    /**
     * 
     * @param fechaHora
     * @param idArticulo
     * @return regresa el LogArticulo, haciendo la consulta por el id (fechaHora, idArticulo)
     */
//    public LogArticulo findByFechaHoraAndIdArticulo(Date fechaHora, Integer idArticulo);
    
    /**
     * 
     * @param idArticulo
     * @param idEstado
     * @param maxFecha
     * @return regresa el LogArticulo, haciendo la consulta por idArticulo, idEstado y fecha
     */
//    public LogArticulo findMaxFechaAndIdEstado(Integer idArticulo, Estado idEstado, Date maxFecha);
}
