import { Block } from './block.type'

const blockId = 'lazyblock/socials-banner'

interface SocialLink {
  link: string
  icon: Image
}

interface Image {
  alt: string
  url: string
}

interface ISocialBanner {
  id: 'lazyblock/socials-banner'
  attrs: {
    images?: Image[]
  }
}

export function reducerSocialBanner(data: Block): ISocialBanner | null {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        images: attrs.images
          ? JSON.parse(decodeURI(attrs.images)).map((img: any) => ({
              alt: img.alt,
              url: img.url,
            }))
          : [],
      },
    }
  }
  return null
}
