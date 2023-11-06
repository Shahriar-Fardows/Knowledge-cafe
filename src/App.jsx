/* eslint-disable no-undef */
/* eslint-disable no-import-assign */

import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'

function App() {
  
  const [ addBookMark, setAddBookMark ] = useState([])
  const [readingTime , setReadingTime] = useState(0)

  const addBookMarks = (blog)=> {
    const newAddBookMark = [...addBookMark , blog];
    setAddBookMark(newAddBookMark)
  }

  const readingTimes = (Time, id ) => {
    setReadingTime(readingTime + Time);
    const Books = addBookMark.filter(bookMark => bookMark.id !== id);
    setAddBookMark(Books)
 
  }

 

  return (
    <>
      <Header></Header>
      <main className='flex mx-w-7xl mx-auto justify-around lg:mx-[20rem] my-[5rem] '>
        <Blogs addBookMarks={addBookMarks} readingTimes={readingTimes}  ></Blogs>
        <BookMarks addBookMark={addBookMark} readingTime={readingTime}  ></BookMarks>
      </main>
    </>
  )
}

export default App
