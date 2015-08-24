package com.seralan.dto;

/**
 *
 * @author t41841
 */
class ContratoCmmDto implements java.io.Serializable{
    
    private Integer id;
    private String tipo;
    private String descripcion;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    @Override
    public String toString() {
        return "ContratoCmmDto{" + "id=" + id + ", tipo=" + tipo + ", descripcion=" + descripcion + '}';
    }
    
    
    
}
