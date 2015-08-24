/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seralan.dto;

import java.io.Serializable;
import java.util.Date;


/**
 *
 * @author t41841
 */
public class LogArticuloDto implements Serializable{
    // TODO agregar los datos para el dto
//    private Date fechaHora;
    private String fechaHora;
    private Integer idArticulo;
    private String idArticuloErp;
    private Integer decreto;
    private Integer acabado;
    private Integer familia;
    private Integer metal;
    private Integer tipoArticulo;
    private Integer estado;
    private Integer contratoCmm;
    private Integer idCapsula;
    private String claveCmm;
    private String descripcionLarga;
    private String descripcionCorta;
    private String descripcionIngles;
    private Short cunio;
    private Double ley;
    private Double espesor;
    private Double diametro;
    private Double valorNominal;
    private Double tolLeyOro;
    private Double tolLeyPlata;
    private Double tolPesoOro;
    private Double tolPesoPlata;
    private Double tolConjuntoPesoOro;
    private Double tolConjuntoPesoPlata;
    private Double premioDolar;
    private Double premioPorcentaje;
    private Short claveInforme;
    private Integer iva;
//    private Boolean iva;
    private Double costoProduccionUsd;
    private Double costoVariable;
    private Double costoFijoHerramental;
    private Double contenidoOnzasOro;
    private Double contenidoOnzasPlata;
    private Double contenidoPorcentajeCobre;
    private Double contenidoOnzasCobre;
    private Double mermaOro;
    private Double mermaPlata;
    private String infoExtra;
    private String claveUsuRegistra;
    private String claveUsuAutoriza;
    private Date fechaEnvioAutorizar;
    private Date fechaAutorizado;
//    private LogImagenArticuloDto logImagenArticulo;
//    private Boolean activo;
    private Integer activo;
    //
//    private Integer tipoComercializacion;

    public String getFechaHora() {
        return fechaHora;
    }

    public void setFechaHora(String fechaHora) {
        this.fechaHora = fechaHora;
    }

    public Integer getIdArticulo() {
        return idArticulo;
    }

    public void setIdArticulo(Integer idArticulo) {
        this.idArticulo = idArticulo;
    }

    public String getIdArticuloErp() {
        return idArticuloErp;
    }

    public void setIdArticuloErp(String idArticuloErp) {
        this.idArticuloErp = idArticuloErp;
    }

    public Integer getDecreto() {
        return decreto;
    }

    public void setDecreto(Integer decreto) {
        this.decreto = decreto;
    }

    public Integer getAcabado() {
        return acabado;
    }

    public void setAcabado(Integer acabado) {
        this.acabado = acabado;
    }

    public Integer getFamilia() {
        return familia;
    }

    public void setFamilia(Integer familia) {
        this.familia = familia;
    }

    public Integer getMetal() {
        return metal;
    }

    public void setMetal(Integer metal) {
        this.metal = metal;
    }

    public Integer getTipoArticulo() {
        return tipoArticulo;
    }

    public void setTipoArticulo(Integer tipoArticulo) {
        this.tipoArticulo = tipoArticulo;
    }

    public Integer getEstado() {
        return estado;
    }

    public void setEstado(Integer estado) {
        this.estado = estado;
    }

    public Integer getContratoCmm() {
        return contratoCmm;
    }

    public void setContratoCmm(Integer contratoCmm) {
        this.contratoCmm = contratoCmm;
    }

    public Integer getIdCapsula() {
        return idCapsula;
    }

    public void setIdCapsula(Integer idCapsula) {
        this.idCapsula = idCapsula;
    }

    public String getClaveCmm() {
        return claveCmm;
    }

    public void setClaveCmm(String claveCmm) {
        this.claveCmm = claveCmm;
    }

    public String getDescripcionLarga() {
        return descripcionLarga;
    }

    public void setDescripcionLarga(String descripcionLarga) {
        this.descripcionLarga = descripcionLarga;
    }

    public String getDescripcionCorta() {
        return descripcionCorta;
    }

    public void setDescripcionCorta(String descripcionCorta) {
        this.descripcionCorta = descripcionCorta;
    }

