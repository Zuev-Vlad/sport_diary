import { atom } from "recoil";

export type userType = {
    isAuth: boolean,
    firstName: string,
    lastName: string,
    dateBirth: string,
    weight: number,
    height: number,
    phone: string,
    adress: string,
    sex: string,
    type: string
}

export const userDefaultState = {
    isAuth: false,
    firstName: "",
    lastName: "",
    dateBirth: new Date().toLocaleDateString(),
    weight: 0,
    height: 0,
    phone: "",
    adress: "",
    sex: "",
    type: ""
}

export const userAtom = atom({
    key: 'userAtom',
    default: userDefaultState
}
)