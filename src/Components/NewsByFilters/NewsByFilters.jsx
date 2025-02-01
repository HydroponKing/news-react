import s from './NewsByFilters.module.css'
import {PAGE_SIZE, TOTAL_PAGE} from "../../constants/constants.js";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getNews} from "../../api/apiNews.js";
import NewsList from "../NewsList/NewsList.jsx";
import NewsFilters from "../NewsFilters/NewsFilters.jsx";
import {useFilters} from "../../helpers/hooks/useFilters.js";
import {useDebounce} from "../../helpers/hooks/useDebounce.js";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.jsx";


const NewsByFilters = () => {

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
        <section className={s.section}>
            <NewsFilters filters={filters} changeFilters={changeFilters}/>

            <PaginationWrapper
                top
                bottom
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGE}
                currentPage={filters.page_number}
            >
                <NewsList isLoading={isLoading} news={data?.news}/>
            </PaginationWrapper>

        </section>
    );
};

export default NewsByFilters;