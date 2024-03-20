import * as yup from 'yup'

export const loginSchema = yup.object({
    email: yup.string().required('Please enter your Email'),
    password: yup.string().required('Please enter your password')
})