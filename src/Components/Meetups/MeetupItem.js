import { useContext } from 'react';
import FavouritesContext from '../../store/favourite-context';
import Card from '../Ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
    const favouriteCtx = useContext(FavouritesContext);
    const itemIsFavourite = favouriteCtx.itemIsFavourite(props.id);

    function toggleFavouriteStatusHandler(){
        if (itemIsFavourite) {
            favouriteCtx.removeFavourite(props.id);
        }else{
            favouriteCtx.addFavourite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address
            })
        }
    }

  return (
    <li className={classes.item}>
        <Card>
            <div className={classes.images}>
                <img src={props.meetup.image} alt="urlImage" />
            </div>
            <div className={classes.content}>
                <h3>{props.meetup.title}</h3>
                <address>{props.meetup.address}</address>
                <p>{props.meetup.description}</p>
            </div>
            <div className={classes.actions}>
                <button onClick={toggleFavouriteStatusHandler} >
                    {itemIsFavourite ? 'Remove from Favourite' : 'To Favourite' }
                </button>
            </div>

        </Card>
    </li>
  )
}

export default MeetupItem