import s from './LatestNews.module.css'
import BannerList from "../BannersList/BannersList.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getLatestNews, getNews} from "../../api/apiNews.js";

const LatestNews = () => {

    const { data, isLoading} = useFetch(getLatestNews)

    return (
        <section className={s.section}>
            <BannerList banners={data && data.news} isLoading={isLoading}/>
        </section>
    );
};

export default LatestNews;