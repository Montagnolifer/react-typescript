type BooksProps = {
    Livros: {
        title: string;
        author: string;
        year: number;
        genre: string;
        image: string;
    }[]
}

function Books({ Livros }: BooksProps) {
    return(
        <>
            {Livros.map((e,i) => ( 
                <div className="col-md-4">
                    <h1>{e.title} {i}</h1>
                    <h2>{e.author}</h2>
                    <p>{e.year}</p>
                    <p>{e.genre}</p>
                    <img className="img-fluid" src={e.image} alt="" />
                </div>
            ) )}
        </>
    );
}

export default Books