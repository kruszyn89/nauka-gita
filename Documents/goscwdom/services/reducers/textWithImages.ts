import wordpressApi from '../wordpressApi'
import { Block } from './block.type'

const blockId = 'lazyblock/text-with-images'

interface OfferList {
  id: 'lazyblock/text-with-images'
  attrs: {
    title: string
    article: string
    button: string
    buttonPath: string
    inverted: boolean
    image: string
    image2: string
    backgroundTheme: string
  }
}

export async function reducerTextWithImages(
  data: Block
): Promise<OfferList | null> {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        title: attrs.title || null,
        article: attrs.article || null,
        button: attrs.button || null,
        buttonPath: attrs.buttonPath || null,
        inverted: attrs.inverted || null,
        image: attrs.image ? JSON.parse(decodeURI(attrs.image)) : null,
        image2: attrs['image-2'] ? JSON.parse(decodeURI(attrs['image-2'])) : null,
        backgroundTheme: attrs.backgroundTheme || null,
      },
    }
  }
  return null
}
