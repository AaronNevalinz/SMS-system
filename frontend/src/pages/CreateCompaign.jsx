import { IoCheckmarkCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import GoBack from "../ui/GoBack";
import { AppContext } from "../context/AppContext";
import { useContext, useState } from "react";
import { logo } from "../assets";
export default function CreateCompaign() {
  const navigate = useNavigate();

  const {contacts,setContacts, campaign, setCampaign} = useContext(AppContext);

  const [errors, setErrors] = useState({});

  
  


  // const handleSend = async (e) => {
  //   e.preventDefault();

  //   console.log(contacts);
    
  //   console.log('Sending message', campaign.message);
    
  //   setCampaign({...campaign, status:"Sent"})
    
  //   const response = await fetch('/api/campaign', {
  //     method: 'POST',
  //     body: JSON.stringify(campaign)
  //   });

  //   const data = await response.json();
    
  //   console.log(data);
    
  //   setContacts([]);

  //   if(data.errors){
  //     setErrors(data.errors)
  //   } else {
      
  //     const res = await fetch('/api/africastalking', {
  //       method: 'POST',
  //       body: JSON.stringify({
  //         message: campaign.message,
  //         to: contacts.map(contact => contact.phone)
  //       })
  //     });

  //     const data = await res.json();

  //     console.log(data);

  //     setCampaign({
  //       title: '',
  //       message: '',
  //       to: []
  //     })
      
  //     navigate('/');
  //   }
  // }


  const handleSend = async (e) => {
    e.preventDefault();

    console.log(contacts);

    console.log('Sending message', campaign.message);

    setCampaign({ ...campaign, status: "Sent" });

    // const response = await fetch('/api/campaign', {
    //   method: 'POST',
    //   body: JSON.stringify(campaign),
    // });

    // const data = await response.json();

    // console.log(data);

    // setContacts([]);

    // if (data.errors) {
    //   setErrors(data.errors);
    // } else {
      const res = await fetch('/api/africastalking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: campaign.title,
          message: campaign.message,
          to: contacts.map(contact => contact.phone)
        }),
      });

      const smsData = await res.json();

      console.log(smsData);

      if (smsData.errors) {
      setErrors(smsData.errors);
      } else {
        setCampaign({
          title: '',
          message: '',
          to: []
        });
        setContacts([]);

        navigate('/');
      }
  }



  return (
    <div className="bg-background min-h-screen w-full">
      <nav className="text-textColor flex items-center bg-background justify-between px-24 border-b border-accent fixed w-full h-16">
           <Link to={'/'}>
              <img src={logo} alt="logo" className="w-48" />
            </Link>
          <div className="w-10 h-10 bg-white rounded-full"></div>
      </nav>

      <main className="pt-24 w-1/2 mx-auto text-white space-y-4">
        <GoBack link="/" text='Cancel' className='text-right'/>
        
        <section>
          <form action="" onSubmit={handleSend}>
            <div className="my-8">
              <input 
                type="text" 
                placeholder="Enter Title for this Campaign" 
                className="bg-transparent border-b border-accent pb-2 outline-none capitalize text-2xl font-medium w-full placeholder:text-white"  
                name="title" 
                value={campaign.title}
                onChange={(e)=>setCampaign({...campaign, title:e.target.value})}
                id="" 
              />
              {errors.title && <p className="text-red-500">{errors.title[0]}</p>}
              {/* <p className="text-secondary text-sm cursor-pointer font-semibold mt-1">Edit</p> */}
            </div>

            { contacts.length > 0 ?
              <div className="border border-accent rounded-lg px-4 py-2 space-y-4">
                <p className="text-xl font-bold">Campaign Settings</p>
                <p>This Campaign requires {contacts.length} connects</p>
                <p>You will have 240 connects left after sending this...</p>
              </div> : 
              null
            }

            
            <div className="border border-gray-500 rounded-lg mt-8">

              <div className="flex justify-between items-center px-8 border-b border-gray-500 py-6">
                <div className="flex gap-5 justify-between">
                  <IoCheckmarkCircle className="text-2xl text-white col-span-1" />
                  <div>
                    <p className="font-semibold text-lg">To:</p>
                    {
                      contacts.length > 0 ? <p>{contacts.map(contact => contact.name).join(', ')}</p> : <p className="text-white font-bold">Who are you sending this sms campaign to?</p>
                    }
                    {errors.audience === null && contacts.length === 0 ? <p className="text-red-500">{errors.audience[0]}</p> : null}
                  </div>
                </div>
                <div>
                  <Link to={'/create/add-contacts'} state={{campaign}} className="border border-gray-500 px-4 py-2 rounded-full text-white text-sm font-bold">Add Recipients</Link>
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

              
                <div className="flex justify-between items-center px-8  py-6">
                  <div className="flex gap-5 w-full">
                    <IoCheckmarkCircle className="text-2xl text-white col-span-1" />
                    <div className="w-full">
                      <p className="font-semibold">Message:</p>
                      <textarea name="" id="" onChange={(e)=>setCampaign({...campaign, message:e.target.value})} className="bg-transparent w-full h-24 border outline-none border-gray-500 mt-2 rounded-md px-4 py-1"></textarea>
                      {errors.message && <p className="text-red-500">{errors.message[0]}</p>}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center pb-8">
                  <button className="bg-[#111999] px-4 font-bold py-2 text-white text-sm rounded-md">Send</button>
                </div>
              



            </div>
          </form>
        </section>
      </main>

    </div>
  )
}
