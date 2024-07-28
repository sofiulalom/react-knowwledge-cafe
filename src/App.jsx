import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compunent/Header/Header'
import Bllogs from './compunent/Blogs/Bllogs'
import Bookmarks from './compunent/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])
   const [readingtime, setReadingtime]= useState(0)

  const handleAdToBookMarks = (blog) => {
    console.log('add the book')
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark)
  }

  const handleAddToReadingTime = time => {
    console.log('handle Add To Reading Time', time)
    const newReadingTime = readingtime + time;
    setReadingtime(newReadingTime)
  }

  return (
    <>

      <Header></Header>
      <div className='md:flex max-w-7xl mx-auto'>
        <Bllogs handleAdToBookMarks={handleAdToBookMarks}
         handleAddToReadingTime={handleAddToReadingTime}
        ></Bllogs>
        <Bookmarks
          bookmarks={bookmarks}
          readingtime={readingtime}
        ></Bookmarks>
      </div>


    </>
  )
}

export default App
