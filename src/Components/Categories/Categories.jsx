import React from 'react';
import s from './Categories.module.css'

const Categories = ({ categories, setSelectCategory, selectCategory }) => {
    return (
        <div className={s.categories}>
            {categories.map(category => {
                return (
                    <button onClick={()=> setSelectCategory(category)} key={category} className={selectCategory === category ? s.active : s.item}>
                        {category}
                    </button>
                )
            })}
        </div>
    );
};

export default Categories;