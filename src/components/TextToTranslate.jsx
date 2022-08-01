import React from "react";
import TrashIcon from "./TrashIcon";

function TextToTranslate({ content, setContent }) {
  const handleContentChange = (e) => setContent(e.target.value);
  const handleDelete = () => {
    setContent("")
  }

  return (
    <div className="translator-container text-container">
      <div className="textbox-header">
        <h2>Español</h2>
        <button className="delete-btn" onClick={handleDelete}>
          <TrashIcon />
        </button>
      </div>
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
  );
}

export default TextToTranslate;
