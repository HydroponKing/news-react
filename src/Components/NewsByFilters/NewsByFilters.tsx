import s from './NewsByFilters.module.css'
import { TOTAL_PAGE} from "../../constants/constants.ts";
import NewsList from "../NewsList/NewsList.tsx";
import NewsFilters from "../NewsFilters/NewsFilters.tsx";
import {useDebounce} from "../../helpers/hooks/useDebounce.ts";
import PaginationWrapper from "../PaginationWrapper/PaginationWrapper.tsx";
import { useGetNewsQuery } from '../../store/services/newsApi.ts';
import { useAppSelector, useAppDispatch } from '../../store/index.ts';
import { setFilters } from '../../store/slices/newsSlice.ts';

const NewsByFilters = () => {

    const filters = useAppSelector(state => state.news.filters)
    const dispatch = useAppDispatch()

    const debouncedKeywords = useDebounce(filters.keywords, 500)

    
    const { data, isLoading} = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords,
    })


    const handleNextPage = () => {
        if (filters.page_number < TOTAL_PAGE) {
            dispatch(setFilters({key: 'page_number', value: filters.page_number + 1}))
        }
    }

    const handlePreviousPage = () => {
        if (filters.page_number > 1) {
            dispatch(setFilters({key: 'page_number', value: filters.page_number - 1}))
        }
    }

    const handlePageClick = (pageNumber: number) => {
        dispatch(setFilters({key: 'page_number', value: pageNumber}))
    }

    return (
        <section className={s.section}>
            <NewsFilters filters={filters} />

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