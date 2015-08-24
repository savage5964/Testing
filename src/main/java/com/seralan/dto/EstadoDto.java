package com.seralan.dto;

import java.io.Serializable;

/**
 *
 * @author G13380
 */
public class EstadoDto implements Serializable {
    
    private Integer id;
    private String descripcion;        

    public EstadoDto() {
    }

    public EstadoDto(Integer id, String descripcion) {
        this.id = id;
        this.descripcion = descripcion;
    }

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
        return "EstadoDto{" + "id=" + id + ", descripcion=" + descripcion + '}';
    }
}
