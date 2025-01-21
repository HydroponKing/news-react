import React from 'react';
import s from './Search.module.css'

const Search = ({ keywords, setKeywords }) => {
    return (
        <div className={s.search}>
            <input type='text'value={keywords}
                   className={s.input}
                    onChange={(e)=>setKeywords(e.target.value)}
                   placeholder="Поиск..."
            />
        </div>
    );
};

export default Search;