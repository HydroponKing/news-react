import s from './LatestNews.module.css'
import BannerList from "../BannersList/BannersList.jsx";

const LatestNews = ({ banners, isLoading }) => {
    return (
        <section className={s.section}>
            <BannerList banners={banners} isLoading={isLoading}/>
        </section>
    );
};

export default LatestNews;