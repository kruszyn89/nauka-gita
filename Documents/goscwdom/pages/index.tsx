import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import WordpressApi, { Menus } from '../services/wordpressApi'
import ComposerBlocks from '../components/ComposerBlocks'
import Seo from '../components/Seo/Seo'

export default function Home({
  data,
  menus,
  tags,
}: {
  data: any
  menus: Menus
  tags: any
}) {
  return (
    <div>
      <Head>
        <Seo tags={tags} />
        <title>
          {tags.find(({ tag }: { tag: string }) => tag == 'title')?.content}
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimal-scale=1.0"
        />
      </Head>
      <Navigation menu={menus.primary} />
      <main id="bootstrap-overrides">
        <ComposerBlocks data={data} />
      </main>
      <Footer {...menus} />
    </div>
  )
}

export async function getServerSideProps() {
  let data: any
  let menus = {}
  try {
    [data, menus] = await Promise.all([
      WordpressApi.getPage('home-page-2'),
      WordpressApi.getMenus(),
    ])
  } catch (e) {
    console.log(e)
  }
  console.log(data);

  return {
    props: {
      data: data.blocks,
      tags: data.tags,
      menus,
    },
  }
}
