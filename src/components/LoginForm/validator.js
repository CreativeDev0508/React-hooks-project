export const emailValidator = email => {
    if(!email) {
        return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
        return "Incorrect email format";
    }
    return "";
};

export const passwordVallidator = password => {
    if(!password) {
        return "Password is required";
    } else if(password.length < 8) {
        return "Password must have a minium 8 characters";
    }
    return "";
};

export const confirmPasswordValidator = (confirmPassword, form) => {
    if(!confirmPassword) {
        return "ConfirmPassword is required";
    } else if (confirmPassword.length < 8) {
        return "ConfirmPassword must have a minium 8 characters";
    } else if (confirmPassword !== form.password) {
        return "Passwords do not match";
    }
    return "";
};