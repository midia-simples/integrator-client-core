import axios from 'axios';
import GetBoletoData from './GetBoletoData';
import renderPDF from '~/util/renderPDF';

class GetBoletoPDF {
  async run({ codfat }) {
    const { download } = await GetBoletoData.run({ codfat });

    const { data: dataHtml } = await axios.get(download);

    const [url = ''] = dataHtml.match(
      /(?<=<script>window\.location\.href=')(.*)(?='<\/script>)/,
    );

    return renderPDF(url);
  }
}

export default new GetBoletoPDF();
