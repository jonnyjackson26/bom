import React, { useState, useEffect, useContext } from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { Home } from './pages/_Home'
import { BookPage } from './pages/BookPage'
import { CharacterPage } from './pages/CharacterPage/CharacterPage.jsx'
import { CharactersPage } from './pages/CharactersPage.jsx'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import books from '../public/data/books'
import characters from '../public/data/characters.js'
import { ChapterPage } from './pages/ChapterPage/ChapterPage.jsx'
import NavBar from './components/NavBar'
let routerList = [];

//each books page
for (let i = 0; i < books.length; i++) {
  let pathElement = {};
  pathElement["path"] = "/" + books[i].urlName;
  pathElement["element"] = <BookPage book={books[i]} />
  routerList.push(pathElement);
}

//each chapters page
for (let i = 0; i < books.length; i++) {
  for (let j = 0; j < books[i].numOfChapters + 1; j++) {
    let pathElement = {};
    pathElement["path"] = "/" + books[i].urlName + "/" + j;
    pathElement["element"] = <ChapterPage book={books[i]} chapter={j} />
    routerList.push(pathElement);
  }
}

//for each character
for (let i = 0; i < characters.length; i++) {
  let pathElement = {};
  pathElement["path"] = "/characters/" + characters[i].id;
  pathElement["element"] = <CharacterPage character={characters[i]} />
  routerList.push(pathElement);
}
//for characters page
routerList.push({ path: "/characters", element: <CharactersPage /> });



const router = createHashRouter([
  {
    path: "/",
    element: <Home />,
  },
  ...routerList
])

export const Context = React.createContext();

function Main() {

  const [language, setLanguage] = useState('english');

  return (
    <Context.Provider value={[language, setLanguage]}>
      <RouterProvider router={router} />
    </Context.Provider>
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />
)
