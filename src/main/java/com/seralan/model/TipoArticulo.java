package com.seralan.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="TIPO_ARTICULO")
public class TipoArticulo implements Serializable {

    @Id
    @Column(name="id_tipo_articulo")    
    private Integer id;
    
    @Column(name="descripcion")
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
        return "TipoArticulo{" + "id=" + id + ", descripcion=" + descripcion + '}';
    }    
    
}
