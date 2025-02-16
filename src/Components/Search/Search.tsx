import s from './Search.module.css'

interface Props {
    keywords: string
    setKeywords: (keywords: string) => void
}

const Search = ({ keywords, setKeywords }: Props) => {
    return (
        <div className={s.search}>
            <input type='text'
                   value={keywords}
                   className={s.input}
                   onChange={(e)=>setKeywords(e.target.value)}
                   placeholder="Поиск..."
            />
        </div>
    );
};

export default Search;