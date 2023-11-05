
import PropTypes from 'prop-types'
import BookMark from '../BookMark/BookMark'


const BookMarks = ({ addBookMark }) => {
    return (
        <div className="w-1/3 h-2/3 border  ml-[5rem] bg-[#e5ebe9]">

            <h1 className='text-center m-5 text-2xl'>Book Mark : {addBookMark.length}</h1><hr />
            {
                addBookMark.map(bookMark =><BookMark
                    key={BookMarks.id}
                    bookMark={bookMark}
                ></BookMark>)
            }

        </div>
    )
}

BookMarks.propTypes = {
    addBookMark: PropTypes.array
}

export default BookMarks
