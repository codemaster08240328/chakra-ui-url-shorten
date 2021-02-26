import { TUrlComponentProps } from '../../components/UrlComponent';

class UrlService {
  urls: Array<TUrlComponentProps>;

  constructor() {
    this.urls = [];
  }

  get shortenUrls(): Array<TUrlComponentProps> {
    return this.urls;
  }

  addShortenUrl(url: TUrlComponentProps): void {
    this.urls.push(url);
  }
}

export default UrlService;
