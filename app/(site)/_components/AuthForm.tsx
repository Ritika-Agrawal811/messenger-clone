"use client"

import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"
import { BsGithub, BsGoogle } from "react-icons/bs"
import clsx from "clsx"

// components
import Input from "@/app/_components/inputs/Input"
import Button from "@/app/_components/Button"
import AuthSocialButton from "./AuthSocialButton"

type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>("LOGIN")
    const [isLoading, setIsLoading] = useState(false)

    // initializing react hook form & getting its methods
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            email: "",
            password: "",
        },
    })

    // a function to handle the submit event of auth form
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)
        if (variant === "REGISTER") {
            // Axios Register
        }

        if (variant === "LOGIN") {
            // Next Auth Signin
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true)

        // Next Auth Social Sign In
    }

    // a function to toggle between 2 variants of auth form : Login and Register
    const toggleVariant = useCallback(() => {
        variant === "LOGIN" ? setVariant("REGISTER") : setVariant("LOGIN")
    }, [variant])

    return (
        <section
            className={clsx("mx-auto w-11/12 max-w-md ", "mt-10 bg-white shadow sm:rounded-lg", "px-4 py-8 sm:px-10")}
        >
            <form className='space-y-6' onSubmit={handleSubmit(onSubmit)}>
                {variant === "REGISTER" && (
                    <Input
                        id='name'
                        label='Name'
                        register={register}
                        errors={errors}
                        type='text'
                        disabled={isLoading}
                    />
                )}

                <Input
                    id='email'
                    label='Email address'
                    type='email'
                    register={register}
                    errors={errors}
                    disabled={isLoading}
                />
                <Input
                    id='password'
                    label='Password'
                    type='password'
                    register={register}
                    errors={errors}
                    disabled={isLoading}
                />
                <Button disabled={isLoading} fullWidth type='submit'>
                    {variant === "LOGIN" ? "Sign in" : "Register"}
                </Button>
            </form>

            <div
                className={clsx(
                    "my-4 text-center text-sm font-medium",
                    "relative z-10 before:absolute before:left-0 before:top-1/2 before:-z-10 before:h-[1.5px] before:w-full before:bg-gray-300"
                )}
            >
                <span className='bg-white px-2 text-gray-500'>OR</span>
            </div>

            <div className='flex gap-2'>
                <AuthSocialButton icon={BsGithub} onClick={() => socialAction("github")} />
                <AuthSocialButton icon={BsGoogle} onClick={() => socialAction("google")} />
            </div>

            <p className='mt-6 text-center text-sm text-gray-500'>
                {variant === "LOGIN" ? "New to messenger?" : "Already have an account?"}
                <a href='#' className='cursor-pointer font-semibold text-sky-500' onClick={toggleVariant}>
                    {" "}
                    {variant === "LOGIN" ? "Create an account" : "Login"}
                </a>
            </p>
        </section>
    )
}

export default AuthForm
