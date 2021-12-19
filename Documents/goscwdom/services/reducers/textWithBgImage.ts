import wordpressApi from '../wordpressApi'
import { Block } from './block.type'

const blockId = 'lazyblock/text-with-bg-image'

interface OfferList {
  id: 'lazyblock/text-with-bg-image'
  attrs: {
    title: string
    article: string
    button: string
    buttonPath: string
    inverted: boolean
    background: string
  }
}

export async function reducerTextWithBgImage(
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
        background: attrs.background ? JSON.parse(decodeURI(attrs.background)) : null,
      },
    }
  }
  return null
}
