import PropTypes from 'prop-types'

const BookMark = ({ bookMark }) => {
    const { title } = bookMark;
    return (
        <div className='border text-center p-3 m-3 bg-green-200 '>
            <h1>{title}</h1>
        </div>
    )
}

BookMark.propTypes = {
    bookMark: PropTypes.array
}

export default BookMark
