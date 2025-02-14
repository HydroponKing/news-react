import s from './LatestNews.module.css'
import BannerList from "../BannersList/BannersList.tsx";
import { useFetch } from "../../helpers/hooks/useFetch.ts";
import { getLatestNews } from "../../api/apiNews.ts";
import { NewsApiResponse } from '../../interfaces/index.ts';

const LatestNews = () => {

    const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

    return (
        <section className={s.section}>
            <BannerList banners={data && data.news} isLoading={isLoading}/>
        </section>
    );
};

export default LatestNews;