import React from "react";
import Header from "./components/Header";
import Chat from "./components/Chat";
import SendMessage from "./components/Chat/SendMessage";

function App() {
  return (
    <div className="App">
      <Header />
      <Chat />
      <SendMessage />
    </div>
  );
}

export default App;
