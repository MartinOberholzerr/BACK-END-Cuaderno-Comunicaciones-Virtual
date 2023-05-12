import { BrowserRouter, Routes, Route } from "react-router-dom";
import 

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes path="/" element={<inicio></inicio>}></Routes>
        <Route path="/persona"></Route>
      </BrowserRouter>
    </div>
  )
}


export default App;
