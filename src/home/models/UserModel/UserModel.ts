import { userAtom } from './../../state/user/user';
import { useRecoilValue } from "recoil"

export class UserModel {
    state = useRecoilValue(userAtom)
}