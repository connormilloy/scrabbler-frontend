import styles from './InputBox.module.scss';
import { Form } from "react-bootstrap";

const InputBox = ({ onChangeInput }) => {
    return(
       <Form.Control
           onChange={e => onChangeInput(e)}
           className={styles.input}
           type="text"
           placeholder="Search for a word..."
       />
    )
}

export default InputBox;