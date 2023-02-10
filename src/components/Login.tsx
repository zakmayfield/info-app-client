import { useAuth } from '@/Auth';
import { LoginArgs } from '@/types';
import { useRouter } from 'next/router';
import useLoginForm from '@/hooks/useLoginForm';

export function Login() {
  const router = useRouter();
  const { login } = useAuth();

  const onSuccess = (data: LoginArgs) => {
    const { email, password } = data;

    const payload: LoginArgs = {
      email,
      password,
    };

    login(payload).then(() => router.push('/dashboard'));
  };

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
