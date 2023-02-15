import { useAuth } from '@/Auth';
import { LoginArgs } from '@/types';
import { useRouter } from 'next/router';
import useLoginForm from '@/hooks/useLoginForm';
import { useMutation } from '@apollo/client';
import { LOGIN } from '@/schema';


export function Login() {
  const router = useRouter();
  // const { login } = useAuth();

  const [login, { data }] = useMutation(LOGIN);

  const onSuccess = (data: LoginArgs) => {
    const { email, password } = data;

    const payload: LoginArgs = {
      email,
      password,
    };

    login({ variables: { email, password } });
  };

  if (data) {
    console.log('data from login.tsx :::', data);
  }

  const {
    register,
    onSubmit,
    formState: { errors },
  } = useLoginForm(onSuccess);

  return (
    <form onSubmit={onSubmit}>
      <input {...register('email')} type='text' placeholder='email' />
      <input {...register('password')} type='text' placeholder='password' />
      <button type='submit'>Login</button>
    </form>
  );
}
