import { useState } from "react";
import "./index.css";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Dropdown, { Option } from "react-dropdown";
import FloatingChatButton from "app/components/FloatingChatButton";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import ChatBotDialogueBox from "app/components/ChatBotDialogueBpx";
import { DialogueProps } from "app/components/Dialogue";

const EditorPage: React.FC = () => {
  let code = `function add(a, b) {\n  return a + b;\n}`;

  const initialChatData: DialogueProps[] = [
    {
      sender: "bot",
      text: "Hi sir!",
    },
    {
      sender: "bot",
      text: "How may i help you!",
    },
  ];

  const [chats, setChats] = useState<DialogueProps[]>(initialChatData);

  const addUserMessage = (text: string) => {
    const chat: DialogueProps = {
      text: text,
      sender: "user",
    };
    setChats((chatList) => [...chatList, chat]);
  };

  const [chatBotOpen, setChatBotOpen] = useState<boolean>(false);

  const results: string = `Your Output will be shown here`;
  const [language, setLanguage] = useState("python");
  const languageOptions: string[] = ["python", "js"];
  return (
    <div className="editor-page-container">
      <div className="editor-page-header">
        <div className="editor-page-header-text">SOURCE CODE</div>
        <div className="editor-page-run-container">
          <Dropdown
            className="editor-page-dropdown"
            value={language}
            options={languageOptions}
            placeholder={"Select an option"}
            onChange={(option: Option) => {
              setLanguage(option.value);
            }}
          />
          <div className="editor-page-header-text editor-run-text">RUN</div>
        </div>
        <div className="editor-page-header-text">RESULTS</div>
      </div>
      <div className="editor-page-content-container">
        <div className="editor-container">
          <CodeEditor
            className="editor-panel"
            value={code}
            language={language}
            placeholder={`Please enter ${language} code.`}
            onChange={(evn) => (code = evn.target.value)}
            padding={15}
            style={{
              backgroundColor: "#F7F6F9",
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
              fontSize: "1.25rem",
            }}
          />
          <ChatBotDialogueBox
            className="editor-chatbot-box"
            chats={chats}
            isOpen={chatBotOpen}
            onSend={addUserMessage}
          />
          <FloatingChatButton
            buttonColor="#0000FF"
            children={<IoChatboxEllipsesOutline />}
            className="editor-chatbot-button"
            onClick={() => setChatBotOpen((open: boolean) => !open)}
          />
        </div>
        <div className="editor-results-container">{results}</div>
      </div>
    </div>
  );
};

export default EditorPage;
