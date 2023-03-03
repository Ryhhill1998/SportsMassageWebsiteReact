import {createContext, useEffect, useState} from "react";

export const ContactFormContext = createContext({
    contactFormOpen: false,
    setContactFormOpen: (value) => {}
});

export const ContactFormProvider = ({ children }) => {
    const [contactFormOpen, setContactFormOpen] = useState(false);
    const value = { contactFormOpen, setContactFormOpen };

    useEffect(() => {
        const body = document.body;

        if (contactFormOpen) {
            body.classList.add("no-scroll");
        } else {
            body.classList.remove("no-scroll");
        }
    }, [contactFormOpen]);

    return <ContactFormContext.Provider value={value}>{children}</ContactFormContext.Provider>;
};