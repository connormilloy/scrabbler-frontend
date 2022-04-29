import styles from './LetterTile.module.scss';

const letterScores = require('../Utilities/individualLetterScores.json');

const LetterTile = ({ letter }) => {
    return(
        <div className={styles.letterTile}>
            <h2 className={styles.letter}>
                {letter.toUpperCase()}
            </h2>
            <h5 className={styles.score}>
                {letterScores[letter]}
            </h5>
        </div>
    )
}

export default LetterTile