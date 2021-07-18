import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteToMap) => (
        <Note
          key={noteToMap.key}
          title={noteToMap.title}
          content={noteToMap.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
