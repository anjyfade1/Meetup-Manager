import {Link} from 'react-router-dom';
import { useContext } from 'react';
import FavouritesContext from '../../store/favourite-context';
import classes from './MainNavigation.module.css'; 

function MainNavigation() {

    const favouriteCtx = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
        <div className={classes.logo}>Meetups</div>
        <nav>
            <ul>
                <li>
                    <Link to='/Meetup-Manager'>All Meetups</Link>
                </li>
                <li>
                    <Link to='/Meetup-Manager/new-meetup'>Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/Meetup-Manager/favourites'>
                        My Favourites
                        <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation