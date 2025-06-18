import { safeDecode } from '~/util/utf8';

import Integrator from '~/API/Integrator';
import GetServiceDetails from './GetServiceDetails';
import GetSpeedServices from './GetSpeedServices';

class ListActiveServices {
  async run({ codcli, statusQuery }) {
    const { getEqual, text } = statusQuery || {};

    const { data } = await Integrator.Service.list({ codcli });
    if (data.data) {
      const list = data.data?.results;

      const statusExtractList = statusQuery
        ? list?.filter((service) => (service.descri_est === text) === getEqual)
        : list;

      const extractList = statusExtractList?.map(async (service) => {
        const details = await GetServiceDetails.run({
          codcli,
          codsercli: service.codsercli,
        });

        const speedPlan = await GetSpeedServices.run({
          codsercli: service.codsercli,
        });

        return {
          name: safeDecode(service.descri_ser),
          cobranca: service.descri_cob,
          obs: safeDecode(service.obs),
          dia_vencimento: service.dia,
          codsercli: service.codsercli,
          status: service.descri_est,
          referencia: service.Referencia_250,
          ...details,
          ...speedPlan,
        };
      });

      return Promise.all(extractList);
    }
    return [];
  }
}

export default new ListActiveServices();
