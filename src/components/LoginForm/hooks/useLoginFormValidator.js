import { useState } from "react";

import {
    emailValidator,
    passwordVallidator,
    confirmPasswordValidator
} from "../validator.js";

const touchErrors = errors => {
    return Object.entries(errors).reduce((acc, [field, fieldError]) => {
        acc[field] = {
            ...fieldError,
            dirty:true,
        };

        return acc;
    }, {});
};

export const useLoginFormValidator = form => {
    const [errors, seErrors] = useState({
        email: {
            dirty: false,
            error: false,
            message: "",
        },
        password: {
            dirty:false,
            error: false,
            message: "",
        },
        confirmPassword: {
            dirty: false,
            error: false,
            message: "",

        }
    });

    const validateForm = ({form, field, errors, forceTouchErrors = false }) => {
        let isValid = true;

        // Create a deep copy of the errors
        const nextErrors = JSON.parse(JSON.stringify(errors));

        if (forceTouchErrors) {
            nextErrors = touchErrors(errors);
        }

        const {email, password, confirmPassword} = form;

        if(nextErrors.email.dirty && (field ? field === "email" : true)) {
            const emailMessage = emailValidator(email, form);
            nextErrors.email.error = !!emailMessage;
            nextErrors.email.message = emailMessage;
            if (!!emailMessage) isValid = false;
        }
    }
}
