import axios from "axios";

interface IIIFInfo {
  "@id": string;
  sizes: { width: number; height: number }[];
  width: number;
  height: number;
}

export default class ImageInfo {
  id: string;
  sizes: { width: number; height: number }[];
  width: number;
  height: number;

  constructor(iiifInfo: IIIFInfo) {
    this.id = iiifInfo["@id"];
    this.sizes = iiifInfo["sizes"];
    this.width = iiifInfo["width"];
    this.height = iiifInfo["height"];
  }

  getThumbnailUrl(): string {
    const availableWidths = this.sizes.map((size) => size.width);
    const minAvailableWidth = Math.min(...availableWidths);

    return `${this.id}/full/${minAvailableWidth},/0/default.jpg`;
  }
}

export function fetchImageInfo(iiifUrl: string) {
  return axios.get(iiifUrl);
}

export function fetchImageInfos(iiifUrls: string[]): Promise<ImageInfo[]> {
  const imageInfoRequests = iiifUrls.map((iiifUrl) => fetchImageInfo(iiifUrl));

  return Promise.all(imageInfoRequests).then((response) => {
    const imageInfos: ImageInfo[] = [];

    response.forEach((response) => {
      imageInfos.push(new ImageInfo(response.data));
    });

    return imageInfos;
  });
}
