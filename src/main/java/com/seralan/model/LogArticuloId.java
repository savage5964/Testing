package com.seralan.model;

import java.io.Serializable;
import java.util.Date;

/**
 *
 * @author t41841
 */
public class LogArticuloId implements Serializable{
    
    private Date fechaHora;
    private Integer idArticulo;

    

    public LogArticuloId() {
        
    }
    
    public LogArticuloId(Integer idArticulo) {
        this.idArticulo = idArticulo;
    }
    
    public LogArticuloId(Date fechaHora, Integer idArticulo) {
        this.fechaHora = fechaHora;
        this.idArticulo = idArticulo;
    }

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
        int hash = 5;
        hash = 37 * hash + (this.fechaHora != null ? this.fechaHora.hashCode() : 0);
        hash = 37 * hash + (this.idArticulo != null ? this.idArticulo.hashCode() : 0);
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
        final LogArticuloId other = (LogArticuloId) obj;
        if (this.fechaHora != other.fechaHora && (this.fechaHora == null || !this.fechaHora.equals(other.fechaHora))) {
            return false;
        }
        if (this.idArticulo != other.idArticulo && (this.idArticulo == null || !this.idArticulo.equals(other.idArticulo))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "LogArticuloId{" + "fechaHora=" + fechaHora + ", idArticulo=" + idArticulo + '}';
    }
        
    
            
}
