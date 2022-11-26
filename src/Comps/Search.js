import React from 'react';
import * as BooksApi from "../BooksAPI";
import "../App.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DebounceInput from "react-debounce-input";
import Boook from './Boook';
function Search(props) {  
  const {boks,shelfUpdater} = props;
  const [srchResults, setSrchResults] = useState([]);
  // take the value from input field and validate it with api data 
  const Results = (eve) => {
    const qry = eve.target.value;
    if (qry.length === 0) {
      setSrchResults([]);
      return;
    }
    // using api search funcion 
    BooksApi.search(qry,30).then((respose) => {
      if (!respose || respose.error) {
        setSrchResults([]);
        return;
      }
      
      const totalBoks = respose.map((bok) => {
        const alreadyToken = boks.find((Bok) => Bok.id === bok.id);
        bok.shelf = alreadyToken ? alreadyToken.shelf : "none";
        return bok;
      });

      setSrchResults(totalBoks);
    });
  };
  return ( 
      <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to={'/'}>Close</Link> 
                <div className="search-books-input-wrapper">
                <DebounceInput minLength={2} onChange={Results} debounceTimeout={150} element="input" type="text" placeholder="Search by title or author" />
                </div>
           </div>
             <div className="search-books-results">
                    <ol className="books-grid">
                    {srchResults.map((bok) => {
                      return (
                        <div key={bok.id}>
                            <Boook bok={bok} shelfUpdater={shelfUpdater}/>
                        </div>
                      );
                    })}
                    </ol>
            </div>
      </div>

  )
}

export default Search;
