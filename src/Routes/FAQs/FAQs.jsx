import "./FAQs.css";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const FAQs = () => {
    return (
        <main className="container">
            <div className="faqs-container">
                <div className="question-container">
                    <h2 className="question">
                        Who can have acupuncture treatment?
                        <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
                    </h2>
                    <p className="answer">
                        There is no limitation in terms of age, sex or condition regarding acupuncture treatment. The very
                        young or extremely old can be treated. All types of conditions can be treated – chronic or acute,
                        severe or mild, mental or physical.
                    </p>
                </div>

                <div className="question-container">
                    <h2 className="question">
                        Who can have acupuncture treatment?
                        <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
                    </h2>
                    <p className="answer">
                        There is no limitation in terms of age, sex or condition regarding acupuncture treatment. The very
                        young or extremely old can be treated. All types of conditions can be treated – chronic or acute,
                        severe or mild, mental or physical.
                    </p>
                </div>

                <div className="question-container">
                    <h2 className="question">
                        Who can have acupuncture treatment?
                        <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
                    </h2>
                    <p className="answer">
                        There is no limitation in terms of age, sex or condition regarding acupuncture treatment. The very
                        young or extremely old can be treated. All types of conditions can be treated – chronic or acute,
                        severe or mild, mental or physical.
                    </p>
                </div>

                <div className="question-container">
                    <h2 className="question">
                        Who can have acupuncture treatment?
                        <FontAwesomeIcon icon={faCircleChevronDown} className="icon dropdown-arrow"/>
                    </h2>
                    <p className="answer">
                        There is no limitation in terms of age, sex or condition regarding acupuncture treatment. The very
                        young or extremely old can be treated. All types of conditions can be treated – chronic or acute,
                        severe or mild, mental or physical.
                    </p>
                </div>
            </div>
        </main>
    );
}

export default FAQs;