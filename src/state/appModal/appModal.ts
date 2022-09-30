import { ReactNode } from "react";
import { atom } from "recoil";

export interface appModalStateProps {
  isOpen: boolean;
  isShow: {
    header: boolean;
    body: boolean;
    footer: boolean;
  };
  size: "sm" | "md" | "lg" | "xl";
  content: {
    title: String | ReactNode;
    body: String | ReactNode;
    footer: String | ReactNode;
  };
  nameActionBtn: String | ReactNode;
  nameCloseBtn: String | ReactNode;
  onClickAction: () => void;
  callbackClose: () => void;
}

export const defaultAppModalState: appModalStateProps = {
  isOpen: false,
  isShow: {
    header: true,
    body: true,
    footer: true,
  },
  nameActionBtn: "Ок",
  nameCloseBtn: "Закрыть",
  content: {
    title: "title",
    body: "Content",
    footer: "footer",
  },
  size: "md",
  onClickAction: () => {},
  callbackClose: () => {},
};

export const appModalState = atom<appModalStateProps>({
  key: "appModalState",
  default: defaultAppModalState,
});
