package com.seralan.utils;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;


public interface StoredProcedureSeralan {
    
    /**
     * 
     * @param <T>
     * @param spName
     * @param clazz
     * @return
     * @throws StoredProcedureSeralanException 
     */
    <T> List<T> execSpResultSet(String spName, Class<T> clazz) throws StoredProcedureSeralanException;
    
    /**
     * 
     * @param <T>
     * @param spName
     * @param inParams
     * @param clazz
     * @return
     * @throws StoredProcedureSeralanException 
     */
    <T> List<T> execSpResultSet(String spName, LinkedHashMap<String, Object> inParams, Class<T> clazz) throws StoredProcedureSeralanException;
    
    /**
     * 
     * @param spName
     * @return
     * @throws StoredProcedureSeralanException 
     */
    Map<String, Object> execSpOutputParams(String spName) throws StoredProcedureSeralanException;
    
    /**
     * 
     * @param spName
     * @param inParams
     * @return
     * @throws StoredProcedureSeralanException 
     */
    Map<String, Object> execSpOutputParams(String spName, LinkedHashMap<String, Object> inParams) throws StoredProcedureSeralanException;
    
}
