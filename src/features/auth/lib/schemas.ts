import { z } from 'zod';

export const loginSchema = z.object({
    email: z.string().email('ایمیل معتبر نیست'),
    password: z.string().min(6, 'رمز عبور حداقل ۶ کاراکتر باشد'),
});

export const registerSchema = loginSchema
    .extend({
        name: z.string().min(2, 'نام حداقل ۲ کاراکتر باشد'),
        confirmPassword: z.string(),
    })
    .refine((d) => d.password === d.confirmPassword, {
        message: 'تکرار رمز عبور هم‌خوان نیست',
        path: ['confirmPassword'],
    });

export const forgotSchema = z.object({
    email: z.string().email('ایمیل معتبر نیست'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type ForgotFormData = z.infer<typeof forgotSchema>;