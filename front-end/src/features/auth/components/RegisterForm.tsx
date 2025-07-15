'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { registerSchema, type RegisterFormData } from '../lib/schemas';

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({ resolver: zodResolver(registerSchema) });

    const onSubmit = async (values: RegisterFormData) => {
        try {
            await new Promise((_, rej) =>
                setTimeout(() => rej(new Error('این ایمیل قبلاً ثبت شده')), 1000)
            );
        } catch (err: any) {
            setError('root', { message: err.message ?? 'ثبت‌نام ناموفق بود' });
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md"
            dir="rtl"
            noValidate
        >
            <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
                ثبت‌نام
            </h1>


            <div className="mb-4">
                <label htmlFor="name" className="mb-1 block text-sm text-gray-700">
                    نام
                </label>
                <input
                    id="name"
                    type="text"
                    {...register('name')}
                    className={`w-full rounded-md border px-3 py-2 text-sm text-gray-900 outline-none transition
            ${errors.name ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                    dir="rtl"
                />
                {errors.name && (
                    <p className="mt-1 text-right text-xs text-red-600">
                        {errors.name.message}
                    </p>
                )}
            </div>


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

            <div className="mb-4">
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


            <div className="mb-4">
                <label htmlFor="confirmPassword" className="mb-1 block text-sm text-gray-700">
                    تکرار رمز عبور
                </label>
                <input
                    id="confirmPassword"
                    type="password"
                    {...register('confirmPassword')}
                    className={`w-full rounded-md border px-3 py-2 text-sm text-gray-900 outline-none transition
            ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300 focus:border-blue-500'}`}
                    dir="rtl"
                />
                {errors.confirmPassword && (
                    <p className="mt-1 text-right text-xs text-red-600">
                        {errors.confirmPassword.message}
                    </p>
                )}
            </div>

            {errors.root && (
                <div className="mb-4 text-center text-sm text-red-600">
                    {errors.root.message}
                </div>
            )}


            <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-400"
            >
                {isSubmitting ? 'در حال ثبت‌نام...' : 'ثبت‌نام'}
            </button>
        </form>
    );
}