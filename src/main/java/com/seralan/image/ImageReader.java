/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.seralan.image;

import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileItemFactory;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;

/**
 *
 * @author D13515
 */
@WebServlet(name = "ImageReader", urlPatterns = {"/ImageReader"})
public class ImageReader extends HttpServlet {

    private byte[] backUpImage;

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        String[] arrayImageMimeTypes = new String[]{
            //bmp
            "image/bmp", "image/x-windows-bmp",
            //jpg o jpeg
            "image/pjpeg", "image/jpeg",
            //png
            "image/png", "image/x-png",
            //tiff
            "image/tiff", "image/x-tiff", "image/tiff",
            //gif
            "image/gif",
            //ico
            "image/x-icon"
        };
        String ulrInvalidImage = "./resources/images/bm.png";
        String fieldName = null;
        String fileName = null;
        String contentType = null;
        String tipoImagen = null;
        boolean isMultipart = false;
        long sizeInBytes = 0;
        OutputStream out = null;
        PrintWriter pw = null;

        //Factory para archivos de almacenamiento en disco local
        FileItemFactory factory = new DiskFileItemFactory();

        //Manejador de carga de archivos
        ServletFileUpload upload = new ServletFileUpload(factory);

        //la petición es multipart?
        isMultipart = ServletFileUpload.isMultipartContent(request);

        if (isMultipart) {
            try {
                //Parsear la petición
                List<FileItem> items = upload.parseRequest(request);

                //Log.info("FileItem size= " + items.size());
                Iterator iter = items.iterator();
                while (iter.hasNext()) {
                    FileItem item = (FileItem) iter.next();
                    if (item.isFormField() && tipoImagen == null) {
                        tipoImagen = item.getString();
                    } else {
                        fieldName = item.getFieldName();
                        fileName = item.getName();
                        contentType = item.getContentType();
                        sizeInBytes = item.getSize();
                        if (tipoImagen.equals(fieldName)) {
                            List<String> listaMimes = (List<String>) Arrays.asList(arrayImageMimeTypes);
                            if (listaMimes != null && !listaMimes.isEmpty()) {
                                for (int i = 0; i < listaMimes.size(); i++) {
                                }
                            }
                            pw = response.getWriter();
                            if (listaMimes.contains(contentType) && sizeInBytes < 200000) {
                                byte[] data = item.get();
                                pw.println("<img src=\"data:image/jpeg;base64," + Base64.encodeBase64String(data) + "\" /><input id='" + tipoImagen + "' type='text' value='" + fileName + "' hidden>");
                                break;
                            } else {
                                pw.println("<img id=\"imagenInvalida\" src=\"" + ulrInvalidImage + "\" width=\"155\" /><input id='" + tipoImagen + "' type='text' value='Archivo inválido' hidden>");
                                break;
                            }
                        }//fin else 
                    }//fin if
                }//fin while
            } catch (FileUploadException ex) {
                //Log.info("Falló el parse del request para recuperar la imagen.");
                ex.printStackTrace();
            } finally {
                if (out != null) {
                    out.flush();
                    out.close();
                }
                if (pw != null) {
                    pw.flush();
                    pw.close();
                }
            }
        }//fin if
    }
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">

    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //processRequest(request, response);
        OutputStream out = response.getOutputStream();
        out.write(backUpImage);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>
}
