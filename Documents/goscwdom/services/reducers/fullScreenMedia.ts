import { ButtonText } from '../../components/elements/Buttons/BlueButton'
import { Block } from './block.type'

const blockId = 'lazyblock/fullscreen-media'

interface CallToActionSection {
  id: 'lazyblock/fullscreen-media'
  attrs: {}
}

export function reducerFullScreenMedia(
  data: Block
): CallToActionSection | null {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        video: attrs.video || null,
        image: attrs.image ? JSON.parse(decodeURI(attrs.image)) : null,
      },
    }
  }
  return null
}
