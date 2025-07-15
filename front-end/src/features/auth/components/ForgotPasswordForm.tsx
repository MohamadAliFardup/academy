'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { forgotSchema, type ForgotFormData } from '../lib/schemas';
import { useState } from 'react';

export default function ForgotPasswordForm() {
    const [sent, setSent] = useState(false);

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<ForgotFormData>({ resolver: zodResolver(forgotSchema) });

    const onSubmit = async (values: ForgotFormData) => {
        try {
            await new Promise((res) => setTimeout(res, 1000));
            setSent(true);
        } catch (err: any) {
            setError('root', { message: err.message ?? 'ارسال ایمیل ناموفق بود' });
        }
    };

    if (sent) {
        return (
            <div className="mx-auto mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md text-center">
                <h2 className="text-lg font-semibold text-gray-800">
                    لینک بازنشانی رمز عبور به ایمیل شما ارسال شد.
                </h2>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mt-10 w-full max-w-xs sm:max-w-sm md:max-w-md"
            dir="rtl"
            noValidate
        >
            <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">
                بازیابی رمز عبور
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
                {isSubmitting ? 'در حال ارسال...' : 'ارسال لینک'}
            </button>
        </form>
    );
}