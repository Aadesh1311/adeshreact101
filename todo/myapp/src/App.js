import { Todos } from './components/Todos';
import './App.css';


let todos=[
  {id:1,value:"react",completed:true},
  {id:2,value:"vdom",completed:true},
  {id:3,value:"babel",completed:false}
];

function App() {
  return (
    <div className="App">
      <Todos todos={todos}/>
    </div>
  );
}

export default App;
