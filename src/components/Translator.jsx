import React, { useState } from "react";
import Header from "./Header";
import TextToTranslate from "./TextToTranslate";
import TextTranslated from "./TextTranslated";

function Translator() {
  const [content, setContent] = useState("");
  return (
    <div>
      <Header />
      <div className="translator">
        <TextToTranslate content={content} setContent={setContent} />
        <TextTranslated content={content} />
      </div>
    </div>
  );
}

export default Translator;
