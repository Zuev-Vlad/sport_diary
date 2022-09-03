import { useRecoilValue } from 'recoil';
import { appAtom } from '../../state/app/app';


export class AppModel {
    private appState = useRecoilValue(appAtom)
    getState() { return this.appState }
}