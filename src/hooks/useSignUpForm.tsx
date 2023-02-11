import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { SignUpArgs } from '@/types'

const schema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required()
    })
    .required()

export default function useSignUpForm(onSuccess: (values: SignUpArgs) => void) {
    const defaultValues = {
        name: '',
        email: '',
        password: ''
    }

    const form = useForm<SignUpArgs>({ resolver: yupResolver(schema), defaultValues})

    const onSubmit = form.handleSubmit(onSuccess)

    return {...form, onSubmit}
}