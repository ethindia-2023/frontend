import { ReactNode } from "react";
import "./index.css";

export type FloatingChatButtonProps = {
  children?: ReactNode;
  buttonColor?: string;
  className?: string;
  onClick?: VoidFunction;
};

const FloatingChatButton: React.FC<FloatingChatButtonProps> = (
  props: FloatingChatButtonProps
) => {
  const { children, buttonColor, className, onClick } = props;
  return (
    <div
      className={`floating-chat-button ${className}`}
      style={{ backgroundColor: buttonColor }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default FloatingChatButton;
