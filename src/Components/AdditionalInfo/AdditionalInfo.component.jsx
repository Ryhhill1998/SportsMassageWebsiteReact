import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleChevronRight} from '@fortawesome/free-solid-svg-icons';

import "./AdditionalInfo.styles.css";

const AdditionalInfo = ({title, info, extraInfo}) => {
    return (
        <div className="conditions-card">
            <h2>{title}</h2>
            <ul className="bullet-list">
                {info.map((entry, i) => {
                    return (
                        <li key={i}>
                            <FontAwesomeIcon icon={faCircleChevronRight} size="2x" className="icon" />
                            {entry}
                        </li>
                    );
                })}
            </ul>
            <p>{extraInfo}</p>
        </div>
    );
}

export default AdditionalInfo;