import React, { useState, useEffect } from 'react';
import BookHeader from '../components/BookHeader';
import BookDescription from '../components/BookDescription';
import axios from 'axios';
import {useLocation, useParams} from "react-router-dom";
import CreateEvent from "../components/CreateEvent";
import CardsPanel from "../components/CardsPanel";
import {Box} from "@mui/material";


const Book = () => {
    const [book, setBook] = useState({});
    let { bookId } = useParams();
    console.log(bookId);
    // const [bookId, setBookId] = useState(location.pathname.substring(7)); //we remove '/books/' from the path


    useEffect(() => {
        axios.get('http://localhost:8080/api/books/' + bookId)
            .then(response => {
                setBook(response.data);
                }
            )
            .catch(error => console.log(error));
    }, [bookId]);

    return (
        <Box sx={{mt: 5}}>
            <BookHeader book={book} />
            <BookDescription description={book.description} />
            <CreateEvent />
        </Box>
    );
};

export default Book;