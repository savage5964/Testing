package com.seralan.config;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;
import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.DispatcherServlet;

public class WebAppInitializer implements WebApplicationInitializer{
    
    @Override
    public void onStartup(ServletContext container) throws ServletException {        
        // appContext root
        AnnotationConfigWebApplicationContext rootContext = new AnnotationConfigWebApplicationContext();
        rootContext.register(AppConfig.class);
        
        container.addListener(new ContextLoaderListener(rootContext));
        
        // dispatcher servlet context
        AnnotationConfigWebApplicationContext dispatcherContext = new AnnotationConfigWebApplicationContext();
        dispatcherContext.register(DispatcherConfig.class);
              
        // Register and map the dispatcher servlet
        ServletRegistration.Dynamic dispatcher = container.addServlet("dispatcher", new DispatcherServlet(dispatcherContext));
        dispatcher.setLoadOnStartup(1);
        dispatcher.addMapping("/");     
        
        // filtros
        CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();        
        characterEncodingFilter.setEncoding("utf-8");
        characterEncodingFilter.setForceEncoding(true);
        
        container.addFilter("characterEncodingFilter", characterEncodingFilter)
                .addMappingForUrlPatterns(null, false, "/*");     
        
        AppSiteMeshFilter siteMeshFilter = new AppSiteMeshFilter();
        
        container.addFilter("siteMeshFilter", siteMeshFilter)
                .addMappingForUrlPatterns(null, true, "/*");
        
    }
    
}
