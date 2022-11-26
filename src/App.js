import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";
import * as BooksApi from "./BooksAPI";
import "./App.css";
import Reeds from './Comps/Reeds'
import Search from "./Comps/Search";


function App() {
  const [boks, setBoks] = useState([]);
//  get all books from api
  useEffect(() => {
    BooksApi.getAll().then((res) => {
      setBoks(res);
      console.log(res);
    });
  }, []);
  // update shelf state 
  const shelfUpdater = (book, shelf) => {
    book.shelf = shelf;
    setBoks((allbooks) => {
      return allbooks.filter(
        (bok) => bok.id !== book.id
        ).concat([book]);
    });
    BooksApi.update(book, shelf);
  };
  return (
    <div className="app">
        <Routes>
          <Route path='/search' element={<Search boks={boks} shelfUpdater={shelfUpdater} />}/>
          <Route path='/' exact element={<Reeds boks={boks} shelfUpdater={shelfUpdater}/>}/>
        </Routes>
    </div>
  );
}

export default App;
