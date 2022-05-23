import {Route, Routes} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import AllMeetups from './Pages/AllMeetups';
import Favourites from './Pages/Favourites';
import NewMeetup from './Pages/NewMeetup';

function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path='/' element={<AllMeetups/>} />
        <Route path='new-meetup' element={<NewMeetup/>} />
        <Route path='favourites' element={<Favourites/>} />
      </Routes>
    </Layout>
  );
}

export default App;
