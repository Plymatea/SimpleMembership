import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { LoginPage, MemberPage, LandingPage, EditMemberPage } from './routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route 
          path='/' 
          element={<LandingPage />} 
        />
        <Route 
          exact={true} 
          path='/login' 
          element={ <LoginPage /> } 
        />
        <Route 
          path='/member' 
          element={ <MemberPage /> } 
        />  
        <Route 
          path='/editmemberform' 
          element={ <EditMemberPage /> } 
        />       
      </Switch>
    </Router>
  );
}

export default App;
 