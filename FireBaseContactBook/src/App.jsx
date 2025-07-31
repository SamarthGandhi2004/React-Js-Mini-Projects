import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Input } from "@/components/ui/input"
import Navbar from './components/Navbar'
import Search from './components/Search'
import ContactCard from './components/ContactCard'
import { collection, getDocs,onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from './DataBase/DataBase'

function App() {



  const [contacts, setContacts] = useState([]);
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[searchTerm,setSearchTerm]=useState('');


  useEffect(() => {
    const getContact = async () => {
      try {
        // const contactRef = collection(db, "contacts");
        // const contactSnapshot = await getDocs(contactRef);
        // const contactList = contactSnapshot.docs.map((doc) => {
        //   return {
        //     id: doc.id,
        //     ...doc.data()
        //   }
        // })
        // setContacts(contactList);

           const contactRef = collection(db, "contacts");
  const q = query(contactRef, orderBy("createdAt", "desc"));
  const unsubscribe = onSnapshot(q, (snapshot) => {
    setContacts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
   
  });
  
//
      }
      catch (error) {
        console.log(error)
      }

    }
    getContact();


  }, [])





  return (
    <>
      <div className=' max-w-[500px] m-auto p-2.5  px-3 mt-5 rounded-3xl border border-white min-h-[800px]'>
        <Navbar />
        <Search setName={setName} 
        setEmail={setEmail}
        name={name}
        email={email}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        />

       {
         searchTerm
    ? (
        contacts
          .filter((contact) =>
            contact.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            contact.email.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((contact) => (
            <ContactCard
              key={contact.id}
              contact={contact}
            />
          ))
      )
    : contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          contact={contact}
        />
      ))
       }
      
      </div>
    </>
  )
}

export default App
