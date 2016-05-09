package br.gov.stn.aplicacao.endpoint;

import javax.enterprise.context.RequestScoped;
import javax.inject.Inject;
import javax.ws.rs.Path;

import br.gov.stn.dominio.entidade.##ENTIDADE;
import br.gov.stn.dominio.service.##ENTIDADEService;
import br.gov.stn.framework.aplicacao.endpoint.CrudEndpoint;
import br.gov.stn.framework.dominio.service.CrudService;
import br.gov.stn.infraestrutura.repositorio.##ENTIDADEDAO;

@Path("/##ENTIDADE")
@RequestScoped
public class ##ENTIDADEEndpoint extends CrudEndpoint<##ENTIDADEDAO, ##ENTIDADE, Integer> {

	@Inject
	private ##ENTIDADEService service;
	
	@Override
	public CrudService<##ENTIDADEDAO,##ENTIDADE , Integer> getService() {
		return this.service;
	}	

}


