import { Block } from './block.type'

const blockId = 'lazyblock/advantages'

interface Advantage {
  text: string
  description: string;
  icon: Image
}

interface Image {
  alt: string
  url: string
}

interface IAdvantages {
  id: 'lazyblock/advantages'
  attrs: {
    advantages: Advantage[]
}
}

export function reducerAdvantages(data: Block): IAdvantages | null {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        advantages: attrs.advantages
          ? JSON.parse(decodeURI(attrs.advantages)).map((advantage: any) => ({
            text: advantage.text,
            description: advantage.description,
            icon: advantage.icon
                ? { url: advantage.icon.url, alt: advantage.icon.alt }
                : null,
            }))
          : [],
      },
    }
  }
  return null
}
