import React from 'react';
function Boook(props) {
    const {bok,shelfUpdater} = props;
    // update shelf with new books
    const updatMyShelfs = (even) => {
        const shelf = even.target.value;
        shelfUpdater(bok, shelf);
      };
    //   image (if not found)
      let img = bok.imageLinks
      ? bok.imageLinks.thumbnail
      : "https://books.google.com/googlebooks/images/no_cover_thumb.gif";

  return (
    <div>
         <div className="book">
                <div className="book-top">
                    <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 193,
                        backgroundImage: 
                        `url("${img}")`,
                    }}
                    ></div>
                    <div className="book-shelf-changer">
                    <select onChange={updatMyShelfs} value={bok.shelf}>
                        <option value="none" disabled>
                        Move to...
                        </option>
                        <option value="currentlyReading">
                        Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                    </div>
                </div>
                <div className="book-title">{bok.title}</div>
                <div className="book-authors">{bok.authors ? bok.authors[0] : "Auther name not found"}</div>
         </div>
    </div>
  )
}

export default Boook

