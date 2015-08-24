package com.seralan.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.IdClass;
import javax.persistence.JoinColumns;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;

@Entity
@Table(name = "LOG_ARTICULO")
@IdClass(LogArticuloId.class)
@NamedQueries({
    @NamedQuery(name = "LogArticulo.findMaxId", query = "select max(la.idArticulo) from LogArticulo la")
})
public class LogArticulo implements Serializable {

    @Id
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fecha_hora")
    private Date fechaHora;

    @Id
    @Column(name = "id_articulo")
    private Integer idArticulo;

    @Column(name = "id_articulo_erp")
    private String idArticuloErp;

    @ManyToOne
    @JoinColumn(name = "id_decreto", referencedColumnName = "id_decreto")
    private Decreto decreto;

    @ManyToOne
    @JoinColumn(name = "id_acabado", referencedColumnName = "id_acabado")
    private Acabado acabado;

    @ManyToOne
    @JoinColumn(name = "id_familia", referencedColumnName = "id_familia")
    private Familia familia;

    @ManyToOne
    @JoinColumn(name = "id_metal", referencedColumnName = "id_metal")
    private Metal metal;

    @ManyToOne
    @JoinColumn(name = "id_tipo_articulo", referencedColumnName = "id_tipo_articulo")
    private TipoArticulo tipoArticulo;

    @ManyToOne
    @JoinColumn(name = "id_estado", referencedColumnName = "id_estado")
    private Estado estado;

    @ManyToOne
    @JoinColumn(name = "id_contrato_cmm", referencedColumnName = "id_contrato_cmm")
    private ContratoCmm contratoCmm;

    @Column(name = "id_capsula")
    private Integer idCapsula;

    @Column(name = "clave_cmm")
    private String claveCmm;

    @Column(name = "descripcion_larga")
    private String descripcionLarga;

    @Column(name = "descripcion_corta")
    private String descripcionCorta;

    @Column(name = "descripcion_ingles")
    private String descripcionIngles;

    @Column(name = "cunio")
    private Short cunio;

    @Column(name = "ley")
//    private BigDecimal ley;
    private Double ley;

    @Column(name = "espesor")
//    private BigDecimal espesor;
    private Double espesor;

    @Column(name = "diametro")
    private Double diametro;

    @Column(name = "valor_nominal")
    private Double valorNominal;

    @Column(name = "tol_ley_oro")
    private Double tolLeyOro;

    @Column(name = "tol_ley_plata")
    private Double tolLeyPlata;

    @Column(name = "tol_peso_oro")
    private Double tolPesoOro;

    @Column(name = "tol_peso_plata")
    private Double tolPesoPlata;

    @Column(name = "tol_conjunto_peso_oro")
    private Double tolConjuntoPesoOro;

    @Column(name = "tol_conjunto_peso_plata")
    private Double tolConjuntoPesoPlata;

    @Column(name = "premio_dolar")
    private Double premioDolar;

    @Column(name = "premio_porcentaje")
    private Double premioPorcentaje;

    @Column(name = "clave_informe")
    private Short claveInforme;

    @Column(name = "iva")
    private boolean iva;

    @Column(name = "activo")
    private boolean activo;

    @Column(name = "costo_produccion_usd")
    private Double costoProduccionUsd;

    @Column(name = "costo_variable")
    private Double costoVariable;

    @Column(name = "costo_fijo_herramental")
    private Double costoFijoHerramental;

    @Column(name = "contenido_onzas_oro")
    private Double contenidoOnzasOro;

    @Column(name = "contenido_onzas_plata")
    private Double contenidoOnzasPlata;

    @Column(name = "contenido_porcentaje_cobre")
    private Double contenidoPorcentajeCobre;

    @Column(name = "contenido_onzas_cobre")
    private Double contenidoOnzasCobre;

    @Column(name = "merma_oro")
    private Double mermaOro;

    @Column(name = "merma_plata")
    private Double mermaPlata;

    @Column(name = "info_extra")
    private String infoExtra;

    @ManyToOne
    @JoinColumn(name = "clave_usu_registra", referencedColumnName = "clave")
    private Usuario claveUsuRegistra;

    @ManyToOne
    @JoinColumn(name = "clave_usu_autoriza", referencedColumnName = "clave")
    private Usuario claveUsuAutoriza;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fecha_envio_autorizar")
    private Date fechaEnvioAutorizar;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "fecha_autorizado")
    private Date fechaAutorizado;

//    @OneToOne
//    @JoinColumns({
//        @JoinColumn(name = "fecha_hora", referencedColumnName = "fecha_hora"),
//        @JoinColumn(name = "id_articulo", referencedColumnName = "id_articulo")})
//    private LogImagenArticulo logImagenArticulo;

    public LogArticulo() {

    }

    public boolean isActivo() {
        return activo;
    }

    public void setActivo(boolean activo) {
        this.activo = activo;
    }

    public Date getFechaHora() {
        return fechaHora;
    }

    public void setFechaHora(Date fechaHora) {
        this.fechaHora = fechaHora;
    }

    public int getIdArticulo() {
        return idArticulo;
    }

    public void setIdArticulo(int idArticulo) {
        this.idArticulo = idArticulo;
    }

    public String getIdArticuloErp() {
        return idArticuloErp;
    }

    public void setIdArticuloErp(String idArticuloErp) {
        this.idArticuloErp = idArticuloErp;
    }

    public Decreto getDecreto() {
        return decreto;
    }

    public void setDecreto(Decreto decreto) {
        this.decreto = decreto;
    }

    public Acabado getAcabado() {
        return acabado;
    }

    public void setAcabado(Acabado acabado) {
        this.acabado = acabado;
    }

    public Familia getFamilia() {
        return familia;
    }

    public void setFamilia(Familia familia) {
        this.familia = familia;
    }

    public Metal getMetal() {
        return metal;
    }

    public void setMetal(Metal metal) {
        this.metal = metal;
    }

    public TipoArticulo getTipoArticulo() {
        return tipoArticulo;
    }

    public void setTipoArticulo(TipoArticulo tipoArticulo) {
        this.tipoArticulo = tipoArticulo;
    }

    public Estado getEstado() {
        return estado;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    public ContratoCmm getContratoCmm() {
        return contratoCmm;
    }

    public void setContratoCmm(ContratoCmm contratoCmm) {
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

    public boolean isIva() {
        return iva;
    }

    public void setIva(boolean iva) {
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

    public Usuario getClaveUsuRegistra() {
        return claveUsuRegistra;
    }

    public void setClaveUsuRegistra(Usuario claveUsuRegistra) {
        this.claveUsuRegistra = claveUsuRegistra;
    }

    public Usuario getClaveUsuAutoriza() {
        return claveUsuAutoriza;
    }

    public void setClaveUsuAutoriza(Usuario claveUsuAutoriza) {
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

//    public LogImagenArticulo getLogImagenArticulo() {
//        return logImagenArticulo;
//    }
//
//    public void setLogImagenArticulo(LogImagenArticulo logImagenArticulo) {
//        this.logImagenArticulo = logImagenArticulo;
//    }

}