    public String getDescripcionIngles() {
        return descripcionIngles;
    }

    public void setDescripcionIngles(String descripcionIngles) {
        this.descripcionIngles = descripcionIngles;
    }

    public Short getCunio() {
        return cunio;
    }

    public void setCunio(Short cunio) {
        this.cunio = cunio;
    }

    public Double getLey() {
        return ley;
    }

    public void setLey(Double ley) {
        this.ley = ley;
    }

    public Double getEspesor() {
        return espesor;
    }

    public void setEspesor(Double espesor) {
        this.espesor = espesor;
    }

    public Double getDiametro() {
        return diametro;
    }

    public void setDiametro(Double diametro) {
        this.diametro = diametro;
    }

    public Double getValorNominal() {
        return valorNominal;
    }

    public void setValorNominal(Double valorNominal) {
        this.valorNominal = valorNominal;
    }

    public Double getTolLeyOro() {
        return tolLeyOro;
    }

    public void setTolLeyOro(Double tolLeyOro) {
        this.tolLeyOro = tolLeyOro;
    }

    public Double getTolLeyPlata() {
        return tolLeyPlata;
    }

    public void setTolLeyPlata(Double tolLeyPlata) {
        this.tolLeyPlata = tolLeyPlata;
    }

    public Double getTolPesoOro() {
        return tolPesoOro;
    }

    public void setTolPesoOro(Double tolPesoOro) {
        this.tolPesoOro = tolPesoOro;
    }

    public Double getTolPesoPlata() {
        return tolPesoPlata;
    }

    public void setTolPesoPlata(Double tolPesoPlata) {
        this.tolPesoPlata = tolPesoPlata;
    }

    public Double getTolConjuntoPesoOro() {
        return tolConjuntoPesoOro;
    }

    public void setTolConjuntoPesoOro(Double tolConjuntoPesoOro) {
        this.tolConjuntoPesoOro = tolConjuntoPesoOro;
    }

    public Double getTolConjuntoPesoPlata() {
        return tolConjuntoPesoPlata;
    }

    public void setTolConjuntoPesoPlata(Double tolConjuntoPesoPlata) {
        this.tolConjuntoPesoPlata = tolConjuntoPesoPlata;
    }

    public Double getPremioDolar() {
        return premioDolar;
    }

    public void setPremioDolar(Double premioDolar) {
        this.premioDolar = premioDolar;
    }

    public Double getPremioPorcentaje() {
        return premioPorcentaje;
    }

    public void setPremioPorcentaje(Double premioPorcentaje) {
        this.premioPorcentaje = premioPorcentaje;
    }

    public Short getClaveInforme() {
        return claveInforme;
    }

    public void setClaveInforme(Short claveInforme) {
        this.claveInforme = claveInforme;
    }

    public Integer getIva() {
        return iva;
    }

    public void setIva(Integer iva) {
        this.iva = iva;
    }

    public Double getCostoProduccionUsd() {
        return costoProduccionUsd;
    }

    public void setCostoProduccionUsd(Double costoProduccionUsd) {
        this.costoProduccionUsd = costoProduccionUsd;
    }

    public Double getCostoVariable() {
        return costoVariable;
    }

    public void setCostoVariable(Double costoVariable) {
        this.costoVariable = costoVariable;
    }

    public Double getCostoFijoHerramental() {
        return costoFijoHerramental;
    }

    public void setCostoFijoHerramental(Double costoFijoHerramental) {
        this.costoFijoHerramental = costoFijoHerramental;
    }

    public Double getContenidoOnzasOro() {
        return contenidoOnzasOro;
    }

    public void setContenidoOnzasOro(Double contenidoOnzasOro) {
        this.contenidoOnzasOro = contenidoOnzasOro;
    }

    public Double getContenidoOnzasPlata() {
        return contenidoOnzasPlata;
    }

    public void setContenidoOnzasPlata(Double contenidoOnzasPlata) {
        this.contenidoOnzasPlata = contenidoOnzasPlata;
    }

    public Double getContenidoPorcentajeCobre() {
        return contenidoPorcentajeCobre;
    }

