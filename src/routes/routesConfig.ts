
export enum pagesPath {
    index = '/',
    auth = '/auth',
}

export enum pageComponent {
    header = 'header',
    sidebar = 'sidebar',
    pageContainer = 'pageContainer'

}

type pageHasComponentType = {
    [key in pagesPath]: any[]
}

const pageHasComponent: pageHasComponentType = {
    [pagesPath.auth]: new Array(),
    [pagesPath.index]: [pageComponent.header, pageComponent.pageContainer, pageComponent.sidebar]
}

export const getComponentByRouter = (pagePath: pagesPath = null): any[] => {
    if (!pagePath) return [];
    return pageHasComponent[pagePath]
}
