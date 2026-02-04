import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy, FaPlay, FaCheck } from "react-icons/fa";

const CodeTabs = ({ code, output }) => {
  const languages = Object.keys(code);
  const [active, setActive] = useState(languages[0]);
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code[active]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-box-container">
      <div className="code-header">
        <div className="tabs">
          {languages.map(lang => (
            <button
              key={lang}
              onClick={() => { setActive(lang); setShowOutput(false); }}
              className={`tab-btn ${active === lang ? "active" : ""}`}
            >
              {lang === "csharp" ? ".NET (C#)" : lang.toUpperCase()}
            </button>
          ))}
        </div>
        <div className="actions">
          <button className="action-btn copy-btn" onClick={handleCopy}>
            {copied ? <FaCheck /> : <FaCopy />} {copied ? "Copied" : "Copy"}
          </button>
          <button className="action-btn run-btn" onClick={() => setShowOutput(!showOutput)}>
            <FaPlay size={12} /> {showOutput ? "Hide Output" : "Run Coode"}
          </button>
        </div>
      </div>

      <div className="code-wrapper">
        <SyntaxHighlighter
          language={active === 'csharp' ? 'csharp' : active}
          style={vscDarkPlus}
          showLineNumbers={true}
          customStyle={{ margin: 0, borderRadius: '0 0 8px 8px' }}
        >
          {code[active]}
        </SyntaxHighlighter>
      </div>

      {showOutput && (
         <div className="output-console">
            <div className="console-header">Output Terminal</div>
            <pre>{output || "Program executed successfully. No output returned."}</pre>
         </div>
      )}
    </div>
  );
};

export default CodeTabs;
