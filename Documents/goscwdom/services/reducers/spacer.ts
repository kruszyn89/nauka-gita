import { Block } from './block.type'

const blockId = 'lazyblock/spacer'

interface CallToActionSection {
  id: 'lazyblock/spacer'
  attrs: object
}

export function reducerSpacer(data: Block): CallToActionSection | null {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        heightValue: attrs.height || null,
      },
    }
  }
  return null
}
