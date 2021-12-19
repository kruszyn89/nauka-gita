import { Block } from './block.type'

const blockId = 'lazyblock/offer'

interface Offerts {
  title: string
  url: string
  urlText: string
  icon: Image
}

interface Image {
  alt: string
  url: string
}

interface Ioffer {
  id: 'lazyblock/offer'
  attrs: {
    offer: Offerts[]
  }
}

export function reducerOffer(data: Block): Ioffer | null {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        offer: attrs.offer
          ? JSON.parse(decodeURI(attrs.offer)).map((singleOffer: any) => ({
            title: singleOffer.title,
            url: singleOffer.url,
            urlText: singleOffer['url-text'],
            icon: singleOffer.icon
                ? { url: singleOffer.icon.url, alt: singleOffer.icon.alt }
                : null,
            }))
          : [],
      },
    }
  }
  return null
}
