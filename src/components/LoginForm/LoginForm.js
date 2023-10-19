import React, { useState } from 'react';
import styles from "./LoginForm.module.css";

const LoginForm = props => {
    const [form, setForm] = useState({
        email: "",
        password: "",
        confirmPassword: "",
    });

    const onUpdateField = e => {
        const nextFormState = {
            ...form,
            [e.target.name]: e.target.value,
        };
        setForm(nextFormState);
    };

    const onSubmitForm = e => {
        e.preventDefault();
        alert(JSON.stringify(form, null, 2));
    }

    return(
        <form onSubmit={onSubmitForm} className={styles.form}>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Email:</label>
                <input
                    className={styles.formField}
                    type='text'
                    onChange={onUpdateField}
                    value={form.email}
                    aria-label="Email field"
                    name="email"

                />
            </div>
            <div className={styles.formGroup}>
                <label className={styles.formLabel}>Password:</label>
                <input
                    className={styles.formField}
                    type="password"
                    onChange={onUpdateField}
                    value={form.password}
                    aria-label='Password Field'
                    name="password"
                />
            </div>

            <div className={styles.formGroup}>
                <label className={styles.formLabel}>ConfirmPassword:</label>
                <input
                    className={styles.formField}    
                    type="password"
                    onChange={onUpdateField}
                    value={form.confirmPassword}
                    aria-label='confirmPassword Field'
                    name="confirmPassword"
                />
            </div>
            <div className={styles.formActions}>
                <button type='submit' className={styles.formSubmitBtn}>
                    Login
                </button>
            </div>
        </form>
    );
};

export default LoginForm; 