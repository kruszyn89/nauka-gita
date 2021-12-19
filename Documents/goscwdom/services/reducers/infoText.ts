import { Block } from './block.type'

const blockId = 'lazyblock/info-text'

interface InfoTextProps {
  id: 'lazyblock/info-text'
  attrs: {
    fields: Field[]
  }
}
interface Field {
  title: string
  content: string
}

export function reducerInfoText(data: Block): InfoTextProps | null {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        fields: attrs.fields
          ? JSON.parse(decodeURI(attrs.fields)).map((field: Field) => {
              return {
                title: field.title || null,
                content: field.content || null,
              }
            })
          : [],
      },
    }
  }
  return null
}
