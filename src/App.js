import Form from "./pages/Form";

import Categories from "./pages/Categories";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewSource from "./pages/NewSource";
import Register from "./pages/Register";
import News from "./pages/News";

function App() {
  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/news" element={<News />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/newsource" element={<NewSource />} />
          <Route path="/register" element={<Register />} />
          
        </Routes>
      </BrowserRouter>


  );
}
export default App;
