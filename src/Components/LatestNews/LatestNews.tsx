import s from './LatestNews.module.css'
import BannerList from "../BannersList/BannersList.tsx";
import { useGetLatestNewsQuery } from '../../store/services/newsApi.ts';
const LatestNews = () => {

    const { data, isLoading} = useGetLatestNewsQuery(null)

    return (
        <section className={s.section}>
            <BannerList banners={data && data.news} isLoading={isLoading}/>
        </section>
    );
};

export default LatestNews;