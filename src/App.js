import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import GreetingF from './components/pure/GreetingF';
import TaskListComponent from './components/container/Task_list';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* componente propio greeting.jsx */}
        {/*<Greeting name='Emir'></Greeting>*/}
        {/*<GreetingF name={'emir'}></GreetingF>*/}
        <TaskListComponent />
      </header>
    </div>
  );
}

export default App;
