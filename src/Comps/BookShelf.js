import React from 'react';
import Boook from './Boook';


function BookShelf(props) {
    const {shelfTitle,boks,cat,shelfUpdater} = props;
    const shelfCategory = boks.filter(( bok ) => bok.shelf === cat );
  return (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">

            {shelfCategory.map((bok) => {
                return (
                    <div key={bok.id}>
                        <Boook bok={bok} shelfUpdater={shelfUpdater}/>
                    </div>
                )
            })}
            {/* <Boook /> */}
            </ol>
        </div>
        </div>
         )
};

export default BookShelf;
