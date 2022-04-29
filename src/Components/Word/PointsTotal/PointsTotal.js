import styles from './PointsTotal.module.scss';

const PointsTotal = ({ points }) => {
    return(
        <div className={styles.pointsTotal}>
            <span className={styles.pointValue}>{points}</span>
        </div>
    )
}

export default PointsTotal;