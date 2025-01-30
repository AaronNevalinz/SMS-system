import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateCompaign from "./pages/CreateCompaign";
import Home from "./pages/Home";
import AddContacts from "./pages/AddContacts";
import AddManually from "./pages/AddManually";
import Campaigns from "./pages/Campaigns";
import SignUp from "./Auth/SignUp";
import Login from "./Auth/Login";
import ImportContacts from "./pages/ImportContacts";
import GenerateReport from "./pages/GenerateReport";
import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import Layout from "./layout/Layout";

export default function App() {

  const {user} = useContext(AppContext);

  if(user){
    console.log(user);
  }
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={user?<Layout />:<Login />}>
          <Route path="/" element={user? <Home /> : <Login />} />
          <Route path="/campaigns" element={<Campaigns/>} />
        </Route>




        
        <Route path="/create" element={user ? <CreateCompaign /> : <Login />} />
        <Route path="/create/add-contacts" element={<AddContacts />} />
        <Route path="/create/add-contacts/add-manually" element={<AddManually />} />
        <Route path="/create/add-contacts/import-contacts" element={<ImportContacts />} />

        <Route path="*" element={<h1>Not Found</h1>} />
        <Route path="/404" element={<h1>Not Found</h1>} />

        
        <Route path="/ai.generatereports" element={<GenerateReport/>} />
        {/* Auth pages */}
        <Route path="/signup" element={user ? <Home /> : <SignUp/>} />
        <Route path="/login" element={user ? <Home /> :<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}
