import s from './Main.module.css'
import NewsBanner from "../../Components/NewsBanner/NewsBanner.jsx";
import {getCategories, getNews} from "../../api/apiNews.js";
import NewsList from "../../Components/NewsList/NewsList.jsx";
import Pagination from "../../Components/Pagination/Pagination.jsx";
import Categories from "../../Components/Categories/Categories.jsx";
import Search from "../../Components/Search/Search.jsx";
import {useDebounce} from "../../helpers/hooks/useDebounce.js";
import {PAGE_SIZE, TOTAL_PAGE} from "../../constants/constants.js";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {useFilters} from "../../helpers/hooks/useFilters.js";

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

    const {data: dataCategories} = useFetch(getCategories)

    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGE) {
            changeFilters('page_number', filters.page_number + 1)
        }
    }

    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            changeFilters('page_number', filters.page_number - 1)
        }
    }

    const handlePageClick = (pageNumber) => {
        changeFilters('page_number', pageNumber)
    }

    return (
        <main className={s.main}>

            {dataCategories ? (
                <Categories categories={dataCategories.categories}
                         selectCategory={filters.category}
                         setSelectCategory={(category)=>changeFilters('category', category)}
                />
            ) : null}

            <Search keywords={filters.keywords} setKeywords={(keywords)=>changeFilters('keywords', keywords)}/>

            <NewsBanner isLoading={isLoading}
                        item={data && data.news  && data.news[0]}
            />

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGE}
                currentPage={filters.page_number}
            />

            <NewsList isLoading={isLoading} news={data?.news}/>

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGE}
                currentPage={filters.page_number}
            />
        </main>
    );
};

export default Main;