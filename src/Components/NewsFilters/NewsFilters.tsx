import s from './NewsFilters.module.css'
import Categories from "../Categories/Categories.tsx";
import Search from "../Search/Search.tsx";
import Slider from "../Slider/Slider.tsx";
import { IFilters} from "../../interfaces";
import { useTheme } from '../../Context/ThemeContext.tsx';
import { useGetCategoriesQuery } from '../../store/services/newsApi.ts';
import { useAppDispatch } from '../../store/index.ts';
import { setFilters } from '../../store/slices/newsSlice.ts';

interface Props {
    filters: IFilters
}

const NewsFilters = ({ filters }: Props) => {
    
    const {isDark} = useTheme()
    
    const {data: dataCategories} = useGetCategoriesQuery(null)
    const dispatch = useAppDispatch()

    return (
        <div className={s.filters}>
            {dataCategories ? (
                <Slider isDark={isDark}>
                    <Categories
                        categories={dataCategories.categories}
                        selectCategory={filters.category}
                        setSelectCategory={(category)=>
                            dispatch(setFilters({key: 'category', value: category}))
                            }
                    />
                </Slider>
            ) : null}

            <Search 
             keywords={filters.keywords}
             setKeywords={(keywords)=>dispatch(setFilters({key: 'keywords', value: keywords}))}
             />
        </div>
    );
};

export default NewsFilters;