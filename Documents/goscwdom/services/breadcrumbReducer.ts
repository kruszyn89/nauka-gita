export interface IBreadcrumb {
  name: string
  url: string
  position: number
}
interface ITag {
  tag: string
  content: string
}
interface IPageData {
  '@type': string
  itemListElement: IBreadcrumbOriginal[]
}
interface ContentItem {
  '@graph': IPageData[]
}
interface IBreadcrumbOriginal {
  '@type': string
  position: string
  item: {
    name: string
    url: string
  }
}

const homePage: IBreadcrumb = {
  url: '/',
  name: 'Strona główna',
  position: 0,
}
const parentsMap: Record<string, Array<IBreadcrumb>> = {
  employee: [
    homePage,
    {
      url: '/o-nas',
      name: 'O nas',
      position: 1,
    },
    {
      url: '/o-nas/nasz-zespol',
      name: 'Nasz zespół',
      position: 2,
    },
  ],
  offer: [
    homePage,
    {
      url: '/nasza-oferta',
      name: 'Oferta',
      position: 1,
    },
  ],
}

export function reducerBreadcrumb(
  tagList: ITag[],
  type: string = ''
): IBreadcrumb[] | null {
  const scriptTag = tagList.find((tag: ITag) => tag.tag === 'script')
  if (scriptTag) {
    const scriptParsed: ContentItem = JSON.parse(decodeURI(scriptTag.content))
    const breadcrumbData: IPageData | undefined = scriptParsed['@graph'].find(
      (itemtype) => itemtype['@type'] === 'BreadcrumbList'
    )
    if (breadcrumbData) {
      if (type && parentsMap[type].length) {
        const breadcrumbsList = [...parentsMap[type]]
        breadcrumbData.itemListElement.forEach(
          (breadcrumb: IBreadcrumbOriginal) => {
            if (breadcrumb.item.name !== 'Home') {
              breadcrumbsList.push({
                name: breadcrumb.item.name,
                url: breadcrumb.item.url,
                position: parentsMap[type].length + Number(breadcrumb.position),
              })
            }
          }
        )
        return breadcrumbsList
      }
      const items = breadcrumbData.itemListElement.map(
        (breadcrumb: IBreadcrumbOriginal) => {
          return {
            name:
              breadcrumb.item.name === 'Home'
                ? 'Strona główna'
                : breadcrumb.item.name,
            url: breadcrumb.item.url,
            position: Number(breadcrumb.position),
          }
        }
      )
      return items.sort((item1, item2) => item1.position - item2.position)
    }
  }
  return null
}
