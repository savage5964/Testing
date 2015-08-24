package com.seralan.model;

import java.io.Serializable;

public class ArticuloRelacionadoId implements Serializable{
    
    private Integer idArticuloRelacionado;    
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
    public int hashCode() {
        int hash = 3;
        hash = 41 * hash + (this.idArticuloRelacionado != null ? this.idArticuloRelacionado.hashCode() : 0);
        hash = 41 * hash + (this.idArticulo != null ? this.idArticulo.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final ArticuloRelacionadoId other = (ArticuloRelacionadoId) obj;
        if (this.idArticuloRelacionado != other.idArticuloRelacionado && (this.idArticuloRelacionado == null || !this.idArticuloRelacionado.equals(other.idArticuloRelacionado))) {
            return false;
        }
        return !(this.idArticulo != other.idArticulo && (this.idArticulo == null || !this.idArticulo.equals(other.idArticulo)));
    }    
    
}
