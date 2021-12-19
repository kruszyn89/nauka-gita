import { reducerCoreBlocks } from './reducers/coreBlocks'
import { reducerTestimonials } from './reducers/testimonials'
import { reducerAdvantages } from './reducers/advantages'
import { reducerSocialBanner } from './reducers/socialsBanner'
import { reducerTextWithImages } from './reducers/textWithImages'
import { reducerBreadcrumb } from './breadcrumbReducer'
import { reducerFullScreenMedia } from './reducers/fullScreenMedia'
import { reducerAside } from './reducers/aside'
import { reducerTextComponent } from './reducers/textComponent'
import { reducerColumns } from './reducers/columns'
import { reducerGalleryGrid } from './reducers/galleryGrid'
import { reducerContactForm } from './reducers/contactForm'
import { reducerVideo } from './reducers/videoReducer'
import { reducerInfoText } from './reducers/infoText'
import { reducerSpacer } from './reducers/spacer'
import { reducerheroHomepage } from './reducers/hero-homepage'
import { reducerTextWithBgImage } from './reducers/textWithBgImage'
import { reducerTextWithFullHImage } from './reducers/textWithFullHImage'
import { reducerOffer } from './reducers/offer'

export const API_URL = 'https://goscwdom.codeholic.pl/wp-json/wp/v2'

export interface MenuItem {
  url: string
  children: MenuItem[]
  title: string
  trainers?: string[]
}

export interface FaqCategory {
  name: string
  slug: string
}

export interface Menus {
  primary: MenuItem[]
  footer1: MenuItem[]
  footer2: MenuItem[]
  footer3: MenuItem[]
  footer4: MenuItem[]
  footer5: MenuItem[]
}

class WordpressAPI {
  constructor() {}

  async getPage(slug: string) {
    const data = await fetch(`${API_URL}/pages?slug=${slug}`).then((respond) =>
      respond.json()
    )
    if (!data.length) {
      return []
    }

    const tmp = await WordpressAPI.reducers(data[0].blocks)
    const breadcrumbs = reducerBreadcrumb(data[0].head_tags)

    return { blocks: tmp, tags: data[0].head_tags, breadcrumbs }
  }

  async getPagesMenu(
    ids: number[]
  ): Promise<{ id: number; title: string; slug: string }[]> {
    const reduce = (respond: any[]) =>
      respond.map(({ id, title, slug }) => ({
        id,
        title: title.rendered,
        slug,
      }))

    return await fetch(
      `${API_URL}/pages?${ids.map((id) => `include[]=${id}`).join('&')}`
    )
      .then((respond) => respond.json())
      .then(reduce)
  }


  async getMenus(): Promise<Menus> {
    const data = await fetch(`${API_URL}/menu`).then((respond) =>
      respond.json()
    )
    let menus: Menus = {
      primary: [],
      footer1: [],
      footer2: [],
      footer3: [],
      footer4: [],
      footer5: [],
    }
    try {
      menus = {
        primary: WordpressAPI.reducerMenu(data.primary),
        footer1: WordpressAPI.reducerMenu(data.footer1),
        footer2: WordpressAPI.reducerMenu(data.footer2),
        footer3: WordpressAPI.reducerMenu(data.footer3),
        footer4: WordpressAPI.reducerMenu(data.footer4),
        footer5: WordpressAPI.reducerMenu(data.footer5),
      }
    } catch (error) {
      console.log(error)
    }
    return menus
  }


  static reducerMenu(
    menu: { ID: number; title: string; url: string; menu_item_parent: number }[]
  ): MenuItem[] {
    const helperReference: MenuItem[] = []
    if(!menu?.length){
      return [];
    }
    menu.forEach((element) => {
      helperReference[element.ID] = {
        title: element.title,
        url: element.url,
        children: [],
      }
    })

    menu.forEach((element) => {
      helperReference[element.menu_item_parent]?.children.push(
        helperReference[element.ID]
      )
    })

    const newMenu = menu
      .map((element) => {
        if (element.menu_item_parent != 0) {
          return null
        }
        return helperReference[element.ID]
      })
      .filter((el) => el) as MenuItem[]

    return newMenu ? newMenu : []
  }

  static async reducers(data: any) {
    const reducers = [
      reducerCoreBlocks,
      reducerheroHomepage,
      reducerTextWithImages,
      reducerTextWithBgImage,
      reducerTextWithFullHImage,
      reducerOffer,
      reducerSocialBanner,
      reducerAdvantages,

      reducerVideo,

      reducerTestimonials,
      reducerFullScreenMedia,
      reducerAside,
      reducerTextComponent,
      reducerColumns,
      reducerGalleryGrid,
      reducerContactForm,
      reducerInfoText,
      reducerSpacer,
    ]

    const promised = await Promise.all(
      data.map(async (singleBlock: any) => {
        try {
          return Promise.all(
            reducers.map(async (reducer) => await reducer(singleBlock))
          ).then((element) => element.filter((data) => data)[0])          
        } catch (error) {
          console.log(error);
        }

      })
    )

    return promised.filter((data: any) => data)
  }
}

export default new WordpressAPI()
export { WordpressAPI }
