
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { appAtom, appTemplates } from '../../state/app/app';


export class AppModel {
    private appState = useRecoilValue(appAtom)
    private setState = useSetRecoilState(appAtom);

    getState() { return this.appState }

    setTemplateModule(appTemplates: appTemplates[]) {
        this.setState({ ...this.appState, useTemplates: appTemplates })
    }

    hasTemplateModule(modul: appTemplates) {
        return this.appState?.useTemplates.indexOf(modul) != -1;
    }
}
