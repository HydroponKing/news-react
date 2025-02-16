import s from './Categories.module.css'
import {forwardRef, ForwardedRef} from "react";
import {CategoriesType} from "../../interfaces";

interface Props {
    categories: CategoriesType[];
    setSelectCategory: (category: CategoriesType | null) => void;
    selectCategory: CategoriesType | null;
}

const Categories = forwardRef(({ categories, setSelectCategory, selectCategory }: Props, 
    ref: ForwardedRef<HTMLDivElement>) => {
    return (
        <div ref={ref} className={s.categories}>
            <button onClick={() => setSelectCategory(null)}
                    className={!selectCategory ? s.active : s.item}>
                All
            </button>


            {categories.map(category => {
                return (
                    <button onClick={()=>setSelectCategory(category)}
                            key={category}
                            className={selectCategory === category ? s.active : s.item}>
                        {category}
                    </button>
                )
            })}
        </div>
    );
}
)
Categories.displayName = 'Categories'

export default Categories;