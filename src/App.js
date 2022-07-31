import { useState } from "react";
import "./App.css";

function App() {
  const [content, setContent] = useState("");

  const handleContentChange = (e) => setContent(e.target.value);
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
    <div className="App">
      <section className="header">
        <h1>Traductor MiMiMi</h1>
      </section>
      <div className="translator">
        <div className="translator-container text-container">
          <h2>Español</h2>
          <hr className="hr-translator" />
          <textarea
            className="text-to-translate text-box"
            type="text"
            name="content"
            onChange={handleContentChange}
            value={content}
            placeholder="Escribe aquí para traducir"
          />
        </div>
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
      </div>
    </div>
  );
}

export default App;
