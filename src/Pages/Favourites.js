import { useContext } from "react"
import MeetupList from "../Components/Meetups/MeetupList";
import FavouritesContext from "../store/favourite-context"


function Favourites() {
  const favouriteCtx = useContext(FavouritesContext);

  let content;

  if (favouriteCtx.totalFavourites === 0){
    content = <p>There is no favourite yet. Start adding some?</p>
  }else{
    content = <MeetupList meetups={favouriteCtx.favourites} />
  }

  return (
    <section>
      <h1>My Favourites</h1>
      {content}
    </section>
  )
}

export default Favourites