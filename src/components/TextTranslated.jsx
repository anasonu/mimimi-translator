import React from "react";
import CopyIcon from "./CopyIcon";

function TextTranslated({ content, setCopySuccess }) {
  const translateText = (text) => {
    return text
      .replaceAll(/[aeou]/g, "i")
      .replaceAll(/[AEOU]/g, "I")
      .replaceAll(/[áéóú]/g, "í")
      .replaceAll(/[ÁÉÓÚ]/g, "Í")
      .replaceAll(/[äëöü]/g, "ï")
      .replaceAll(/[ÄËÖÜ]/g, "Ï");
  };

  const copyToClipboard = () => {
    let text = document.getElementById("mimimi-text").textContent;
    navigator.clipboard.writeText(text);

    setCopySuccess("✅ ¡Texto copiado al portapapeles!");

    setTimeout(() => {
      setCopySuccess("");
    }, 2000);
  };

  return (
    <div className="text-container translated-text-container">
      <div className="textbox-header">
        <h2>MiMiMi</h2>
        <button className="copy-btn" onClick={copyToClipboard}>
          <CopyIcon />
        </button>
      </div>
      <hr className="hr-translated-text" />
      <textarea
        id="mimimi-text"
        className="text-box translated-text"
        type="text"
        name="translation"
        value={translateText(content)}
        disabled
        placeholder="Iscribi iquí piri tridicir"
      />
    </div>
  );
}

export default TextTranslated;
