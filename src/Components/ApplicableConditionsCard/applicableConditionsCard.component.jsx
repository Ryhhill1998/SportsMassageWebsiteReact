import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';

import "./applicableCondtionsCard.styles.css";

const ApplicableConditionsCard = () => {
    return (
        <div className="conditions-card">
            <h2>Applicable Conditions</h2>
            <ul className="bullet-list">
                <li>
                    <FontAwesomeIcon icon={faCircleChevronRight} size="2x" className="icon" />
                    Hormonal imbalances
                </li>
                <li>
                    <FontAwesomeIcon icon={faCircleChevronRight} size="2x" className="icon" />
                    Menopause
                </li>
                <li>
                    <FontAwesomeIcon icon={faCircleChevronRight} size="2x" className="icon" />
                    Back pain
                </li>
                <li>
                    <FontAwesomeIcon icon={faCircleChevronRight} size="2x" className="icon" />
                    Migraines, headaches
                </li>
                <li>
                    <FontAwesomeIcon icon={faCircleChevronRight} size="2x" className="icon" />
                    Sleep disorders
                </li>
                <li>
                    <FontAwesomeIcon icon={faCircleChevronRight} size="2x" className="icon" />
                    Digestive problems
                </li>
                <li>
                    <FontAwesomeIcon icon={faCircleChevronRight} size="2x" className="icon" />
                    Circulatory problems
                </li>
                <li>
                    <FontAwesomeIcon icon={faCircleChevronRight} size="2x" className="icon" />
                    Stress-related disorders
                </li>
                <li>
                    <FontAwesomeIcon icon={faCircleChevronRight} size="2x" className="icon" />
                    Arthritis
                </li>
            </ul>
        </div>
    );
}

export default ApplicableConditionsCard;