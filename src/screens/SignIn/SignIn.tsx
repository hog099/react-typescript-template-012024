import { useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

import { InputComponent } from '@/components/atoms/Input/Input';
import { LoginTemplate } from '@/components/templates/LoginTemplate/LoginTemplate';
import { Spinner } from '@/components/atoms/Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import PATHS from '@/routes/paths';

export const SignIn = () => {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState<boolean>(false);

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Deve ser um email').required('O E-mail é obrigatório'),
        password: Yup.string().required('A Senha é obrigatória'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { handleSubmit, setError, formState, setValue, getValues, control } = useForm(formOptions);
    const { errors } = formState;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const watch = useWatch({
        control,
    });

    const onSubmit = async ({ email, password }) => {
        console.log('password: ', password);
        console.log('email: ', email);
        if (loading) return;
        try {
            setLoading(true);
            localStorage.setItem("@access_token", "validToken")
            navigate(PATHS?.dashboard?.index);
        } catch (error) {
            console.log('error: ', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <LoginTemplate>
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Faça login na sua conta</h2>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <InputComponent
                            helperText={errors?.email ? errors?.email.message : null}
                            label="Endereço de email"
                            name="email"
                            type="email"
                            placeholder="Seu email"
                            required
                            value={getValues('email')}
                            onChange={(value: string) => setValue('email', value)}
                        />

                        <InputComponent
                            helperText={errors?.password ? errors?.password.message : null}
                            label="Senha"
                            name="password"
                            type={!showPassword ? 'password' : 'text'}
                            placeholder="Sua senha"
                            required
                            value={getValues('password')}
                            onChange={(value: string) => setValue('password', value)}
                            endAddorment={
                                <button
                                    className="w-[40px] h-[25px] flex flex-col items-center bg-gray-300 hover:bg-gray-400 rounded p-1 mt-[5px] text-gray-600 font-mono cursor-pointer"
                                    onClick={() => setShowPassword(!showPassword)}
                                >
                                    <label className="text-sm font-bold cursor-pointer">{showPassword ? 'hide' : 'show'}</label>
                                </button>
                            }
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {loading ? <Spinner /> : <p className="font-bold text-md">Entrar</p>}
                        </button>
                    </div>
                </form>
            </div>
        </LoginTemplate>
    );
};
