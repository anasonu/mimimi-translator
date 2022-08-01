import React from "react";

function TextTranslated({ content }) {
  const translateText = (text) => {
    return text
      .replaceAll(/[aeou]/g, "i")
      .replaceAll(/[AEOU]/g, "I")
      .replaceAll(/[áéóú]/g, "í")
      .replaceAll(/[ÁÉÓÚ]/g, "Í")
      .replaceAll(/[äëöü]/g, "ï")
      .replaceAll(/[ÄËÖÜ]/g, "Ï");
  };

  return (
    <div className="text-container translated-text-container">
      <h2>MiMiMi</h2>
      <hr className="hr-translated-text" />
      <textarea
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
