import { useAuth } from '@/Auth';
import useSignUpForm from '@/hooks/useSignUpForm';
import { SignUpArgs } from '@/types';
import { useRouter } from 'next/router';

export function SignUp() {
  const router = useRouter();
  // const { signUp } = useAuth();

  const onSuccess = (data: SignUpArgs) => {
    const { name, email, password } = data;

    const payload: SignUpArgs = {
      name,
      email,
      password,
    };

    // signUp(payload).then(() => router.push('/dashboard'));
  };

  const {
    register,
    onSubmit,
    formState: { errors },
  } = useSignUpForm(onSuccess);

  return (
    <form onSubmit={onSubmit}>
      <input {...register('name')} type='text' placeholder='name' />
      <input {...register('email')} type='text' placeholder='email' />
      <input {...register('password')} type='text' placeholder='password' />
      <button type='submit'>Login</button>
    </form>
  );
}
