// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from 'next';
import UrlService from './UrlService';

const urlService = new UrlService();
const BASE_URL = 'https://api.shrtco.de/v2/';

export default (_req: NextApiRequest, res: NextApiResponse): void => {
  if (_req.method === 'POST') {
    const { body } = _req;
    const { url } = JSON.parse(body);
    fetch(`${BASE_URL}shorten?url=${url}`, {
      method: 'GET',
    })
      .then((r) => r.json())
      .then((r) => {
        const { result, ok } = r;

        if (ok) {
          const response = {
            shorten: result.full_short_link,
            origin: result.original_link,
            copied: false,
          };

          urlService.addShortenUrl(response);
          res.status(200).json(response);
        } else {
          res.status(200).json({
            error: r.error,
          });
        }
      });
  } else if (_req.method === 'GET') {
    res.status(200).json(urlService.shortenUrls);
  }
};
