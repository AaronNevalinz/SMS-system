import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div className="bg-background min-h-screen w-full">
      <Navbar />
      <div className="flex px-24 pt-16">
        <Sidebar />
        <Main />
      </div>
    </div>
  )
}
