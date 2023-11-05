
import './App.css'
import BookMark from './Components/BookMark/BookMark'
import Header from './Components/Header/Header'
import Blogs from './Components/blogs/Blogs'

function App() {


  return (
    <>
      <Header></Header>
      <main className='flex mx-w-7xl mx-auto justify-around lg:mx-[20rem] my-[5rem] '>
        <Blogs ></Blogs>
        <BookMark></BookMark>
      </main>
    </>
  )
}

export default App
