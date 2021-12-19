import { Block } from './block.type'

const blockId = 'lazyblock/testimonials'

interface Testimonials {
  quote: string
  signature: string
  author: string
  image: Image
}

interface Image {
  alt: string
  url: string
}

interface ITestimonials {
  id: 'lazyblock/testimonials'
  attrs: {
    title: string
    testimonials: Testimonials
    testimonialPageLink?: string
    testimonialPageLabel?: string
  }
}

export function reducerTestimonials(data: Block): ITestimonials | null {
  const block = data.blockName == blockId && data
  if (block) {
    const { attrs } = block
    return {
      id: blockId,
      attrs: {
        title: attrs.title,
        testimonialPageLink: attrs.testimonialPageLink || '/',
        testimonialPageLabel: attrs.testimonialPageLabel || '',
        testimonials: attrs.testimonials
          ? JSON.parse(decodeURI(attrs.testimonials)).map(
              (testimonial: any) => ({
                quote: testimonial.quote,
                signature: testimonial.signature,
                author: testimonial.author,
                image: testimonial.image
                  ? { url: testimonial.image.url, alt: testimonial.image.alt }
                  : null,
              })
            )
          : [],
      },
    }
  }
  return null
}
