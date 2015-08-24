package com.seralan.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="USUARIO")
public class Usuario implements Serializable {
    
    @Id
    @Column(name="clave")
    private String clave;
    
    @Column(name="nombre")
    private String nombre;    
    
    @Column(name="primer_apellido")
    private String primerApellido;
    
    @Column(name="segundo_apellido")
    private String segundoApellido;
    
    @Column(name="email")
    private String email;        

    public Usuario() {
    }

    public Usuario(String clave) {
        this.clave = clave;
    }

    public Usuario(String clave, String nombre, String primerApellido, String segundoApellido, String email) {
        this.clave = clave;
        this.nombre = nombre;
        this.primerApellido = primerApellido;
        this.segundoApellido = segundoApellido;
        this.email = email;
    }

    public String getClave() {
        return clave;
    }

    public void setClave(String clave) {
        this.clave = clave;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getPrimerApellido() {
        return primerApellido;
    }

    public void setPrimerApellido(String primerApellido) {
        this.primerApellido = primerApellido;
    }

    public String getSegundoApellido() {
        return segundoApellido;
    }

    public void setSegundoApellido(String segundoApellido) {
        this.segundoApellido = segundoApellido;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Override
    public String toString() {
        return "Usuario{" + "clave=" + clave + ", nombre=" + nombre + ", primerApellido=" + primerApellido + ", segundoApellido=" + segundoApellido + ", email=" + email + '}';
    }
    
}
