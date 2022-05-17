import './App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { LoginPage, MemberPage, LandingPage } from './routes';

function App() {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
}

export default App;
