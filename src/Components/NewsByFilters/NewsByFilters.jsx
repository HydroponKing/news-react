import s from './NewsByFilters.module.css'
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import Pagination from "../Pagination/Pagination.jsx";
import {TOTAL_PAGE} from "../../constants/constants.js";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getCategories} from "../../api/apiNews.js";
import NewsList from "../NewsList/NewsList.jsx";
import NewsFilters from "../NewsFilters/NewsFilters.jsx";


const NewsByFilters = ({ filters, changeFilters, isLoading, news }) => {


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


            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGE}
                currentPage={filters.page_number}
            />

            <NewsList isLoading={isLoading} news={news}/>

            <Pagination
                handleNextPage={handleNextPage}
                handlePreviousPage={handlePreviousPage}
                handlePageClick={handlePageClick}
                totalPages={TOTAL_PAGE}
                currentPage={filters.page_number}
            />
        </section>
    );
};

export default NewsByFilters;