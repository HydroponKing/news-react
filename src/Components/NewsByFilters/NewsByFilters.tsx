import s from './NewsByFilters.module.css'
import {PAGE_SIZE, TOTAL_PAGE} from "../../constants/constants.ts";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getNews} from "../../api/apiNews.ts";
import NewsList from "../NewsList/NewsList.tsx";
import NewsFilters from "../NewsFilters/NewsFilters.tsx";
import {useFilters} from "../../helpers/hooks/useFilters.ts";
import {useDebounce} from "../../helpers/hooks/useDebounce.ts";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.tsx";
import { NewsApiResponse, ParamsType } from '../../interfaces/index.ts';

const NewsByFilters = () => {

    const { filters, changeFilters} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    })

    const debouncedKeywords = useDebounce(filters.keywords, 500)

    const { data, isLoading} = useFetch<NewsApiResponse, ParamsType>(getNews, {
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

    const handlePageClick = (pageNumber: number) => {
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