import loginImage from "../assets/loginimage.svg"

export default function Login() {
    return (
        <div className="flex justify-center items-center h-screen bg-gradient-to-r from-[#0066CC] to-[#003366]">
            <div className="flex flex-col justify-center items-center border-2 rounded bg-white p-2 pb-5">
                <div className="bg-[#0570DB]">
                    <img src={loginImage} alt="" />
                </div>

                <div className="flex flex-col justify-center items-center">
                    <h2 className="text-2xl font-bold">Bem-vindo ao reforço digital</h2>
                    <p className="text-lg font-medium">Faça login para continuar</p>

                    <form className="flex flex-col w-full">
                        <label className="mb-1">E-mail</label>
                        <div className="p-inputgroup border-2 mb-4">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-fw pi-user"></i>
                            </span>
                            <input type="text" placeholder="Digite seu e-mail" className="p-2 text-black" />
                        </div>

                        <label className="mb-1">Senha</label>
                        <div className="border-2 mb-4">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-fw pi-lock"></i>
                            </span>
                            <input type="password" placeholder="Digite sua senha" className="p-2 text-black" />
                        </div>

                        <div className="flex flex-col justift-center items-center gap-1 mt-4">
                            <button className="bg-[#0570DB] text-white p-2 w-full hover:bg-[#003366] active:">Entrar</button>
                            <button className="bg-[#fff] text-black border-2 border-slate-400 p-2 w-full hover:bg-slate-200 active:bg-slate-300">Criar uma conta</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}