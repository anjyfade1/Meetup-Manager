import {Route, Routes} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import AllMeetups from './Pages/AllMeetups';
import Favourites from './Pages/Favourites';
import NewMeetup from './Pages/NewMeetup';

function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path='/Meetup-Manager' element={<AllMeetups/>} />
        <Route path='/Meetup-Manager/new-meetup' element={<NewMeetup/>} />
        <Route path='/Meetup-Manager/favourites' element={<Favourites/>} />
      </Routes>
    </Layout>
  );
}

export default App;
