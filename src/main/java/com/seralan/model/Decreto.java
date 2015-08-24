package com.seralan.model;

import java.io.Serializable;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "DECRETO")
@NamedQueries({
    @NamedQuery(name = "Decreto.findDecretoMaxId", query = "select max(d.idDecreto) from Decreto d"),
    @NamedQuery(name = "Decreto.findIdAndName", query = "select d.idDecreto, d.descripcion from Decreto d")
})
public class Decreto implements Serializable {

    @Id
    @Column(name = "id_decreto")
    private Integer idDecreto;

    @Column(name = "descripcion")
    private String descripcion;

    @Lob
    @Column(name = "archivo")
    private byte[] archivo;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fecha_publicacion")
    private Date fechaPublicacion;

    public Decreto() {

    }

    public Decreto(Integer idDecreto) {
        this.idDecreto = idDecreto;
    }

    public Decreto(Integer idDecreto, String descripcion) {
        this.idDecreto = idDecreto;
        this.descripcion = descripcion;
    }

    public Integer getIdDecreto() {
        return idDecreto;
    }

    public void setIdDecreto(Integer idDecreto) {
        this.idDecreto = idDecreto;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public byte[] getArchivo() {
        return archivo;
    }

    public void setArchivo(byte[] archivo) {
        this.archivo = archivo;
    }

    public Date getFechaPublicacion() {
        return fechaPublicacion;
    }

    public void setFechaPublicacion(Date fechaPublicacion) {
        this.fechaPublicacion = fechaPublicacion;
    }

    @Override
    public String toString() {
        return "Decreto{" + "idDecreto=" + idDecreto + ", descripcion=" + descripcion + ", fechaPublicacion=" + fechaPublicacion + '}';
    }

}
