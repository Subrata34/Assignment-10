
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Switch,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
    <Switch>
      <Route>
        <Header></Header>
      </Route>
    </Switch>
    
    </BrowserRouter>
    </div>
  );
}

export default App;
