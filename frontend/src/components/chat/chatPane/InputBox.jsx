import React, { useState } from "react";
import axios from "axios";
import MessageBox from "./MessageBox.jsx";

function InputBox(props) {
  const [query, setQuery] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    if (query) {
      // Add user message immediately
      props.setMessages((prev) => [
        ...prev,
        <MessageBox
          content={query}
          bot={false}
          key={Math.floor(Math.random() * 10000)}
        />,
      ]);

      // Clear input
      setQuery("");

      // Correct Axios call
      axios
        .post("http://localhost:8081/query", { query })
        .then((res) => res.data)
        .then((res) => {
          console.log("Response:", res);
          if (res && res.output) {
            props.setMessages((prev) => [
              ...prev,
              <MessageBox
                content={res.output}
                bot={true}
                key={Math.floor(Math.random() * 10000)}
              />,
            ]);
          }
        })
        .catch((err) => {
          console.error("Axios error:", err);
        });
    }
  }

  return (
    <div className="InputBoxContainer">
      <form className="InputForm" onSubmit={onSubmit}>
        <input
          style={{ color: "black" }}
          type="text"
          placeholder="Ask your query..."
          className="InputBox"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          style={{
            backgroundColor: "rgba(0,0,0,0)",
            border: "none",
            height: "26px",
            marginRight: "5px",
          }}
        >
          <img src="/send.png" height={26} />
        </button>
      </form>
    </div>
  );
}

export default InputBox;
