import { ReactNode, useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import "./index.css";

export type ModalProps = {
  isOpen: boolean;
  modalIcon: ReactNode;
  modalTitle: string;
  modalDescription: string;
  hasCloseBtn?: boolean;
  onClose?: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = (props: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const {
    isOpen,
    onClose,
    hasCloseBtn,
    modalIcon,
    modalTitle,
    modalDescription,
    children,
  } = props;

  const [isModalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setModalOpen(true);
    }
  }, [isOpen]);

  useEffect(() => {
    const modalElement = modalRef.current;
    if (modalElement) {
      modalElement.close();
      if (isModalOpen) {
        modalElement.showModal();
      }
    }
  }, [isModalOpen]);

  const handleCloseModal = () => {
    if (onClose) {
      onClose();
    } else {
      setModalOpen(false);
    }
  };

  return (
    <dialog ref={modalRef} className="modal-container">
      <div className="modal-body">
        <div className="modal-header">
          <div className="modal-icon">{modalIcon}</div>
          {hasCloseBtn && (
            <div className="modal-close-icon" onClick={handleCloseModal}>
              <IoMdClose />
            </div>
          )}
        </div>
        <div className="modal-content">
          <div className="modal-title">{modalTitle}</div>
          <div className="modal-description">{modalDescription}</div>
          <div className="modal-content-child">{children}</div>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
