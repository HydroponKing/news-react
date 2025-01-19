import React, {useEffect, useState} from 'react';
import Skeleton from "../../Components/Skeleton/Skeleton.jsx";
import s from './Main.module.css'
import NewsBanner from "../../Components/NewsBanner/NewsBanner.jsx";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../Components/NewsList/NewsList.jsx";
import Pagination from "../../Components/Pagination/Pagination.jsx";

const Main = () => {

    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = 10
    const pageSize = 10

    const fetchNews = async (currentPage) => {
        try{
            setIsLoading(true)
            const response = await getNews(currentPage, totalPages)
            setNews(response.news)
            setIsLoading(false)
        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
            setCurrentPage(pageNumber)
    }

    return (
        <main className={s.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]}/>
            ) : (
                <Skeleton type={"banner"} count={1} />
            )}

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                totalPages={totalPages}
                currentPage={currentPage}
            />

            {!isLoading ?
                <NewsList news={news}/>
                :
                <Skeleton type={"item"} count={5} /> }

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                totalPages={totalPages}
                currentPage={currentPage}
            />
        </main>
    );
};

export default Main;