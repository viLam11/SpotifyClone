import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/auth" element={<div>Auth page</div>} />
      </Routes>
    </>
  )
}

export default App
