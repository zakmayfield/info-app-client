import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { LoginArgs } from '@/types'

const schema = yup
    .object({
        email: yup.string().required(),
        password: yup.string().required()
    })
    .required()

export default function useLoginForm(onSuccess: (values: LoginArgs) => void) {
    const defaultValues = {
        email: '',
        password: ''
    }

    const form = useForm<LoginArgs>({ resolver: yupResolver(schema), defaultValues})

    const onSubmit = form.handleSubmit(onSuccess)

    return {...form, onSubmit}
}