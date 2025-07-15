'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema, type LoginFormData } from '../lib/schemas';

export default function LoginForm() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormData>({ resolver: zodResolver(loginSchema) });

    const onSubmit = async (values: LoginFormData) => {
        try {
            // جایگزین با API واقعی
            await new Promise((_, rej) =>
                setTimeout(() => rej(new Error('اطلاعات ورود اشتباه است')), 1000)
            );
        } catch (err: any) {
            setError('root', { message: err.message ?? 'ورود ناموفق بود' });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto font-[B Nazanin] mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md"
            noValidate
        >
            <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
                ورود
            </h1>

            {/* ایمیل */}
            <div className="mb-4">
                <label htmlFor="email" className="mb-1 block text-sm text-gray-700">
                    ایمیل
                </label>
                <input
                    id="email"
                    type="email"
                    {...register('email')}
                    className={`w-full rounded-md border px-3 py-2 text-sm text-gray-900 outline-none transition
            ${errors.email ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                    dir="rtl"
                />
                {errors.email && (
                    <p className="mt-1 text-right text-xs text-red-600">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* رمز عبور */}
            <div className="mb-6">
                <label htmlFor="password" className="mb-1 block text-sm text-gray-700">
                    رمز عبور
                </label>
                <input
                    id="password"
                    type="password"
                    {...register('password')}
                    className={`w-full rounded-md border px-3 py-2 text-sm text-gray-900 outline-none transition
            ${errors.password ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                    dir="rtl"
                />
                {errors.password && (
                    <p className="mt-1 text-right text-xs text-red-600">
                        {errors.password.message}
                    </p>
                )}
            </div>

            {/* خطای کلی */}
            {errors.root && (
                <div className="mb-4 text-center text-sm text-red-600">
                    {errors.root.message}
                </div>
            )}

            {/* دکمه */}
            <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
            >
                {isSubmitting ? 'در حال ورود...' : 'ورود'}
            </button>
        </form>
    );
}