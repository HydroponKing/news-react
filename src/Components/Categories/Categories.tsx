import s from './Categories.module.css'
import {forwardRef} from "react";

const Categories = forwardRef(({ categories, setSelectCategory, selectCategory }, ref) => {
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