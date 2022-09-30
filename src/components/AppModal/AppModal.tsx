import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import * as React from "react";
import { AppModalModel } from "../../models/AppModalModel/AppModalModel";

export const AppModal = () => {
  const modal = new AppModalModel();

  return (
    <Modal isOpen={modal.appModalState.isOpen} onClose={() => modal.toggleOpen()}>
      <ModalOverlay />
      <ModalContent>
        {modal.appModalState.isShow?.header && (
          <ModalHeader>{modal.appModalState?.content?.title}</ModalHeader>
        )}
        <ModalCloseButton />
        {modal.appModalState.isShow?.body && (
          <ModalBody>{modal.appModalState?.content?.body}</ModalBody>
        )}

        {modal.appModalState.isShow?.footer && (
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => modal.toggleOpen()}
            >
              {modal.appModalState.nameCloseBtn}
            </Button>
            <Button variant="ghost">{modal.appModalState.nameActionBtn}</Button>
          </ModalFooter>
        )}
      </ModalContent>
    </Modal>
  );
};
