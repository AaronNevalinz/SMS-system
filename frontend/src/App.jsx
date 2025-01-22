import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCompaign from "./pages/CreateCompaign";
import Home from "./pages/Home";
import AddContacts from "./pages/AddContacts";
import AddManually from "./pages/AddManually";
import Campaigns from "./pages/Campaigns";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import ImportContacts from "./pages/ImportContacts";

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<CreateCompaign />} />
        <Route path="/create/add-contacts" element={<AddContacts />} />
        <Route path="/create/add-contacts/add-manually" element={<AddManually />} />
        <Route path="/create/add-contacts/import-contacts" element={<ImportContacts />} />

        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/404" element={<h1>Not Found</h1>} />

        <Route path="/campaigns" element={<Campaigns/>} />

        {/* Auth pages */}
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}
