import s from './NewsFilters.module.css'
import Categories from "../Categories/Categories.tsx";
import Search from "../Search/Search.tsx";
import {useFetch} from "../../helpers/hooks/useFetch.ts";
import {getCategories} from "../../api/apiNews.ts";
import Slider from "../Slider/Slider.tsx";
import {CategoriesApiResponse, IFilters} from "../../interfaces";

interface Props {
    filters: IFilters
    changeFilters?: (key: string, value: string | number | null) => void
}

const NewsFilters = ({ filters, changeFilters }: Props) => {

    const {data: dataCategories} = useFetch<CategoriesApiResponse, null>(getCategories)


    return (
        <div className={s.filters}>
            {dataCategories ? (
                <Slider>
                    <Categories
                        categories={dataCategories.categories}
                        selectCategory={filters.category}
                        setSelectCategory={(category)=>changeFilters?.('category', category)}
                    />
                </Slider>
            ) : null}

            <Search keywords={filters.keywords} setKeywords={(keywords)=>changeFilters?.('keywords', keywords)}/>
        </div>
    );
};

export default NewsFilters;