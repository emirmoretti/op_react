import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/container/Task_list';
import { Contact } from './models/contact.class';
import ContactComponent from './components/pure/ContactComponent';

function App() {
  
  const newContact = new Contact('emir', 'moretti', 'emir@moretti.com', false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* componente propio greeting.jsx */}
        {/*<Greeting name='Emir'></Greeting>*/}
        {/*<GreetingF name={'emir'}></GreetingF>*/}
        <TaskListComponent />
        <ContactComponent contact={newContact}/>
      </header>
    </div>
  );
}

export default App;
