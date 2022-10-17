import "./App.css";
import Form from "./components/form/form";
import ChatHistory from "./components/chatHistory/chatHistory";
import NavBar from "./components/barraNavegacion/navBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path="/create" element={<Form></Form>} />
          <Route
            path="/history"
            element={
              <div className="ChatContainer overflow-y-scroll">
                <ChatHistory></ChatHistory>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
