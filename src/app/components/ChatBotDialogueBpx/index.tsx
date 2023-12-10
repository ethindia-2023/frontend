import { useEffect, useRef, useState } from "react";
import Dialogue, { DialogueProps } from "../Dialogue";
import { IoMdClose } from "react-icons/io";
import { BsRobot } from "react-icons/bs";
import { IoSendSharp } from "react-icons/io5";
import "./index.css";

export type ChatBotDialogueBoxProps = {
  chats: DialogueProps[];
  isOpen: boolean;
  className: string;
  onSend: (text: string) => void;
};

const ChatBotDialogueBox: React.FC<ChatBotDialogueBoxProps> = (
  props: ChatBotDialogueBoxProps
) => {
  const { chats, isOpen, className, onSend } = props;
  const [modalOpen, setModalOpen] = useState<boolean>(isOpen);
  const modalRef = useRef<HTMLDialogElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setModalOpen(true);
    } else {
      setModalOpen(false);
    }
  }, [isOpen]);

  useEffect(() => {
    let modalElement = modalRef.current;

    if (modalElement) {
      if (modalOpen) {
        modalElement.showModal();
      } else {
        modalElement.close();
      }
    }
  }, [modalOpen]);

  const handleCloseChatBot = () => {
    setModalOpen(false);
  };

  return (
    <dialog
      ref={modalRef}
      className={`chatbox-container-dialogue ${className}`}
    >
      <div className="chatbox-container">
        <div className="chatbox-header">
          <div className="chatbox-header-bot">
            <BsRobot className="chatbox-header-bot-icon" />
            <div className="chatbox-header-bot-name">Cipher Bot</div>
          </div>
          <div className="chatbox-close-icon" onClick={handleCloseChatBot}>
            <IoMdClose />
          </div>
        </div>
        <div className="chatbox-area">
          {chats.map((dialogue: DialogueProps) => (
            <Dialogue {...dialogue} />
          ))}
        </div>
        <div className="chatbox-send">
          <input
            ref={inputRef}
            className="chatbox-input"
            type="text"
            placeholder="Message to Cipher bot..."
          />
          <div
            className="chatbox-send-button"
            onClick={() => {
              if (inputRef.current?.value) {
                onSend(inputRef.current?.value);
                inputRef.current.value = "";
              }
            }}
          >
            <IoSendSharp />
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default ChatBotDialogueBox;
