import s from './Categories.module.css'

const Categories = ({ categories, setSelectCategory, selectCategory }) => {
    return (
        <div className={s.categories}>
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
};

export default Categories;