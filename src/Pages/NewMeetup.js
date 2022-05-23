import {useNavigate} from 'react-router-dom';
import NewMeetupForm from "../Components/Meetups/NewMeetupForm"


function NewMeetup() {

    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://meetup-project-6fe59-default-rtdb.firebaseio.com/meetups.json', 
        {
            method:'POST',
            body:JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        ).then(() => {
            navigate('/')
        });

    }

  return (
    <section>
        <h1>New Meetup</h1>
        <NewMeetupForm  onAddMeetup={addMeetupHandler} />
    </section>
  )
}

export default NewMeetup