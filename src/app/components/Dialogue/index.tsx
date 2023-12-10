import "./index.css";

export type DialogueProps = {
  text: string;
  sender: "bot" | "user";
};

const Dialogue: React.FC<DialogueProps> = (props: DialogueProps) => {
  const { text, sender } = props;
  return <p className={`chat-dialogue chat-${sender}`}>{text}</p>;
};

export default Dialogue;
