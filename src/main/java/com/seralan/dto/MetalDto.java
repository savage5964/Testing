package com.seralan.dto;

import java.io.Serializable;
/**
 *
 * @author t41841
 */
public class MetalDto implements Serializable{
    
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
        return "MetalDto{" + "id=" + id + ", descripcion=" + descripcion + '}';
    }
    
    
    
}
