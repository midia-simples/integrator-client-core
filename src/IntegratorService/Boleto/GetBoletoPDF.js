import axios from 'axios';
import GetBoletoData from './GetBoletoData';

import renderPDF from '~/util/renderPDF';
import ServiceError from '~/util/ServiceError';

class GetBoletoPDF {
  async run({ codfat }) {
    try {
      const { download } = await GetBoletoData.run({ codfat });

      const { data: dataHtml } = await axios.get(download);

      const [url = ''] = dataHtml.match(
        /(?<=<script>window\.location\.href=')(.*)(?='<\/script>)/,
      );

      return renderPDF(url);
    } catch (err) {
      throw new ServiceError(err?.response?.status || 500, err?.message || 'Erro ao buscar boleto no integrator');
    }
  }
}

export default new GetBoletoPDF();
