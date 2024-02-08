import Integrator from '~/API/Integrator';

class GeneratePix {
  async run({ codfat }) {
    const response = await Integrator.Bill.generatePix({ codfat });

    const slashes = /(\\|\/)/;

    const results = response.data.data.results;
    const pixData = results[0];
    const qrcode = pixData.imagemQrcode.split(',');
    const textPix = pixData.textoImagemQRcode;

    const metadata = qrcode[0];
    const payload = qrcode[1].replace(slashes, '');

    const image = `${metadata}/${payload}`;

    return {
      image,
      textPix,
    };
  }
}

export default new GeneratePix();
