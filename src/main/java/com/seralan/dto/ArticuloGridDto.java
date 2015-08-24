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
public class ArticuloGridDto implements java.io.Serializable{
    
    private Integer recid;
    private String tipoArticulo;
    private String descripcion;
    private String familia;
    private String metal;
    private String acabado;
    private Short cunio;

    public Integer getRecid() {
        return recid;
    }

    public void setRecid(Integer recid) {
        this.recid = recid;
    }

    public String getTipoArticulo() {
        return tipoArticulo;
    }

    public void setTipoArticulo(String tipoArticulo) {
        this.tipoArticulo = tipoArticulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public String getFamilia() {
        return familia;
    }

    public void setFamilia(String familia) {
        this.familia = familia;
    }

    public String getMetal() {
        return metal;
    }

    public void setMetal(String metal) {
        this.metal = metal;
    }

    public String getAcabado() {
        return acabado;
    }

    public void setAcabado(String acabado) {
        this.acabado = acabado;
    }

    public Short getCunio() {
        return cunio;
    }

    public void setCunio(Short cunio) {
        this.cunio = cunio;
    }

    @Override
    public String toString() {
        return "ArticuloGridDto{" + "recid=" + recid + ", tipoArticulo=" + tipoArticulo + ", descripcion=" + descripcion + ", familia=" + familia + ", metal=" + metal + ", acabado=" + acabado + ", cunio=" + cunio + '}';
    }
    
}
