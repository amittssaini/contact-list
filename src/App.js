import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";
export const config ={"endpoint":"http://localhost:8082/api/contact"}
function App() {
  return (
    <div>
     
       <ContactList/>
    </div>
  );
}

export default App;
