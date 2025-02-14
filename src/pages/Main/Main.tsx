import s from './Main.module.css'
import { getNews} from "../../api/apiNews.js";
import {useDebounce} from "../../helpers/hooks/useDebounce.js";
import {PAGE_SIZE} from "../../constants/constants.js";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {useFilters} from "../../helpers/hooks/useFilters.js";
import LatestNews from "../../Components/LatestNews/LatestNews.jsx";
import NewsByFilters from "../../Components/NewsByFilters/NewsByFilters.jsx";

const Main = () => {

    return (
        <main className={s.main}>
            <LatestNews/>

            <NewsByFilters/>
        </main>
    );
};

export default Main;