export interface Block {
  blockName: string
  attrs: {
    [key: string]: any
  }
  innerBlocks: { blockName: string }[]
  innerHTML: string
}
