const getStoredBook = () => {
    const storedBook = localStorage.getItem('book');
    if(storedBook){
        return JSON.parse(storedBook); 
    }
    return [];
}

const saveBook = id => {
    const storedBooks = getStoredBook()
    const exists = storedBooks.find(bookId => bookId === id )
    if(!exists){
        storedBooks.push(id)
        localStorage.setItem('book', JSON.stringify(storedBooks))
    }
}

export {getStoredBook, saveBook}