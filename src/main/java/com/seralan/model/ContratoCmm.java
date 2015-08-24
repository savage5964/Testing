package com.seralan.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="CONTRATO_CMM")
public class ContratoCmm implements Serializable {
    
    @Id
    @Column(name="id_contrato_cmm")    
    private Integer id;
    
    @Column(name="tipo")
    private String tipo;
    
    @Column(name="descripcion")
    private String descripcion;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return "ContratoCmm{" + "id=" + id + ", tipo=" + tipo + ", descripcion=" + descripcion + '}';
    }    
        
}
