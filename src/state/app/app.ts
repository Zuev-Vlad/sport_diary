import { atom } from 'recoil';

export enum colorModeType {
    dark = 'dark',
    light = 'light'
}

export enum appTemplates {
    header = 'header',
    sidebar = 'sidebar',
    content = 'content',
    footer = 'footer'
}

export interface AppStateProps {
    colorMode: colorModeType,
    useTemplates: appTemplates[],

}
export const appDefaultState: AppStateProps = {
    colorMode: colorModeType.light,
    useTemplates: Object.values(appTemplates),
}

export const appAtom = atom({
    key: 'appAtom',
    default: appDefaultState
})
