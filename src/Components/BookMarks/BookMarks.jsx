import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark'


const BookMarks = ({ addBookMark, readingTime }) => {
    return (

        <div className='w-1/3 h-2/3'>
            <div className=" text-center ml-[5rem] p-5 text-2xl bg-emerald-200 ">
                <h1>Reading Time: {readingTime}</h1>
            </div>
            <div className=" border  ml-[5rem]  bg-[#e5ebe9]">

                <h1 className='text-center m-5 text-2xl'>Book Mark : {addBookMark.length}</h1><hr />
                {
                    addBookMark.map(bookMark => <BookMark
                        key={BookMarks.id}
                        bookMark={bookMark}

                    ></BookMark>)
                }

            </div>
        </div>
    )
}

BookMarks.propTypes = {
    addBookMark: PropTypes.array,
    readingTime: PropTypes.number
}

export default BookMarks
