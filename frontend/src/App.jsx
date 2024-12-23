import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCompaign from "./pages/CreateCompaign";
import Home from "./pages/Home";
import AddContacts from "./pages/AddContacts";
import AddManually from "./pages/AddManually";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCompaign />} />
        <Route path="/create/add-contacts" element={<AddContacts />} />
        <Route path="/create/add-contacts/add-manually" element={<AddManually />} />
      </Routes>
    </BrowserRouter>
  )
}
