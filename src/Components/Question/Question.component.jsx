import "./Question.styles.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";

const Question = ({questionText, answerText}) => {
    const toggleAnswer = ({target}) => {
        const questionContainer = target.closest(".question-container");
        questionContainer.querySelector(".answer").classList.toggle("no-display");
    }

    return (
        <div className="question-container">
            <h2 className="question" onClick={toggleAnswer}>
                {questionText}
                <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
            </h2>
            <p className="answer no-display">
                {answerText}
            </p>
        </div>
    );
}

export default Question;