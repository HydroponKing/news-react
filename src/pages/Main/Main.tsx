import s from './Main.module.css'
import LatestNews from "../../Components/LatestNews/LatestNews.tsx";
import NewsByFilters from "../../Components/NewsByFilters/NewsByFilters.tsx";

const Main = () => {

    return (
        <main className={s.main}>
            <LatestNews/>

            <NewsByFilters/>
        </main>
    );
};

export default Main;