import Integrator from '~/API/Integrator';

/**
 * @deprecated Use o FilterPlans no lugar
 */
class ShowAllPlans {
  async run({ codcli }) {
    const { data } = await Integrator.View.execute({
      _consulta: '012I0L9WDV',
      codcli,
    });

    return this._getResponsePlans(data.data?.results);
  }

  _getResponsePlans(plans) {
    return plans
      ?.filter((plano) => plano.Status_150.trim() === 'Serviço Habilitado')
      ?.map((item) => ({
        nome_plano: item.Nome_do_Plano_200,
        codigo_plano: item.Codigo_plano,
        status_plano: item.Status_150.trim(),
        endereco_plano: item.endereco_instalacao_200.trim(),
      }));
  }
}

export default new ShowAllPlans();
