package com.seralan.controller;

import com.google.common.net.MediaType;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletResponse;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import com.seralan.dto.ArticuloDto;
import com.seralan.dto.ArticuloGridDto;
import com.seralan.dto.LogArticuloDto;
import com.seralan.model.Acabado;
import com.seralan.model.Articulo;
import com.seralan.model.Familia;
import com.seralan.model.LogArticulo;
import org.springframework.ui.ModelMap;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import com.seralan.service.ArticuloService;
import com.seralan.service.CatalogoService;
import com.seralan.service.LogArticuloService;
import com.seralan.utils.CommonException;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartHttpServletRequest;

/**
 *
 * @author t41841
 */
@Controller
@RequestMapping("/articulo")
public class ArticuloController {

    private final Logger log = LogManager.getLogger(ArticuloController.class);

    private @Resource
    CatalogoService catalogoService;
    private @Resource
    ArticuloService articuloService;
    private @Resource
    LogArticuloService logArticuloService;
    SimpleDateFormat formatter = new SimpleDateFormat("dd/MM/yyyy HH:mm:ss.SS");

    @RequestMapping
    public String populateLists(ModelMap model) {

        Date date = new Date();
        String fecha = formatter.format(date);
        model.addAttribute("idArticulo", logArticuloService.getLogArtiucloMaxId());
        model.addAttribute("fechaRegistro", fecha);
        model.addAttribute("listaAcabado", catalogoService.listAllAcabado());
//        model.addAttribute("listaDecreto", catalogoService.listAllDecretoById());
//        log.info(catalogoService.listAllDecretoById());
        model.addAttribute("listaTipoArticulo", catalogoService.listAllTipoArticulo());
        // llenar registros para el tipo de comercialización
        model.addAttribute("listaTipoComercializacion", catalogoService.listAllTipoComercializacion());
        model.addAttribute("listaFamilia", catalogoService.listAllFamilia());
        model.addAttribute("listaMetal", catalogoService.listAllMetal());
        model.addAttribute("listaContratoCmm", catalogoService.listAllContratoCmm());
        // hacer una lista para la infoExtra
        // trae el id de los artículos
//        model.addAttribute("listaArticulo", articuloService.listAllArticulo());
        /*
        List<Acabado> listFamilia = catalogoService.listAllAcabado();
        try {
            for (Acabado familia : listFamilia) {
                System.out.println("Acabado " + familia.getDescripcion() + ", " + familia.getId());
            }
        } catch (Exception e) {
            log.info(e.getStackTrace());
        }
        */
        return "/catalogo/articulo";
    }

    // ya está
    @RequestMapping(value = "/ajax/save", method = RequestMethod.POST)
    public @ResponseBody
    Integer guardarArticulo(@RequestBody LogArticuloDto logArticuloDto)
            throws CommonException {
        log.info("## Guardar Artículo ##");
        log.info("## " + logArticuloDto + " ##");
        return logArticuloService.guardarArticulo(logArticuloDto);
    }

    @RequestMapping(value = "ajax/autorizar", method = RequestMethod.POST)
    public @ResponseBody
    boolean autorizarArticulo(MultipartHttpServletRequest req,
            HttpServletResponse res) throws CommonException, IOException {
        log.info("## Autorizar Artículo ##");

        return false;
    }

    // listado para el primer grid (LogArticulo)
    @RequestMapping(value = "/listadoLogArticulo", method = RequestMethod.GET)
    public @ResponseBody
    List<ArticuloGridDto> listadoLogArticulos() throws CommonException, IOException {
//        muestra el listado de artículos GUARDADOS para el grid artículos autorizados
//        y el grid de articulos modificados y guardados.
        log.info("-- -- -- -- --");
        log.info("Listado de LogArticulo");
        log.info("-- -- -- -- --");
        List<LogArticulo> logArticulos = logArticuloService.listAllArticulo();
        log.info(logArticulos);

        List<ArticuloGridDto> articulosW2ui = new ArrayList<ArticuloGridDto>();

        for (LogArticulo logArt : logArticulos) {
            ArticuloGridDto record = new ArticuloGridDto();
            record.setRecid(logArt.getIdArticulo());
            record.setTipoArticulo(logArt.getTipoArticulo() != null ? logArt.getTipoArticulo().getDescripcion() : "");
            record.setDescripcion(logArt.getDescripcionLarga());
            record.setFamilia(logArt.getFamilia() != null ? logArt.getFamilia().getDescripcion() : "");
            record.setMetal(logArt.getMetal() != null ? logArt.getMetal().getDescripcion() : "");
            record.setAcabado(logArt.getAcabado() != null ? logArt.getAcabado().getDescripcion() : "");
            record.setCunio(logArt.getCunio());            
            articulosW2ui.add(record);
        }
        
        for (ArticuloGridDto recordTest : articulosW2ui) {
            log.info("id: " + recordTest.getRecid());
            log.info("TipoArticulo " + recordTest.getTipoArticulo());
            log.info("Descripcion " + recordTest.getDescripcion());
            log.info("Familia " + recordTest.getFamilia());
            log.info("Metal " + recordTest.getMetal());
            log.info("Acabado " + recordTest.getAcabado());
            log.info("Cuño " + recordTest.getCunio());
        }

        return articulosW2ui;
    }
    
