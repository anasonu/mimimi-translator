import React, { useState } from "react";
import Header from "./Header";
import TextToTranslate from "./TextToTranslate";
import TextTranslated from "./TextTranslated";

function Translator() {
  const [content, setContent] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  return (
    <div>
      <Header />
      <div className="translator">
        <TextToTranslate content={content} setContent={setContent} />
        <TextTranslated content={content} setCopySuccess={setCopySuccess} />
      </div>
      <div className="copy-success-container">
        <p id="hide-element" className="copy-success-text">{copySuccess}</p>
      </div>
    </div>
  );
}

export default Translator;
