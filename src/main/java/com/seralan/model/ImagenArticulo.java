package com.seralan.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name="IMAGEN_ARTICULO")
public class ImagenArticulo implements Serializable {
    
    @Id
    @Column(name="id_articulo")    
    private Integer idArticulo;
    
    @Lob
    @Column(name="imagen_anverso")    
    private byte [] imagenAnverso;
    
    @Lob
    @Column(name="imagen_reverso")
    private byte [] imagenReverso;

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
        return "ImagenArticulo{" + "idArticulo=" + idArticulo + '}';
    }
    
}
