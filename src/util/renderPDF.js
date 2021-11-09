import axios from 'axios';

export default async function renderPDF(url) {
  const { data: stream } = await axios({
    url,
    method: 'GET',
    responseType: 'stream',
  });

  return { stream };
}
