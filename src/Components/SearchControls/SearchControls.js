import Button from "../Button/Button";
import InputBox from "../InputBox/InputBox";

import { useState } from 'react';
import axios from 'axios';

import styles from './SearchControls.module.scss';

const SearchControls = ({ onSearch }) => {
    const [search, setSearch] = useState('');

    const performWordSearch = () => {
        if(search) {
            const fixedSearchTerms = search.toLowerCase();
            axios.get(`http://localhost:5855/scrabble/get-word/${fixedSearchTerms}`)
                .then(res => {
                    const result = res.data;
                    const success = result.length > 0 ? true : false;
                    const searchResults = {
                        "success": success,
                        "word": res.data[0]
                    }

                    onSearch(searchResults);
                })
                .catch(e => console.log(e))
        } else {
            alert('No search terms entered!');
        }
    }

    const handleSearchTextChange = e => {
        setSearch(e.target.value);
    }

    return(
        <div className={styles.searchControls}>
            <InputBox onChangeInput={handleSearchTextChange}/>
            <Button
                text={"Search"}
                variant={"danger"}
                onClick={performWordSearch}
            />
        </div>
    )
}

export default SearchControls;