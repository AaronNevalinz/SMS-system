import { Link, useNavigate } from "react-router-dom";
import GoBack from "../ui/GoBack";
import { useContext, useEffect, useState } from "react";
import Papa from 'papaparse';
import { AppContext } from "../context/AppContext";



export default function AddManually() {

  const navigate = useNavigate();

  const [input, setInput] = useState('');
  const {contacts, setContacts} = useContext(AppContext);
  // const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])

  const handleSumit = (e) => {  
    e.preventDefault();
    const parsedData = Papa.parse(input, {
      header: false,
      delimiter: ',',
      skipEmptyLines: true,
      trimHeaders: true,
    }).data;

    const formattedData = parsedData.map(([name, phone]) => {
      return {
        name: name.trim(),
        phone: phone.trim(),
      }
    });
    
    setContacts(formattedData);
    navigate('/create');
    
  }


  return (
    <div className="bg-background min-h-screen w-full">
      <nav className="text-textColor flex items-center bg-background justify-between px-24 border-b border-accent fixed w-full h-16">
          <Link to={'/'}>
            <h1 className="font-bold text-xl uppercase text-accent">Sms<span className="text-flamePea">Company</span></h1>
          </Link>
          <Link to={'/create'} className="  px-4 font-medium py-1 cursor-pointer bg-secondary rounded-full">Exit</Link>
      </nav>


      <main className="pt-24 w-1/2 mx-auto text-textColor space-y-4">
        <GoBack link="/create/add-contacts" text={'Go Back'} />
        <section>
          <div className="text-center">
            <h1 className="text-4xl">Copy and paste your contacts</h1>
            <p className="mt-4">
              Your contacts are the people who will make up your audience, and whom you’ll be sending emails to. 
              In this and the following steps, we’ll help you import your contact data and 
              set you up for success.
            </p>
          </div>

          <form className=" mt-8 space-y-6" action="">
              <textarea name="" onChange={(e)=>setInput(e.target.value)} className="w-full h-64 rounded-lg outline-none bg-accent px-4 py-2" id=""></textarea>
              <div>
                <Link onClick={handleSumit} to={'/create'} className="bg-flamePea px-8 py-2 rounded-full font-medium">Continue</Link>
              </div>
          </form>
          

        </section>
      </main>

    </div>
  )
}
