package br.gov.stn.dominio.service;

import javax.ejb.Stateless;
import javax.ejb.TransactionManagement;
import javax.ejb.TransactionManagementType;
import javax.inject.Inject;

import br.gov.stn.dominio.entidade.##ENTIDADE;
import br.gov.stn.framework.dominio.service.CrudService;
import br.gov.stn.framework.infraestrutura.repositorio.GenericDAO;
import br.gov.stn.infraestrutura.repositorio.##ENTIDADEDAO;

@Stateless
@TransactionManagement(TransactionManagementType.CONTAINER)
public class ##ENTIDADEService extends CrudService<##ENTIDADEDAO, ##ENTIDADE, Integer> {

	@Inject
	private ##ENTIDADEDAO dao;

	@Override
	public GenericDAO<##ENTIDADE, Integer> getDao() {
		return dao;
	}
}
