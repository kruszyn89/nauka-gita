import { Block } from './block.type'

const blockId = 'lazyblock/contact-form'

interface IContactForm {
  id: 'lazyblock/contact-form'
  attrs: {
    title?: string
    description?: string
    icons?: {
      icon: string,
      text: string
    }

  }
}

export async function reducerContactForm(
  data: Block
): Promise<IContactForm | null> {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        title: attrs.title || '',
        description: attrs.description || '',
        icons: attrs.icons ? JSON.parse(decodeURI(attrs.icons)) : null,
      }
    }
  }
  return null
}
