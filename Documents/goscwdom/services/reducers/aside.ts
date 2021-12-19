import { Block } from './block.type'

const blockId = 'lazyblock/aside'

interface CallToActionSection {
  id: 'lazyblock/aside'
  attrs: {}
}

export function reducerAside(data: Block): CallToActionSection | null {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        text: attrs.text,
      },
    }
  }
  return null
}
