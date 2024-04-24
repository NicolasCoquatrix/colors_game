import styles from './ColoredSquare.module.css';
import PropTypes from "prop-types";

export default function ColoredSquare(props) {
    return (
        <div className={styles.square} style={{backgroundColor: props.color}}></div>
    );
}

ColoredSquare.propTypes = {
    color: PropTypes.string,
}