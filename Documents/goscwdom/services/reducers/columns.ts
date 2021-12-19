import { WordpressAPI } from '../wordpressApi'
import { Block } from './block.type'

const columnsBlockId = 'core/columns'
const columnId = 'core/column'

interface ColumnsView {
  id: 'core/columns'
  attrs: {}
}
interface ColumnBlock {
  blockName: string
  innerBlocks: Array<Array<Block>>
}
interface ColumnsData {
  blockName: string
  attrs: {}
  innerBlocks: ColumnBlock[][]
}

export async function reducerColumns(
  data: ColumnsData
): Promise<ColumnsView | null> {
  const block = data.blockName == columnsBlockId && data
  const parseColumns = async (innerBlocks: Array<Array<ColumnBlock>>) => {
    const columnsWithBlocks = await Promise.all(
      innerBlocks.map(async (block) => {
        return Promise.all(
          block.map(async (columnBlock, i) => {
            return {
              innerBlocks:
                columnBlock.innerBlocks[0] &&
                (await WordpressAPI.reducers(columnBlock.innerBlocks[0])),
            }
          })
        )
      })
    )
    return columnsWithBlocks[0]
  }
  if (block) {
    const { attrs, innerBlocks } = block
    return {
      id: columnsBlockId,
      attrs: {
        columns: await parseColumns(innerBlocks),
      },
    }
  }
  return null
}
