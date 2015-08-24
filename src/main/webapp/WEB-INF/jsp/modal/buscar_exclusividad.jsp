
<i class="close icon"></i>
<div class="header">
    Buscar Exclusividad
</div>
<div class="content">
    <div class="ui segments">
        <div class="ui segment">
            <p><div class="ui blue ribbon large label">Filtros</div></p>
        </div>
        <div class="ui blue segment">
            <a class="ui blue right corner label" id="borrar-form-buscar-exclusividad">
                <i class="erase icon"></i>
            </a>
            <form class="ui form" id="form-buscar-exclusividad">
                <div class="ui teal labels">
                    <div class="three fields">
                        <div class="field">
                            <label>Distribuidor/Cliente:</label>
                            <select class="ui fluid dropdown" id="cliente">	
                                <option value="">Seleccionar</option>
                                <option value="1">Cliente</option>
                                <option value="2">Cliente2</option>									
                            </select>                                 
                        </div>
                        <div class="field">
                            <label>Fecha inicio:</label>
                            <div class="ui icon input">
                                <input type="text" placeholder="dd/mm/yyyy" id="fechaInicio"/>
                                <i class="calendar icon"></i>
                            </div>
                        </div>
                        <div class="field">
                            <label>Fecha fin:</label>
                            <div class="ui icon input">
                                <input type="text" placeholder="dd/mm/yyyy" id="fechaFin"/>
                                <i class="calendar icon"></i>
                            </div>
                        </div>
                    </div>
                    <div class="three fields">
                        <div class="field">
                            <label>Pieza:</label>
                            <select class="ui fluid dropdown" id="pieza">	
                                <option value="">Seleccionar</option>
                                <option value="1">Pieza</option>
                                <option value="2">Pieza2</option>									
                            </select>                                  
                        </div>
                        <div class="field">
                            <label>Estado</label>
                            <select class="ui fluid dropdown" id="estado">	
                                <option value="">Seleccionar</option>
                                <option value="1">Activo</option>
                                <option value="2">Inactivo</option>									
                            </select>
                        </div>
                    </div>

                </div>
            </form>
            <div class="ui right aligned basic segment">           
                <button onclick="obtenerExclusividadesGridDto()" class="ui button blue labeled icon"><i class="search icon"></i>Buscar</button>                
            </div>
        </div>
    </div>
    <div class="ui segments">
        <div class="ui segment">
            <p><div class="ui blue ribbon large label">Resultado</div></p>
        </div>
        <div class="ui blue segment">
            <div id="grid-exclusividad" style="height: 250px;"></div>
        </div>
    </div>
</div>
<div class="actions">
    <div class="ui positive right labeled icon button">
        Aceptar
        <i class="checkmark icon"></i>
    </div>
</div>



