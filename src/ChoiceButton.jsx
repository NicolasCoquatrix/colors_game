import styles from './ChoiceButton.module.css';
import PropTypes from "prop-types";

export default function ChoiceButton(props) {
    return (
        <button onClick={props.onClick} className={styles.button} style={{color: props.buttonColor}}>{props.color}</button>
    );
}

ChoiceButton.propTypes = {
    color: PropTypes.string,
    buttonColor: PropTypes.string,
    onClick: PropTypes.func,
}