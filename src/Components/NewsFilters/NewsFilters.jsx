import s from './NewsFilters.module.css'
import Categories from "../Categories/Categories.jsx";
import Search from "../Search/Search.jsx";
import {useFetch} from "../../helpers/hooks/useFetch.js";
import {getCategories} from "../../api/apiNews.js";
import Slider from "../Slider/Slider.jsx";

const NewsFilters = ({ filters, changeFilters }) => {

    const {data: dataCategories} = useFetch(getCategories)


    return (
        <div className={s.filters}>
            {dataCategories ? (
                <Slider>
                    <Categories
                        categories={dataCategories.categories}
                        selectCategory={filters.category}
                        setSelectCategory={(category)=>changeFilters('category', category)}
                    />
                </Slider>
            ) : null}

            <Search keywords={filters.keywords} setKeywords={(keywords)=>changeFilters('keywords', keywords)}/>
        </div>
    );
};

export default NewsFilters;