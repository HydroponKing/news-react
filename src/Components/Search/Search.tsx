import s from './Search.module.css'
import { useTheme } from '../../Context/ThemeContext.tsx';
interface Props {
    keywords: string
    setKeywords: (keywords: string) => void
}

const Search = ({ keywords, setKeywords }: Props) => {
    const {isDark} = useTheme()

    return (
        
        <div className={`${s.search} ${isDark ? s.dark : s.light}`}>
            <input type='text'
                   value={keywords}
                   className={`${s.input} ${isDark ? s.dark : s.light}`}
                   onChange={(e)=>setKeywords(e.target.value)}
                   placeholder="Поиск..."
            />
        </div>
    );
};

export default Search;