package com.seralan.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="FAMILIA")
public class Familia implements Serializable {

    @Id
    @Column(name="id_familia")    
    private Integer idFamilia;
    
    @Column(name="descripcion")
    private String descripcion;

    public Integer getId() {
        return idFamilia;
    }

    public void setId(Integer idFamilia) {
        this.idFamilia = idFamilia;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return "Familia{" + "id=" + idFamilia + ", descripcion=" + descripcion + '}';
    }    
        
}
