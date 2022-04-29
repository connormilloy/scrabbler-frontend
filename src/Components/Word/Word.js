import styles from './Word.module.scss';
import { determineTotalWordScore } from "./Utilities/determineTotalWordScore";

import PointsTotal from "./PointsTotal/PointsTotal";
import LetterTile from './LetterTile/LetterTile';

const Word = ({ word }) => {
    const letters = word.split('');
    console.log(letters);
    return(
        <div className={styles.word}>
            <div className={styles.lettersWrapper}>
                {letters.map(letter => (
                    <LetterTile className={letter} letter={letter}/>
                ))}
            </div>

            <PointsTotal
                points={determineTotalWordScore(word)}
            />
        </div>
    )
}

export default Word;