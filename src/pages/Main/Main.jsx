import s from './Main.module.css'
import { getNews} from "../../api/apiNews.js";
import {useDebounce} from "../../helpers/hooks/useDebounce.js";
import {PAGE_SIZE} from "../../constants/constants.js";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {useFilters} from "../../helpers/hooks/useFilters.js";
import LatestNews from "../../Components/LatestNews/LatestNews.jsx";
import NewsByFilters from "../../Components/NewsByFilters/NewsByFilters.jsx";

const Main = () => {

    const { filters, changeFilters} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    })

    const debouncedKeywords = useDebounce(filters.keywords, 500)

    const { data, isLoading} = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords,
    } )

    return (
        <main className={s.main}>

            <LatestNews isLoading={isLoading} banners={data && data.news}/>

            <NewsByFilters news={data?.news} isLoading={isLoading} filters={filters} changeFilters={changeFilters} />

        </main>
    );
};

export default Main;