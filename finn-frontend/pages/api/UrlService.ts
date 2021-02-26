import { TUrlComponentProps } from '../../components/UrlComponent';

class UrlService {
  urls: Array<TUrlComponentProps>
  constructor() {
    this.urls = [];
  }

  get shortenUrls() {
    return this.urls;
  }

  addShortenUrl(url: TUrlComponentProps) {
    this.urls.push(url)
  }
}

export default UrlService;
