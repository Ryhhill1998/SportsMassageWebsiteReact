import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';

import "./ApplicableCondtionsCard.styles.css";

const ApplicableConditionsCard = ({conditions}) => {
    return (
        <div className="conditions-card">
            <h2>Applicable Conditions</h2>
            <ul className="bullet-list">
                {conditions.map((condition, i) => {
                    return (
                        <li key={i}>
                            <FontAwesomeIcon icon={faCircleChevronRight} size="2x" className="icon" />
                            {condition}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

export default ApplicableConditionsCard;