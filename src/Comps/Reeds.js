import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

function Reeds(props) {
  const {boks,shelfUpdater} = props;
  // using book BookShelf component many time with deffrient props
  return (
    <div>
        <div className="list-books">
            <Navbar />
          <div className="list-books-content">
            <div>
              <BookShelf shelfTitle={'Currently Reading'} boks={boks} cat={"currentlyReading"} shelfUpdater={shelfUpdater}/>
              <BookShelf shelfTitle={'Want to read'} boks={boks} cat={"wantToRead"} shelfUpdater={shelfUpdater}/>
              <BookShelf shelfTitle={'Read'} boks={boks} cat={"read"} shelfUpdater={shelfUpdater}/>
            </div>
          </div>
          <div className="open-search">
            <Link className="opn-search" to={'/search'}>Logo</Link>
          </div>
        </div>
    </div>
  )
}

export default Reeds
