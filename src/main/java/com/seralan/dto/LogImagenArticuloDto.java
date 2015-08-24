/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seralan.dto;

import java.util.Date;

/**
 *
 * @author t41841
 */
class LogImagenArticuloDto implements java.io.Serializable{
    
    private Date fechaHora;
    private Integer idArticulo;
    private Integer imagenAnverso; // file
    private Integer imagenReverso; // file

    public Date getFechaHora() {
        return fechaHora;
    }

    public void setFechaHora(Date fechaHora) {
        this.fechaHora = fechaHora;
    }

    public Integer getIdArticulo() {
        return idArticulo;
    }

    public void setIdArticulo(Integer idArticulo) {
        this.idArticulo = idArticulo;
    }

    public Integer getImagenAnverso() {
        return imagenAnverso;
    }

    public void setImagenAnverso(Integer imagenAnverso) {
        this.imagenAnverso = imagenAnverso;
    }

    public Integer getImagenReverso() {
        return imagenReverso;
    }

    public void setImagenReverso(Integer imagenReverso) {
        this.imagenReverso = imagenReverso;
    }

    @Override
    public String toString() {
        return "LogImagenArticuloDto{" + "fechaHora=" + fechaHora + ", idArticulo=" + idArticulo + ", imagenAnverso=" + imagenAnverso + ", imagenReverso=" + imagenReverso + '}';
    }
    
    
}