    // Se activa cuando presione el botón de buscar en los filtros de búsqueda
    // traer todos los campos para la búsqueda
    @RequestMapping(value = "/listadoGridArticulo", method = RequestMethod.GET)
    public @ResponseBody
    List<ArticuloGridDto> listadoArticulos() throws CommonException, IOException {
//        muestra el listado de artículos AUTORIZADOS para el grid artículos autorizados
//        y el grid de articulos modificados y guardados.
        log.info("-- -- -- -- --");
        log.info("Listado de LogArticulo");
        log.info("-- -- -- -- --");

        List<Articulo> articulos = articuloService.listAllArticulo();
        log.info(articulos);
//        List<LogArticulo> logArticulos = logArticuloService.listAllArticulo();

//        hacer un dto para Artículos
        List<ArticuloGridDto> articulosW2ui = new ArrayList<ArticuloGridDto>();

        for (Articulo art : articulos) {
            ArticuloGridDto record = new ArticuloGridDto();
            record.setRecid(art.getIdArticulo());
            record.setTipoArticulo(art.getTipoArticulo() != null ? art.getTipoArticulo().getDescripcion() : "");
            record.setDescripcion(art.getDescripcionLarga());
            record.setFamilia(art.getFamilia() != null ? art.getFamilia().getDescripcion() : "");
            record.setMetal(art.getMetal() != null ? art.getMetal().getDescripcion() : "");
            record.setAcabado(art.getAcabado() != null ? art.getAcabado().getDescripcion() : "");
            record.setCunio(art.getCunio());
            
            articulosW2ui.add(record);
        }
        
        for (ArticuloGridDto recordTest : articulosW2ui) {
            log.info("id: " + recordTest.getRecid());
            log.info("TipoArticulo " + recordTest.getTipoArticulo());
            log.info("Descripcion " + recordTest.getDescripcion());
            log.info("Familia " + recordTest.getFamilia());
            log.info("Metal " + recordTest.getMetal());
            log.info("Acabado " + recordTest.getAcabado());
            log.info("Cuño " + recordTest.getCunio());
        }

//        Integer recid;
//        String tipoArticulo;
//        Date descripcion;
//        String familia;
//        String metal;
//        String acabado;
//        Integer cunio;
        return articulosW2ui;
    }

    @RequestMapping(value = "/modificarLogArticulo/{idArticulo}", method = RequestMethod.GET)
    public @ResponseBody LogArticulo modificarArticuloGuardado(@PathVariable Integer idArticulo) {
//        coloca los campos en el jsp inicial para su modificación
//        una vez colocados los valores en los campos, se marcan los que tengan una modificación(ESTO ES EN AUTORIZACIÓN)
//        llamar los id de LOG_ARTICULO
//        return logArticuloService.consultarArticulo(id);
        log.info("En el controlador");
        log.info(idArticulo);
        return logArticuloService.consultarArticulo(idArticulo);
    }
    
    @RequestMapping(value = "/modificarArticulo", method = RequestMethod.GET)
    public @ResponseBody Articulo modificarArticuloAutorizado(@PathVariable Integer id) {
//        coloca los campos en el jsp inicial para su modificación
//        una vez colocados los valores en los campos, se marcan los que tengan una modificación
//        llamar los id de ARTICULO y no los de LOG_ARTICULO

        return articuloService.buscarArticulo(id);
    }

    public void getArticuloId(ModelMap map) {

    }
//    
//    @RequestMapping("/eliminar")
//    public String eliminar(){
//        return "/catalogo/articulo";
//    }
}