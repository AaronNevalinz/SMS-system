import { IoCheckmarkCircle } from "react-icons/io5";
import { Link } from "react-router-dom";
import GoBack from "../ui/GoBack";
import { AppContext } from "../context/AppContext";
import { useContext, useState } from "react";
export default function CreateCompaign() {
  const {contacts,setContacts} = useContext(AppContext);
  const [message, setMessage] = useState('');


  const handleSend = async (e) => {
    e.preventDefault();
    console.log(contacts);
    
    console.log('Sending message', message);
    const res = await fetch('/api/africastalking', {
      method: 'POST',
      body: JSON.stringify({
        message,
        to: contacts.map(contact => contact.phone)
      })
    });

    const data = await res.json();
    console.log(data);
    setContacts([]);
    setMessage('');
    
  }



  return (
    <div className="bg-background min-h-screen w-full">
      <nav className="text-textColor flex items-center bg-background justify-between px-24 border-b border-accent fixed w-full h-16">
          <Link to={'/'}>
            <h1 className="font-bold text-xl uppercase text-accent">Sms<span className="text-flamePea">Company</span></h1>
          </Link>
          <div className="w-10 h-10 bg-secondary rounded-full"></div>
      </nav>

      <main className="pt-24 w-1/2 mx-auto text-textColor space-y-4">
        <GoBack link="/" text='Go Back to Home' className='text-right'/>
        <section>
          <div>
            <input type="text" placeholder="Enter Title for this Campaign" className="bg-transparent border-b border-gray-600 pb-2 outline-none capitalize text-2xl font-medium"  name="" id="" />
            <p className="text-secondary text-sm cursor-pointer font-semibold mt-1">Edit</p>
          </div>
          
          <div className="border border-secondary rounded-lg mt-8">

            <div className="flex justify-between items-center px-8 border-b border-secondary py-6">
              <div className="flex gap-5 justify-between">
                <IoCheckmarkCircle className="text-2xl text-flamePea col-span-1" />
                <div>
                  <p className="font-medium">To:</p>
                  {
                    contacts.length > 0 ? <p>{contacts.map(contact => contact.name).join(', ')}</p> : <p className="text-secondary text-sm font-medium">Who are you sending this sms campaign to?</p>
                  }
                </div>
              </div>
              <div>
                <Link to={'/create/add-contacts'} className="border border-flamePea px-4 py-2 rounded-full text-flamePea text-sm font-medium">Add Recipients</Link>
              </div>
            </div>

            {/* <div className="flex justify-between items-center px-8 border-b border-secondary py-6">
              <div className="flex gap-5 justify-between">
                <IoCheckmarkCircle className="text-2xl text-flamePea col-span-1" />
                <div>
                  <p className="font-medium">From:</p>
                  <input type="text" placeholder="Sender-id" className="bg-transparent text-sm border outline-none border-secondary mt-2 rounded-md px-4 py-2" />
                  <p className="italic text-xs mt-2">We recommend using something subscribers will instantly recognize, 
                  like your company name.</p>
                </div>
              </div>
              <div>
                <p className="border border-flamePea px-4 py-2 rounded-full text-flamePea text-sm font-medium">Edit Number</p>
              </div>
            </div> */}

            <form action="" onSubmit={handleSend}>
              <div className="flex justify-between items-center px-8  py-6">
                <div className="flex gap-5 w-full">
                  <IoCheckmarkCircle className="text-2xl text-flamePea col-span-1" />
                  <div className="w-full">
                    <p className="font-medium">Message:</p>
                    <textarea name="" id="" onChange={(e)=>setMessage(e.target.value)} className="bg-transparent w-full h-24 border outline-none border-secondary mt-2 rounded-md px-4 py-1"></textarea>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pb-8">
                <button className="bg-flamePea px-8 font-bold py-2 text-primary rounded-full">Send</button>
              </div>
            </form>
          </div>

        </section>
      </main>

    </div>
  )
}
