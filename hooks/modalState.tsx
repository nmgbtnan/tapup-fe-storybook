import { create } from "zustand";

type ModalState = {
  isLoginModalOpen: boolean;
  isForgotPasswordModalOpen: boolean;
  isVerifyCodeModalOpen: boolean;
  isRegisterUserModalOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openForgotPasswordModal: () => void;
  closeForgotPasswordModal: () => void;
  openVerifyCodeModal: () => void;
  closeVerifyCodeModal: () => void;
  openRegisterUserModal: () => void;
  closeRegisterUserModal: () => void;

  isActivationCardModalOpen: boolean;
  openCardActivationModal: () => void;
  closeActivationCardModal: () => void;
};

export const useModalState = create<ModalState>((set) => ({
  isLoginModalOpen: false,
  isForgotPasswordModalOpen: false,
  isVerifyCodeModalOpen: false,
  isRegisterUserModalOpen: false,
  openLoginModal: () => set({ isLoginModalOpen: true }),
  closeLoginModal: () => set({ isLoginModalOpen: false }),
  openForgotPasswordModal: () => set({ isForgotPasswordModalOpen: true }),
  closeForgotPasswordModal: () => set({ isForgotPasswordModalOpen: false }),
  openVerifyCodeModal: () => set({ isVerifyCodeModalOpen: true }),
  closeVerifyCodeModal: () => set({ isVerifyCodeModalOpen: false }),
  openRegisterUserModal: () => set({ isRegisterUserModalOpen: true }),
  closeRegisterUserModal: () => set({ isRegisterUserModalOpen: false }),

  isActivationCardModalOpen: false,
  openCardActivationModal: () => {
    set({ isActivationCardModalOpen: true });
  },
  closeActivationCardModal: () => set({ isActivationCardModalOpen: false }),
}));
