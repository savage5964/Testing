package com.seralan.utils;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Repository;

/**
 *
 * @author g13380
 */
@Repository
public class StoredProcedureSeralanImpl implements StoredProcedureSeralan{

    private final String EX_NO_PARAMS_DEFINED = "No se recibieron parámetros de entrada para el procedimiento almacenado";
    private final String EX_NO_ROWMAPPER_DEFINED = "No se proporcionó un mapper de salida para el procedimiento almacenado";
    private final String EX_NO_PROCEDURE_NAME = "No se proporcionó el nombre del procedimiento almacenado";
    private final String EX_SP_INTERNAL_ERROR = "Error interno en el procedimiento almacenado";
    
    private final String KEY_RETURN_VALUE = "RETURN_VALUE";
    private final String KEY_RESULTSET = "resultSet";
    
    private SimpleJdbcCall jdbcCall;

    public StoredProcedureSeralanImpl() {
    }        
    
    @Autowired(required=false)
    public StoredProcedureSeralanImpl(DataSource dataSource) {
        jdbcCall = new SimpleJdbcCall(dataSource);
    }        
    
    @Override
    public <T> List<T> execSpResultSet(String spName, Class<T> clazz) throws StoredProcedureSeralanException{
        if (clazz == null) {
            throw new StoredProcedureSeralanException(EX_NO_ROWMAPPER_DEFINED);
        }        
        if (spName == null || spName.isEmpty()) {
            throw new StoredProcedureSeralanException(EX_NO_PROCEDURE_NAME);
        }        
        try {
            Map<String, Object> spResult = jdbcCall.withProcedureName(spName)
                    .withReturnValue()
                    .returningResultSet(KEY_RESULTSET, BeanPropertyRowMapper.newInstance(clazz))
                    .execute();
            
            Integer returnValue = (Integer) spResult.get(KEY_RETURN_VALUE);            
            
            if (!returnValue.equals(0)) {
                throw new StoredProcedureSeralanException(EX_SP_INTERNAL_ERROR);
            }
            
            if (spResult.containsKey(KEY_RESULTSET)) {
                return (List<T>) spResult.get(KEY_RESULTSET);
            }
            
            return null;
        } catch (DataAccessException dex) {
            throw new StoredProcedureSeralanException(dex.getMessage());
        }
    }
    
    @Override
    public <T> List<T> execSpResultSet(String spName, LinkedHashMap<String, Object> inParams, 
                                                Class<T> clazz) throws StoredProcedureSeralanException{
        if (inParams == null || inParams.isEmpty()) {
            throw new StoredProcedureSeralanException(EX_NO_PARAMS_DEFINED);
        }
        if (spName == null || spName.isEmpty()) {
            throw new StoredProcedureSeralanException(EX_NO_PROCEDURE_NAME);
        }
        if (clazz == null) {
            throw new StoredProcedureSeralanException(EX_NO_ROWMAPPER_DEFINED);
        }
        
        MapSqlParameterSource mapSqlParams = new MapSqlParameterSource(inParams);
        
        Map<String, Object> spResult = jdbcCall.withProcedureName(spName)
                        .withReturnValue()                        
                        .returningResultSet(KEY_RESULTSET, BeanPropertyRowMapper.newInstance(clazz))
                        .execute(mapSqlParams);
        
        Integer returnValue = (Integer) spResult.get(KEY_RETURN_VALUE);            
            
        if (!returnValue.equals(0)) {
            throw new StoredProcedureSeralanException(EX_SP_INTERNAL_ERROR);
        }

        if (spResult.containsKey(KEY_RESULTSET)) {
            return (List<T>) spResult.get(KEY_RESULTSET);
        }

        return new ArrayList<T>();
    }
    
    @Override
    public Map<String, Object> execSpOutputParams(String spName) throws StoredProcedureSeralanException {   
        if (spName == null || spName.isEmpty()) {
            throw new StoredProcedureSeralanException(EX_NO_PROCEDURE_NAME);
        }        
        try {
            Map<String, Object> spResult = jdbcCall.withProcedureName(spName)
                    .withReturnValue()
                    .execute();
            
            Integer returnValue = (Integer) spResult.get(KEY_RETURN_VALUE);            
            if (!returnValue.equals(0)) {
                throw new StoredProcedureSeralanException(EX_SP_INTERNAL_ERROR);
            }                                    
            // remover parametros innecesarios
            Set<String> keySet = spResult.keySet();
            for (String key : new HashSet<String>(keySet)) {
                if (key.startsWith("#") || key.equals(KEY_RETURN_VALUE)) {
                    spResult.remove(key);
                }
            }            
            return spResult;            
        } catch (DataAccessException dex) {
            throw new StoredProcedureSeralanException(dex.getMessage());
        }        
    }
    
    @Override
    public Map<String, Object> execSpOutputParams(String spName, LinkedHashMap<String, Object> inParams) throws StoredProcedureSeralanException{        
        if (inParams == null || inParams.isEmpty()) {
            throw new StoredProcedureSeralanException(EX_NO_PARAMS_DEFINED);
        }
        if (spName == null || spName.isEmpty()) {
            throw new StoredProcedureSeralanException(EX_NO_PROCEDURE_NAME);
        }
        MapSqlParameterSource mapSqlParams = new MapSqlParameterSource(inParams);
        Map<String, Object> spResult = jdbcCall.withProcedureName(spName)
                        .withReturnValue()
                        .execute(mapSqlParams);
        // remover parametros innecesarios
        Set<String> keySet = spResult.keySet();
        for (String key : new HashSet<String>(keySet)) {
            if (key.startsWith("#") || key.equals(KEY_RETURN_VALUE)) {
                spResult.remove(key);
            }
        }
        return spResult;
    }
    
}
