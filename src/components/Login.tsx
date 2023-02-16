import { LoginArgs } from '@/types';
import { useRouter } from 'next/router';
import useLoginForm from '@/hooks/useLoginForm';
import { LOGIN } from '@/schema';
import { useMutation } from '@apollo/client';
import { useAuth } from '@/Auth';

export function Login() {
  const { login } = useAuth();
  // const [login, { data, error }] = useMutation(LOGIN);

  const router = useRouter();

  const onSuccess = (data: LoginArgs) => {
    const { email, password } = data;

    const payload: LoginArgs = {
      email,
      password,
    };

    // login({ variables: payload })
    //   .then((res) => {
    //     const { login } = res.data;

    //     console.log('::: ✅/mutation/login :::', login);
    //     // router.push('/dashboard');
    //   })
    //   .catch((error) => {
    //     console.log(`::: 🚫/mutation/login :::`, error);
    //   });

    login(payload)
      .then(() => router.push('/dashboard'))
      .catch((error) => {
        console.log(`::: 🚫/mutation/login :::`, error);
      });
  };

  const {
    register,
    onSubmit,
    formState: { errors },
  } = useLoginForm(onSuccess);

  // let name: string = '';
  // if (data && data?.login?.user) name = data.login.user.name;

  return (
    <>
      <hgroup>
        <h1>Log In</h1>
        <h2>Info App Incorporated</h2>
      </hgroup>

      <form onSubmit={onSubmit}>
        <input
          {...register('email')}
          type='text'
          placeholder='email'
          aria-label='login'
        />

        <input
          {...register('password')}
          type='text'
          placeholder='password'
          aria-label='password'
        />

        <button type='submit' style={{ width: '100%' }}>
          Login
        </button>

        {/* {error && error.message && <div>{error.message}</div>}
      {data && data?.login?.user?.name && <div>✅ Hello, {name}</div>} */}
      </form>
    </>
  );
}
