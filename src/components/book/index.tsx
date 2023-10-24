type BookProps = {
    livro: {
        title: string,
        author: string,
        year: number,
        genre: string,
        image: string,
        isFavorite: boolean,
    }
}

function Book({livro}: BookProps) {
    return (
        <>
            <h1>Book</h1>
            <h2>{livro.title}</h2>
            <h3>{livro.author}</h3>
            <img src={livro.image} alt="" />
            {livro.isFavorite ? <span>✅</span> : <span>X</span>}
        </>
    )
}

export default Book;