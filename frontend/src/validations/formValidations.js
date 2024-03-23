import * as yup from 'yup'

export const loginSchema = yup.object({
    email: yup.string().required('Please enter your Email'),
    password: yup.string().required('Please enter your password')
})

export const signupSchema = yup.object({
    fname: yup.string().required('First name is required'),
    lname: yup.string().required('Last name is required'),
    email: yup.string()
        .email('Enter a valid email address')
        .required('Email is required'),
    password: yup.string()
        .min(6, 'Password should be atleast 6 characters long')
        .matches(
            /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
            "Password must contain at least 8 characters, one uppercase, one number and one special case character"
        )
        .required('Password is required'),
    confirmPW: yup.string()
        .oneOf([yup.ref('password')], 'Passwords do no match')
        .required('Confirm password is required'),
    role: yup.string().required('Role required')
})