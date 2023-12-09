import { useState } from "react";
import "./index.css";
import CodeEditor from "@uiw/react-textarea-code-editor";
import Dropdown, { Option } from "react-dropdown";

const EditorPage: React.FC = () => {
  let code = `function add(a, b) {\n  return a + b;\n}`;
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
        </div>
        <div className="editor-results-container">{results}</div>
      </div>
    </div>
  );
};

export default EditorPage;
