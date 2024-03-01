import { Context } from '@/components/Context';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { IoHeart } from 'react-icons/io5';

export default function LoginPage() {
  const { authUser, user } = useContext(Context);
  const router = useRouter();
  const [err, setErr] = useState(null);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user) {
      router.push('/admin');
    }
  }, [user, router]);

  const onSubmit = async (data) => {
    const response = await axios.post('/api/login', data);

    if (response.data.status == false) {
      setErr(response.data.message);
    } else {
      authUser(response.data);
    }
  };
  return (
    <>
      <div className="w-full min-h-[100vh] flex items-center justify-center bg-gray-100">
        <div className="w-1/3 border shadow-md rounded-md p-10">
          <div className="flex items-center flex-col mb-5">
            <IoHeart size={50} className="text-red-700" />
            <h2 className="text-3xl font-bold uppercase">
              <span className="text-red-700">B</span>lood
              <span className="text-red-700">B</span>ank
            </h2>
          </div>

          {err && (
            <div className="w-full p-5 mb-5 bg-red-200">
              <p className="text-sm text-red-500 mb-2 text-center">{err}</p>
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Email</label>
              <input
                type="email"
                className="text-sm mb-2 bg-white outline-none border-0 px-10 py-5 w-full"
                placeholder="example@gmail.com"
                {...register('email', { required: 'Email is required!' })}
              />
              {errors.email && (
                <p className="text-sm text-red-500 mb-2">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-400 mb-1">Password</label>
              <input
                type="password"
                className="text-sm mb-2 bg-white outline-none border-0 px-10 py-5 w-full"
                placeholder="********"
                {...register('password', { required: 'Password is required!' })}
              />
              {errors.password && (
                <p className="text-sm text-red-500 mb-2">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-red-700 text-white mt-5 px-5 py-2 rounded-sm shadow-sm"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
