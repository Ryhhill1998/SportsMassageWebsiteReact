import { createContext, useState } from "react";

export const ContactFormContext = createContext({
    contactFormOpen: false,
    setContactFormOpen: (value) => {}
});

export const ContactFormProvider = ({ children }) => {
    const [contactFormOpen, setContactFormOpen] = useState(null);
    const value = { contactFormOpen, setContactFormOpen };
    return <ContactFormContext.Provider value={value}>{children}</ContactFormContext.Provider>;
};