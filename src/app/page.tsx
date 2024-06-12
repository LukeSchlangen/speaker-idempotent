"use client"

import { useState } from "react";
import { addMessage } from "./actions";

export default function Home() {
  const [text, setText] = useState("");

  const addNewMessage = () => {
    addMessage({ text });
    console.log({ text });
  }

  return (
    <main>
      <h1>Fireworks</h1>
      <h2>Gift</h2>
      <input 
        className="border border-black"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <p>{text}</p>
      <button
        className="border border-black"
        onClick={addNewMessage}
      >
        Click Me
      </button>
    </main>
  );
}
