import "./NavigationLink.styles.css";
import {NavLink} from "react-router-dom";

const NavigationLink = ({text, route, onClickHandler}) => {
    return (
        <li>
            <NavLink
                to={route}
                className={({ isActive }) => isActive ? "dropdown-selected" : ""}
                onClick={onClickHandler}>
                {text}
            </NavLink>
        </li>
    );
}

export default NavigationLink;