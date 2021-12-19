import * as React from 'react'
import MenuSidebar from '../MenuSidebar'
import HtmlBlock from '../HtmlBlock'
import CallToActionComponent from '../elements/CallToActionComponent'
import Advantages from '../Advantages'
import SocialBanner from '../SocialBanner'
import TextWithImages from '../TextWithImages'
import FullScreenMedia from '../FullScreenMedia'
import Aside from '../elements/AsideComponent'
import { FadeIn } from '../FadeIn'
import ColumnsContainer from '../ColumnsContainer'
import TextComponent from '../TextComponent'
import GalleryGrid from '../GalleryGrid'
import ContactForm from '../ContactForm/ContactForm'
import Spacer from '../elements/Spacer'
import VideoComponent from '../elements/VideoComponent'
import HeroHomepage from '../HeroHomepage'
import TextWithBgImage from '../TextWithBgImage'
export interface IComposerBlocksProps {
  data: any[]
}

export default function ComposerBlocks({ data }: IComposerBlocksProps) {
  console.log(data)
  return (
    <>
      {data.map(({ id, attrs }) => (
        <FadeIn>
          {(function () {
            switch (id) {
              case 'lazyblock/text-with-images':
                return <TextWithImages {...attrs} />
              case 'lazyblock/aside':
                return <Aside {...attrs} />
              case 'lazyblock/call-to-action':
                return <CallToActionComponent {...attrs} />
              case 'lazyblock/fullscreen-media':
                return <FullScreenMedia {...attrs} />
              case 'lazyblock/menu-sidebar':
                return <MenuSidebar {...attrs} />
              case 'lazyblock/advantages':
                return <Advantages {...attrs} />
              case 'lazyblock/socials-banner':
                return <SocialBanner {...attrs} />
              case 'core/columns':
                return <ColumnsContainer {...attrs} />
              case 'lazyblock/text-block':
                return <TextComponent {...attrs} />
              case 'lazyblock/gallery-grid':
                return <GalleryGrid {...attrs} />
              case 'lazyblock/contact-form':
                return <ContactForm {...attrs} />
              case 'lazyblock/yt-video':
                return <VideoComponent {...attrs} />
              case 'lazyblock/spacer':
                return <Spacer {...attrs} />
              case 'lazyblock/hero-homepage':
                return <HeroHomepage {...attrs} />
              case 'lazyblock/text-with-bg-image':
                return <TextWithBgImage {...attrs}/>
              default:
                return <></>
            }
          })()}
        </FadeIn>
      ))}
    </>
  )
}
