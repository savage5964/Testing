package com.seralan.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "LOG_IMAGEN_ARTICULO")
@IdClass(LogImagenArticuloId.class)
public class LogImagenArticulo implements Serializable {
    
    @Id
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="fecha_hora")
    private Date fechaHora;
    
    @Id
    @Column(name="id_articulo")    
    private Integer idArticulo;
    
    @Lob
    @Column(name="imagen_anverso")    
    private byte [] imagenAnverso;
    
    @Lob
    @Column(name="imagen_reverso")
    private byte [] imagenReverso;

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

    public byte[] getImagenAnverso() {
        return imagenAnverso;
    }

    public void setImagenAnverso(byte[] imagenAnverso) {
        this.imagenAnverso = imagenAnverso;
    }

    public byte[] getImagenReverso() {
        return imagenReverso;
    }

    public void setImagenReverso(byte[] imagenReverso) {
        this.imagenReverso = imagenReverso;
    }

    @Override
    public String toString() {
        return "LogImagenArticulo{" + "fechaHora=" + fechaHora + ", idArticulo=" + idArticulo + '}';
    }    
    
}
