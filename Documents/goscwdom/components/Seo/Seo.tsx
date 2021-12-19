import * as React from 'react'

interface ISeoProps {
  tags: {
    tag: string
    content?: string
    attributes?: {
      [key: string]: string
    }
  }[]
}

function Seo({ tags }: ISeoProps): any {
  return tags.map(({ tag, attributes, content }) => {
    if (tag == 'title') {
      return ''
    } else {
      return React.createElement(tag, attributes ? attributes : null, content)
    }
  })
}

export default Seo
