import { Link, useNavigate } from "react-router-dom";
import GoBack from "../ui/GoBack";
import { useContext, useState } from "react";
import Papa from 'papaparse';
import { AiOutlineUpload } from 'react-icons/ai';
import { AppContext } from "../context/AppContext";
import { logo } from "../assets";



export default function ImportContacts() {

    const navigate = useNavigate();

    const {contacts, setContacts} = useContext(AppContext);
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        if (e.target.files.length > 0) {
          setFile(e.target.files[0]);  // Get the uploaded file object
        }
    };

  const handleSumit = (e) => {  
    e.preventDefault();

    if(file){
        
        Papa.parse(file, {
            complete: (results) => {

                const parsedData = results.data;

                const formattedData = parsedData.map(({Name, Number}) => {
                    return {
                      name: Name.trim(),
                      phone: Number.trim(),
                    }
                  });
                
                  setContacts(formattedData);
                  console.log(formattedData);
                  
                  console.log(contacts);
                  
                  navigate('/create');
            },
            delimiter: ',',  
            header:true,
            skipEmptyLines:true,  
            error: (error) => {
                console.log('error', error);
            },
        })

       
        
    }
    
  }


  return (
    <div className="bg-background min-h-screen w-full font-hanken">
      <nav className="text-white flex items-center bg-background justify-between px-24 border-b border-accent fixed w-full h-16">
           <Link to={'/'}>
                <img src={logo} alt="logo" className="w-48" />
            </Link>
            <Link to={'/create'} className="  px-4 font-medium py-1 cursor-pointer text-sm bg-secondary rounded-md">Exit</Link>
      </nav>


      <main className="pt-24 w-1/2 mx-auto text-white space-y-4">
        <GoBack link="/create/add-contacts" text={'Go Back'} />
        <section>
          <div className="text-center">
            <h1 className="text-3xl font-bold">Copy and paste your contacts</h1>
            <p className="mt-4 text-sm font-semibold">
              Your contacts are the people who will make up your audience, and whom you’ll be sending emails to. 
              In this and the following steps, we’ll help you import your contact data and 
              set you up for success.
            </p>
          </div>

          <form className=" mt-8 space-y-6" action="" onSubmit={handleSumit}>
              <div className="relative w-full bg-accent h-56  rounded-md flex items-center justify-center">
                <input 
                    type="file" 
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" 
                    onChange={handleFileChange}
                />
                <AiOutlineUpload className="text-white text-4xl" />
                <p className="ml-4 font-semibold text-sm text-white">{file ? file.name : 'Browse a file to upload'}</p>
            </div>
              <div>
                <button type="submit" className="bg-secondary px-4 py-2 rounded-md font-medium">Continue</button>
              </div>
          </form>
          

        </section>
      </main>

    </div>
  )
}
