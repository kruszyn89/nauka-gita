import { Block } from './block.type'

const blockId = 'lazyblock/yt-video'

interface CallToActionSection {
  id: 'lazyblock/yt-video'
  attrs: {}
}

export function reducerVideo(data: Block): CallToActionSection | null {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        url: attrs.url || '',
      },
    }
  }
  return null
}
