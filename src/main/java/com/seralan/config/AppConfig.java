package com.seralan.config;

import java.util.Properties;
import javax.annotation.PostConstruct;
import javax.sql.DataSource;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.context.support.PropertySourcesPlaceholderConfigurer;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.jdbc.datasource.lookup.JndiDataSourceLookup;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;


@Configuration
@PropertySource("classpath:/app.properties")
@ComponentScan(basePackages={"com.seralan.**.service, com.seralan.**.dao, com.seralan.**.utils"})
@EnableTransactionManagement
@EnableJpaRepositories("com.seralan.**.repository") //@EnableAspectJAutoProxy
public class AppConfig {
    
    private final Logger logger = LogManager.getLogger(AppConfig.class);
    
    @Value("${db.jdbc_url}")
    private String jdbcUrl;
    
    @Value("${entitymanager.packages.to.scan}")
    private String packagesToScan;
    
    @Value("${hibernate.show_sql}")
    private String hibernateShowSQL;
    
    @Value("${hibernate.format_sql}")
    private String hibernateFormatSQL;
    
    @Value("${hibernate.use_sql_comments}")
    private String hibernateUseSQLComments;
    
    @Value("${hibernate.default_catalog}")
    private String hibernateCatalog;
    
    @Value("${hibernate.default_schema}")
    private String hibernateSchema;
    
    @Value("${hibernate.dialect}")
    private String hibernateDialect;
    
    @PostConstruct
    public void log(){
        logger.debug("${db.jdbcUrl} = " + jdbcUrl);
        logger.debug("${entitymanager.packages.to.scan} = " + packagesToScan);
        logger.debug("${hibernate.default_catalog} = " + hibernateCatalog);
        logger.debug("${hibernate.default_schema} = " + hibernateSchema);
        logger.debug("${hibernate.dialect} = " + hibernateDialect);
        logger.debug("${hibernate.show_sql} = " + hibernateShowSQL);
        logger.debug("${hibernate.format_sql} = " + hibernateFormatSQL);
        logger.debug("${hibernate.use_sql_comments} = " + hibernateUseSQLComments);
    }
    
    @Bean
    public static PropertySourcesPlaceholderConfigurer propertyConfigIn() {
          return new PropertySourcesPlaceholderConfigurer();
    }
    
    @Bean
    public DataSource dataSource() {
        JndiDataSourceLookup dsLookup = new JndiDataSourceLookup();
        DataSource dataSource = dsLookup.getDataSource(jdbcUrl);
        return dataSource;
    }
    
    @Bean
    public LocalContainerEntityManagerFactoryBean entityManagerFactory() {
        LocalContainerEntityManagerFactoryBean em = new LocalContainerEntityManagerFactoryBean();
        em.setDataSource(dataSource());
        em.setJpaVendorAdapter(new HibernateJpaVendorAdapter());
        em.setPackagesToScan(packagesToScan);         
        em.setJpaProperties(getHibernateProperties());         
        return em;
    }
    
    @Bean
    public PlatformTransactionManager transactionManager() {
        JpaTransactionManager txManager = new JpaTransactionManager();
        txManager.setEntityManagerFactory(entityManagerFactory().getObject());
        return txManager;
    }
    
    @Bean
    public PersistenceExceptionTranslationPostProcessor exceptionTranslation(){
        return new PersistenceExceptionTranslationPostProcessor();
    }
    
    private Properties getHibernateProperties() {
        Properties prop = new Properties();
        prop.put("hibernate.show_sql", hibernateShowSQL);
        prop.put("hibernate.format_sql", hibernateFormatSQL);        
        prop.put("hibernate.dialect", hibernateDialect);                
        
        if(hibernateCatalog != null && !hibernateCatalog.isEmpty()){
            prop.put("hibernate.default_catalog", hibernateCatalog);
        }
        
        if (hibernateSchema != null && !hibernateSchema.isEmpty()) {
            prop.put("hibernate.default_schema", hibernateSchema);
        }
        
        prop.put("hibernate.use_sql_comments", hibernateUseSQLComments);
        prop.put("hibernate.current_session_context_class", "org.springframework.orm.hibernate4.SpringSessionContext");          
        return prop;
    }
 
}
