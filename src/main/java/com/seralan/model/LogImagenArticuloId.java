package com.seralan.model;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * @author G13380
 */
public class LogImagenArticuloId implements Serializable{
    
    private Date fechaHora;    
    private Integer idArticulo;

    public Date getFechaHora() {
        return fechaHora;
    }

    public void setFechaHora(Date fechaHora) {
        this.fechaHora = fechaHora;
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
        hash = 59 * hash + (this.fechaHora != null ? this.fechaHora.hashCode() : 0);
        hash = 59 * hash + (this.idArticulo != null ? this.idArticulo.hashCode() : 0);
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
        final LogImagenArticuloId other = (LogImagenArticuloId) obj;
        if (this.fechaHora != other.fechaHora && (this.fechaHora == null || !this.fechaHora.equals(other.fechaHora))) {
            return false;
        }
        return !(this.idArticulo != other.idArticulo && (this.idArticulo == null || !this.idArticulo.equals(other.idArticulo)));
    }
    
}
