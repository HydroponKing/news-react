import React, {useEffect, useState} from 'react';
import Skeleton from "../../Components/Skeleton/Skeleton.jsx";
import s from './Main.module.css'
import NewsBanner from "../../Components/NewsBanner/NewsBanner.jsx";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../Components/NewsList/NewsList.jsx";

const Main = () => {

    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchNews = async () => {
            try{
                setIsLoading(true)
                const response = await getNews()
                setNews(response.news)
                setIsLoading(false)
            }catch (error){
                console.log(error)
            }
        }
        fetchNews()
    }, []);

    return (
        <main className={s.main}>
            {news.length > 0 && !isLoading ? (
                <NewsBanner item={news[0]}/>
            ) : (
                <Skeleton type={"banner"} count={1} />
            )}

            {!isLoading ?
                <NewsList news={news}/>
                :
                <Skeleton type={"item"} count={10} /> }
        </main>
    );
};

export default Main;