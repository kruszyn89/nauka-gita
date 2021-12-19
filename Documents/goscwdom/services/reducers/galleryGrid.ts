import { Block } from './block.type'

const blockId = 'lazyblock/gallery-grid'

interface Image {
  alt: string
  url: string
}

interface GalleryElements {
  image: Image
  thumbnail: Image
  width: string
}

interface IGalleryGrid {
  id: 'lazyblock/gallery-grid'
  attrs: {
    title: string
    gallery?: GalleryElements[]
  }
}

export function reducerGalleryGrid(data: Block): IGalleryGrid | null {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        title: attrs.title || '',
        gallery: attrs.gallery
          ? JSON.parse(decodeURI(attrs.gallery))
              .map((gallery: any) => {
                return {
                  image: gallery.image
                    ? { alt: gallery.image.alt, url: gallery.image.url }
                    : '',
                  width: gallery.width,
                  thumbnail: gallery.thumbnail
                    ? { alt: gallery.thumbnail.alt, url: gallery.thumbnail.url }
                    : gallery.image
                    ? { alt: gallery.image.alt, url: gallery.image.url }
                    : '',
                }
              })
              .filter((item: GalleryElements) => item?.image?.url)
          : [],
      },
    }
  }
  return null
}
