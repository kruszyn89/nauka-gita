import wordpressApi from '../wordpressApi'
import { Block } from './block.type'

const blockId = 'lazyblock/text-with-full-h-image'

interface OfferList {
  id: 'lazyblock/text-with-full-h-image'
  attrs: {
    title: string
    article: string
    button: string
    buttonPath: string
    inverted: boolean
    image: string
  }
}

export async function reducerTextWithFullHImage(
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
      },
    }
  }
  return null
}
