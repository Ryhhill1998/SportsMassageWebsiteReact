import "./Question.styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";

const Question = ({questionText, answerText}) => {
    return (
        <div className="question-container">
            <h2 className="question">
                {questionText}
                <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
            </h2>
            <p className="answer">
                {answerText}
            </p>
        </div>
    );
}

export default Question;