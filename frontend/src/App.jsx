import { useState } from "react"

function App() {
  const [formData, setFormData] = useState({
    to: "",
    message: "",
    from:"16638"
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/africastalking", {
      method: "POST",
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    console.log(data);
  }


  return (
    <div className="bg-gray-200 max-w-[1024px] mx-auto py-5 px-5 rounded-lg shadow-lg">
      <form action="" onSubmit={handleSubmit} className="space-y-5 flex flex-col">
        <input type="text" name="message" id="name" placeholder="Name" className="bg-transparent border border-slate-900 py-2 px-2 rounded-md" onChange={handleChange} />
        <input type="text" name="to" id="email" placeholder="number" className="bg-transparent border border-slate-900 py-2 px-2 rounded-md" onChange={handleChange} />
        <button className="bg-orange-700 py-2 px-2 rounded-md text-white">Submit</button>
      </form>
    </div>
  )
}

export default App
