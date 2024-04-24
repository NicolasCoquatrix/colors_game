import styles from './Score.module.css';
import PropTypes from "prop-types";

export default function Score(props) {
    return (
        <>
            <p className={styles.text}>{props.scoreWon} gagné{props.scoreWon < 2 ? '' : 's'} / {props.scoreLost} perdu{props.scoreLost < 2 ? '' : 's'}</p>
            <p className={styles.text}>Score : {props.scoreTotal}</p>
        </>
    );
}

Score.propTypes = {
    scoreWon: PropTypes.number,
    scoreLost: PropTypes.number,
    scoreTotal: PropTypes.number,
}