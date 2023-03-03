import { createContext, useState } from "react";

export const DropdownSearchContext = createContext({
    dropdownSearch: false,
    setDropdownSearch: (value) => {}
});

export const DropdownSearchProvider = ({ children }) => {
    const [dropdownSearch, setDropdownSearch] = useState(false);
    const value = { dropdownSearch, setDropdownSearch };
    return <DropdownSearchContext.Provider value={value}>{children}</DropdownSearchContext.Provider>;
};