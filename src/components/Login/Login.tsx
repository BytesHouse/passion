import {FormEvent, useContext, useState} from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import LogoMaracuya from "../../assets/icons/LogoMaracuya/LogoMaracuya";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const { loginUser, loading, user } = useContext(AuthContext);
    const navigate = useNavigate();

    // If authentication is still loading, display a loading indicator
    if (loading) {
        return (
            <span className="loading loading-dots loading-lg flex item-center mx-auto"></span>
        );
    }

    // If the user is already authenticated, redirect to the home page
    if (user) {
        navigate("/");
    }

    // Handle form submission for user login
    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        const em = email;
        const pass = password;
            loginUser(em, pass)
                .then((result: any) => {
                    navigate("/");
                })
                .catch((error: Error) => {
                    console.log(error.message)
                })

        e.target.reset();
    };

    // Render the login form
    return (
        <div className="min-h-screen">
            <div className="flex flex-col justify-evenly items-center w-full h-full text-3xl">
                <LogoMaracuya enter={() => navigate("/")} w={250} h={250}/>
                <form className="max-w-[920px] px-[20px] w-full flex flex-col gap-[25px] items-center justify-center"
                      onSubmit={handleFormSubmit}>
                    <div className="w-full flex flex-col gap-[15px]">
                        <label htmlFor="email">
                            <span>Электронная Почта</span>
                        </label>
                        <input
                            className="text-5xl px-[20px] h-[155px] border rounded-full w-full"
                            value={email}
                            onChange={(e) => setEmail((prev) => prev = e.target.value)}
                            type="email"
                            name="email"
                            placeholder="Введите вашу почту"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-[15px]">
                        <label>
                            <span>Пароль</span>
                        </label>
                        <input
                            className="text-5xl px-[20px] h-[155px] border rounded-full w-full"
                            value={password}
                            onChange={(e) => setPassword((prev) => prev = e.target.value)}
                            type="password"
                            name="password"
                            placeholder="Введите пароль"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-[15px]">
                        <button className="rounded-full text-5xl py-[50px] border bg-[var(--yellow-main)]">Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;