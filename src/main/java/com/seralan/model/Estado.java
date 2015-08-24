package com.seralan.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ESTADO")
public class Estado implements Serializable {
    
    @Id
    @Column(name="id_estado")
    private Integer id;
    
    @Column(name="descripcion")
    private String descripcion;        

    public Estado() {
    }

    public Estado(Integer id) {
        this.id = id;
    }

    public Estado(Integer id, String descripcion) {
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
        return "Estado{" + "id=" + id + ", descripcion=" + descripcion + '}';
    }    
    
}
