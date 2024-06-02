import { FaSearch, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import { useId } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import css from './SearchBar.module.css';

export const SearchBar = ({ submit }) => {
  const [query, setQuery] = useState('');

  const searchQueryId = 'searchQueryId' + useId();

  const handleSubmit = ev => {
    ev.preventDefault();
    if (query.trim() !== '') {
      submit(query);
      setQuery('');
    } else {
      toast.error('Please enter a search query');
    }
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <header className={css.header}>
      <form onSubmit={handleSubmit} className={css.formSearch}>
        <div className={css.searchCont}>
          <input
            type="text"
            name="query"
            value={query}
            id={searchQueryId}
            autoComplete="off"
            onChange={e => setQuery(e.target.value)}
            placeholder="Search images and photos"
            autoFocus
          />
          <button className={css.btn} type="submit">
            Search
          </button>
          <FaSearch
            onClick={handleSubmit}
            className={`${css.icon} ${css.searchIcon}`}
          />

          {query && (
            <FaTimes
              className={`${css.icon} ${css.clearIcon}`}
              onClick={handleClear}
            />
          )}
        </div>
      </form>
      <Toaster />
    </header>
  );
};

export default SearchBar;
