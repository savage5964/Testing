package com.seralan.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

@Entity
@Table(name="ARTICULO_RELACIONADO")
@IdClass(ArticuloRelacionadoId.class)
public class ArticuloRelacionado implements Serializable {    
    
    @Id
    @Column(name="id_articulo_relacionado")    
    private Integer idArticuloRelacionado;
    
    @Id
    @Column(name="id_articulo")
    private Integer idArticulo;

    public Integer getIdArticuloRelacionado() {
        return idArticuloRelacionado;
    }

    public void setIdArticuloRelacionado(Integer idArticuloRelacionado) {
        this.idArticuloRelacionado = idArticuloRelacionado;
    }

    public Integer getIdArticulo() {
        return idArticulo;
    }

    public void setIdArticulo(Integer idArticulo) {
        this.idArticulo = idArticulo;
    }

    @Override
    public String toString() {
        return "ArticuloRelacionado{" + "idArticuloRelacionado=" + idArticuloRelacionado + ", idArticulo=" + idArticulo + '}';
    }    
    
}
