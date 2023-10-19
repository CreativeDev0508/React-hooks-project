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

    const validateForm = ({form, field, errors, forceTouchErrors = false })
}
