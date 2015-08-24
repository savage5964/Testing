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
public class DecretoDto implements java.io.Serializable{
    private Integer id;
    private Date fecha_publicacion;
    private String descripcon;
    private Integer archivo; // Archivo

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Date getFecha_publicacion() {
        return fecha_publicacion;
    }

    public void setFecha_publicacion(Date fecha_publicacion) {
        this.fecha_publicacion = fecha_publicacion;
    }

    public String getDescripcon() {
        return descripcon;
    }

    public void setDescripcon(String descripcon) {
        this.descripcon = descripcon;
    }

    public Integer getArchivo() {
        return archivo;
    }

    public void setArchivo(Integer archivo) {
        this.archivo = archivo;
    }

    @Override
    public String toString() {
        return "DecretoDto{" + "id=" + id + ", fecha_publicacion=" + fecha_publicacion + ", descripcon=" + descripcon + ", archivo=" + archivo + '}';
    }
    
    
    
}
