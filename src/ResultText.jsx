import styles from './ResultText.module.css';
import PropTypes from "prop-types";

export default function ResultText(props) {
    if (props.victory === null) {
        return <p>Trouvez le bon code héxadécimal.</p>
    }
     
    if (props.victory) {
        return <p className={styles.win}>Bravo !</p>
    }
    
    if (!props.victory) {
        return <p className={styles.lose}>Essaye encore...</p>
    }
}

ResultText.propTypes = {
    victory: PropTypes.bool,
}