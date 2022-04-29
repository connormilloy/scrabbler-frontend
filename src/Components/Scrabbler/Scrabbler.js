import styles from './Scrabbler.module.scss';

import Header from "../Header/Header";
import SearchControls from "../SearchControls/SearchControls";

import Word from "../Word/Word";
import InvalidWord from "../InvalidWord/InvalidWord";

import {useState} from "react";

const Scrabbler = () => {
    const [wordResult, setWordResult] = useState({
        "success": null,
        "word": null
    });

    const handleWordSearch = (result) => {
        setWordResult({
            "success": result.success,
            "word": result.word
        })
    }

    return(
        <div className="scrabbler">
            <Header />
            <SearchControls
                onSearch={handleWordSearch}
            />

            {wordResult.success === false &&
                <InvalidWord />
            }

            {wordResult.success === true &&
                <Word
                    word={wordResult.word}
                />
            }
        </div>
    )
}

export default Scrabbler;