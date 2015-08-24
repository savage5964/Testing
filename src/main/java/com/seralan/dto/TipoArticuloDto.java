/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seralan.dto;

import java.io.Serializable;

/**
 *
 * @author t41841
 */
public class TipoArticuloDto implements Serializable{
    
    private Integer id;
    private String descripcion;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return "TipoArticuloDto{" + "id=" + id + ", descripcion=" + descripcion + '}';
    }
    
    
}
