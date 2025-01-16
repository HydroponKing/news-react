import React, {useEffect, useState} from 'react';
import s from './Main.module.css'
import NewsBanner from "../../Components/NewsBanner/NewsBanner.jsx";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../../Components/NewsList/NewsList.jsx";

const Main = () => {

    const [news, setNews] = useState([])

    useEffect(() => {
        const fetchNews = async () => {
            try{
                const response = await getNews()
                setNews(response.news)
            }catch (error){
                console.log(error)
            }
        }
        fetchNews()
    }, []);

    return (
        <main className={s.main}>
            {news.length > 0 ? <NewsBanner item={news[0]}/> : null}

            <NewsList news={news}/>
        </main>
    );
};

export default Main;