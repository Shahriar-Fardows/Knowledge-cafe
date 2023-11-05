
import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/blogs/Blogs'
import BookMarks from './Components/BookMarks/BookMarks'

function App() {
  
  const [ addBookMark, setAddBookMark ] = useState([])
  const addBookMarks = (blog)=> {
    const newAddBookMark = [...addBookMark , blog];
    setAddBookMark(newAddBookMark)
  }

  // const  handleRemove = (id) => {
  //   const newList = addBookMark.filter((item) => item.id !== id);

  //   setAddBookMark(newList);
  // }

  return (
    <>
      <Header></Header>
      <main className='flex mx-w-7xl mx-auto justify-around lg:mx-[20rem] my-[5rem] '>
        <Blogs addBookMarks={addBookMarks}  ></Blogs>
        <BookMarks addBookMark={addBookMark}  ></BookMarks>
      </main>
    </>
  )
}

export default App
