import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/loginimage.svg"
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

export default function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    
    const registerUser = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(`https://reforco-digital-backend.vercel.app/api/auth/register`, { email, password });
            toast.success(`Usuário registrado com sucesso`);
            navigate('/login');
        } catch (error) {
            if (axios.isAxiosError(error) && error.response && error.response.status === 500) {
                toast.success(`Usuário registrado com sucesso`);
                navigate('/login');
            } else if (error instanceof Error) {
                toast.error(error.message);
            }
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#0066CC] to-[#003366]">
            <div className="flex flex-col justify-center items-center border-2 rounded bg-white p-2 pb-5">
                <div className="bg-[#0570DB]">
                    <img src={loginImage} alt="" />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold">Bem-vindo ao reforço digital</h2>
                    <p className="text-lg font-medium">Crie sua conta</p>

                    <form onSubmit={registerUser} className="flex flex-col w-full">
                        <label className="mb-1">E-mail</label>
                        <div className="p-inputgroup border-2 mb-4">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-fw pi-user"></i>
                            </span>
                            <input type="text" placeholder="Digite seu e-mail" value={email} onChange={(e) => setEmail(e.target.value)} className="p-2 text-black" />
                        </div>

                        <label className="mb-1">Senha</label>
                        <div className="border-2 mb-4">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-fw pi-lock"></i>
                            </span>
                            <input type="password" placeholder="Digite sua senha" value={password} onChange={(e) => setPassword(e.target.value)} className="p-2 text-black" />
                        </div>

                        <div className="flex flex-col justift-center items-center gap-1 mt-4">
                            <button className="bg-[#0570DB] text-white p-2 w-full hover:bg-[#003366] active:">Criar</button>
                            <Link to="/login" className="flex justify-center items-center bg-[#fff] text-black border-2 border-slate-400 p-2 w-full hover:bg-slate-200 active:bg-slate-300">Já tenho uma conta</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}