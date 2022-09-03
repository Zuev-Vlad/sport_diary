import { atom } from 'recoil';

export enum colorModeType {
    dark = 'dark',
    light = 'light'
}

export interface AppStateProps {
    colorMode: colorModeType,

}
export const appDefaultState: AppStateProps = {
    colorMode: colorModeType.dark
}

export const appAtom = atom({
    key: 'appAtom',
    default: appDefaultState
})