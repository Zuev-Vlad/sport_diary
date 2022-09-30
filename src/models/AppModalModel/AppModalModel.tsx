import { useRecoilValue, useSetRecoilState } from "recoil";
import { appModalState as modalState } from "../../state/appModal/appModal";

export class AppModalModel {
  appModalState = useRecoilValue(modalState);

  private setState = useSetRecoilState(modalState);

  toggleOpen() {
    const currenIsOpen = this?.appModalState?.isOpen;
    this.setState((state) => ({ ...state, isOpen: !currenIsOpen }));
    if (!currenIsOpen) {
      this.appModalState.callbackClose();
    }
  }
}
