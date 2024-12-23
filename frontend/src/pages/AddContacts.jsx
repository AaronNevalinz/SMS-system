import { Link } from "react-router-dom";
export default function AddContacts() {
  return (
    <div className="bg-background min-h-screen w-full">
      <nav className="text-textColor flex items-center bg-background justify-between px-24 border-b border-accent fixed w-full h-16">
          <Link to={'/'}>
            <h1 className="font-bold text-xl uppercase text-accent">Sms<span className="text-flamePea">Company</span></h1>
          </Link>
          <Link to={'/create'} className="  px-4 font-medium py-1 cursor-pointer bg-secondary rounded-full">Exit</Link>
      </nav>

      <main className="pt-24 w-1/2 mx-auto text-textColor">
        <section>
          <div className="text-center">
            <h1 className="text-4xl">How would you like to add contacts?</h1>
            <p className="mt-4">
              Your contacts are the people who will make up your audience, and whom you’ll be sending emails to. 
              In this and the following steps, we’ll help you import your contact data and 
              set you up for success.
            </p>
          </div>

          <div className="flex gap-10 mt-8">
            <div className="bg-accent flex-1 flex flex-col items-center justify-center py-8 px-4 rounded-lg mt-8 text-center">
              <h2 className="text-2xl">Add contacts manually</h2>
              <p className="mt-4">You can add contacts one by one by entering their information manually.</p>
              <Link to={'/create/add-contacts/add-manually'} className="bg-secondary px-4 py-2 rounded-full mt-4">Add manually</Link>
            </div>
            
            <div className="bg-accent flex-1 flex flex-col items-center justify-center py-8 px-4 rounded-lg mt-8 text-center">
              <h2 className="text-2xl">Import contacts</h2>
              <p className="mt-4">You can import contacts from a CSV file, or from another service like Gmail or Outlook.</p>
              <Link to={'/import-contacts'} className="bg-secondary px-4 py-2 rounded-full mt-4">Import contacts</Link>
            </div>
          </div>
          

        </section>
      </main>

    </div>
  )
}
