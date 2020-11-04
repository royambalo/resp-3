// import { IMediaItemResponse } from '@beseed/api-interfaces';
import { eMediaSourceType } from './helper.helper';
export interface IMediaItemResponse{
  [key:string]:any
}
export function getImageUrl(media: IMediaItemResponse) {
  if (!media) {
    return null;
  }
  if (media.sourceLinkType === eMediaSourceType.YOUTUBE_LINK) {
    // if a thumbnail for youtube was successfuly created
    if(media.mainImage === undefined || media.mainImage === null) {
      const id = youtube_id_parser(media.link);
      return id ? youtubeThumbnailHq(id) : '';
    } else {
      // if no thumbnail was created for the video and an image was added
      return media.mainImage ? media.mainImage.url : '';
    }
  } else if (media.sourceLinkType === eMediaSourceType.VIMEO_LINK || media.sourceLinkType === eMediaSourceType.VIDEO) {
    return media.mainImage ? media.mainImage.url : '';
  } else {
    return media.link;
  }
}

export function getEmbedFrame(media: IMediaItemResponse) {
  if (!media) {
    return null;
  }
  if (media.sourceLinkType === eMediaSourceType.YOUTUBE_LINK) {
    return getEmbedYoutubeFrame(media.link);
  } else if (media.sourceLinkType === eMediaSourceType.VIMEO_LINK) {
    return getEmbedVimeoFrame(media.link);
  } else if (media.sourceLinkType === eMediaSourceType.VIDEO) {
    return html5Video(media.link);
  }
}

export function getEmbedYoutubeFrame(url: string) {
  const id = youtube_id_parser(url);
  return id ? embedYoutubeCode(id) : '';
}

export function getEmbedVimeoFrame(url: string) {
  const id = vimeo_id_parser(url);
  return id ? embedVimeoCode(id) : '';
}

export function youtube_id_parser(url: string): string{
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return match[2];
  } else {
    return null;
  }
}

export function vimeo_id_parser(url: string) {
  const regExp = /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/
  const parseUrl = regExp.exec(url);
  return parseUrl[5]
}

// const youtubeThumbnailHq = (id: string) => `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
const youtubeThumbnailHq = (id: string) => `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

const embedYoutubeCode = (id: string) => `<iframe id="ytplayer" style="width:100%; height: 100%" type="text/html" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen>`;

const embedVimeoCode = (id: string) => `<iframe src="https://player.vimeo.com/video/${id}" style="width:100%; height: 100%" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>`;


const html5Video = (link: string) => `<video style="width:100%; height: 100%" controls>
                                      <source src="${link}" type="video/mp4">
                                    Your browser does not support the video tag.
                                    </video>`;
