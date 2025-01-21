import React, {useEffect, useState} from 'react';
import Skeleton from "../../Components/Skeleton/Skeleton.jsx";
import s from './Main.module.css'
import NewsBanner from "../../Components/NewsBanner/NewsBanner.jsx";
import {getCategories, getNews} from "../../api/apiNews.js";
import NewsList from "../../Components/NewsList/NewsList.jsx";
import Pagination from "../../Components/Pagination/Pagination.jsx";
import Categories from "../../Components/Categories/Categories.jsx";

const Main = () => {

    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState([])
    const [selectCategory, setSelectCategory] = useState("All")

    const totalPages = 10
    const pageSize = 10

    const fetchNews = async (currentPage) => {
        try{
            setIsLoading(true)
            const response = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectCategory === "All" ? null : selectCategory,
            })
            setNews(response.news)
            setIsLoading(false)
        }catch (error){
            console.log(error)
        }
    }

    const fetchCategories = async () => {
        try{
            const response = await getCategories()
            setCategories(['All', ...response.categories])
        }catch (error){
            console.log(error)
        }
    }


    useEffect(() => {
        fetchCategories()
    }, []);

    useEffect(() => {
        fetchNews(currentPage)
    }, [currentPage, selectCategory]);

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

            <Categories categories={categories} selectCategory={selectCategory} setSelectCategory={setSelectCategory}/>

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