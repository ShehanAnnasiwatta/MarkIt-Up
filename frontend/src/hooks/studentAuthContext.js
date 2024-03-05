import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useStudentAuthContext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw Error('useStudentAuthContext must be used inside an AuthContextProvider');
    }

    return context;
};
