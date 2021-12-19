import { Block } from './block.type'

const blockId = 'lazyblock/hero-homepage'

interface IheroHomepage {
  id: 'lazyblock/hero-homepage'
  attrs: {
    title: string
    description: string
    link: string
    background: string
  }
}

export function reducerheroHomepage(data: Block): IheroHomepage | null {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        title: attrs.title|| '',
        description: attrs.description|| '',
        link: attrs.link || '',
        background:  attrs.background ? JSON.parse(decodeURI(attrs.background)) : null,
      }
    }
  }
  return null
}
