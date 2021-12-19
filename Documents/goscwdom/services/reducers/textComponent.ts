import { Block } from './block.type'

const blockId = 'lazyblock/text-block'

interface CallToActionSection {
  id: 'lazyblock/text-block'
  attrs: {}
}

export function reducerTextComponent(data: Block): CallToActionSection | null {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        text: attrs.text || null,
      },
    }
  }
  return null
}