    public void setContenidoPorcentajeCobre(Double contenidoPorcentajeCobre) {
        this.contenidoPorcentajeCobre = contenidoPorcentajeCobre;
    }

    public Double getContenidoOnzasCobre() {
        return contenidoOnzasCobre;
    }

    public void setContenidoOnzasCobre(Double contenidoOnzasCobre) {
        this.contenidoOnzasCobre = contenidoOnzasCobre;
    }

    public Double getMermaOro() {
        return mermaOro;
    }

    public void setMermaOro(Double mermaOro) {
        this.mermaOro = mermaOro;
    }

    public Double getMermaPlata() {
        return mermaPlata;
    }

    public void setMermaPlata(Double mermaPlata) {
        this.mermaPlata = mermaPlata;
    }

    public String getInfoExtra() {
        return infoExtra;
    }

    public void setInfoExtra(String infoExtra) {
        this.infoExtra = infoExtra;
    }

    public String getClaveUsuRegistra() {
        return claveUsuRegistra;
    }

    public void setClaveUsuRegistra(String claveUsuRegistra) {
        this.claveUsuRegistra = claveUsuRegistra;
    }

    public String getClaveUsuAutoriza() {
        return claveUsuAutoriza;
    }

    public void setClaveUsuAutoriza(String claveUsuAutoriza) {
        this.claveUsuAutoriza = claveUsuAutoriza;
    }

    public Date getFechaEnvioAutorizar() {
        return fechaEnvioAutorizar;
    }

    public void setFechaEnvioAutorizar(Date fechaEnvioAutorizar) {
        this.fechaEnvioAutorizar = fechaEnvioAutorizar;
    }

    public Date getFechaAutorizado() {
        return fechaAutorizado;
    }

    public void setFechaAutorizado(Date fechaAutorizado) {
        this.fechaAutorizado = fechaAutorizado;
    }

    public Integer getActivo() {
        return activo;
    }

    public void setActivo(Integer activo) {
        this.activo = activo;
    }

    @Override
    public String toString() {
        return "LogArticuloDto{" + "fechaHora=" + fechaHora + ", idArticulo=" + idArticulo + ", idArticuloErp=" + idArticuloErp + ", decreto=" + decreto + ", acabado=" + acabado + ", familia=" + familia + ", metal=" + metal + ", tipoArticulo=" + tipoArticulo + ", estado=" + estado + ", contratoCmm=" + contratoCmm + ", idCapsula=" + idCapsula + ", claveCmm=" + claveCmm + ", descripcionLarga=" + descripcionLarga + ", descripcionCorta=" + descripcionCorta + ", descripcionIngles=" + descripcionIngles + ", cunio=" + cunio + ", ley=" + ley + ", espesor=" + espesor + ", diametro=" + diametro + ", valorNominal=" + valorNominal + ", tolLeyOro=" + tolLeyOro + ", tolLeyPlata=" + tolLeyPlata + ", tolPesoOro=" + tolPesoOro + ", tolPesoPlata=" + tolPesoPlata + ", tolConjuntoPesoOro=" + tolConjuntoPesoOro + ", tolConjuntoPesoPlata=" + tolConjuntoPesoPlata + ", premioDolar=" + premioDolar + ", premioPorcentaje=" + premioPorcentaje + ", claveInforme=" + claveInforme + ", iva=" + iva + ", costoProduccionUsd=" + costoProduccionUsd + ", costoVariable=" + costoVariable + ", costoFijoHerramental=" + costoFijoHerramental + ", contenidoOnzasOro=" + contenidoOnzasOro + ", contenidoOnzasPlata=" + contenidoOnzasPlata + ", contenidoPorcentajeCobre=" + contenidoPorcentajeCobre + ", contenidoOnzasCobre=" + contenidoOnzasCobre + ", mermaOro=" + mermaOro + ", mermaPlata=" + mermaPlata + ", infoExtra=" + infoExtra + ", claveUsuRegistra=" + claveUsuRegistra + ", claveUsuAutoriza=" + claveUsuAutoriza + ", fechaEnvioAutorizar=" + fechaEnvioAutorizar + ", fechaAutorizado=" + fechaAutorizado + ", activo=" + activo + '}';
    }
}
