import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import useSignUpForm from "../FormSignUp/hooks/useSignUpForm";
import {db} from "../../config/firebase";
import {setDoc, doc} from "firebase/firestore";
import LogoMaracuya from "../../assets/icons/LogoMaracuya/LogoMaracuya";

const SignUp = () => {
    const { createUser, user, loading } = useContext(AuthContext);
    const [selectedImage, setSelectedImage] = useState(null);
    const navigate = useNavigate();
    const {
        firstName,
        setFirstName,
        lastName,
        emailInp,
        setEmailInp,
        setLastName,
        address,
        setAddress,
        password,
        setPassword,
    } = useSignUpForm();

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

    const createUserDb = async (fName: string, lName: string, address: string, userId: string) => {
        if(!fName || ! lName || !address || userId) return alert('Не все поля заполнены');
        try {
            const docRef = await setDoc(doc(db, "users", userId), {
                fullName: fName + " " + lName,
                address,
                imageUrl: "",
                orders: [''],
                userId,
                userRole: "customer"
            });
        } catch (e) {

        }
    }

    // Handle form submission for user registration
    const handleFormSubmit = (e: any) => {
        e.preventDefault();
        const fName = firstName;
        const lName = lastName;
        const addr = address;
        const email = emailInp;
        const pass = password;
        createUser(email, pass)
            .then((result: any) => {
                // Update user profile with display name
                updateProfile(result.user, {
                    displayName: fName + " " + lName,
                });
                // createDB
                const res = createUserDb(fName, lName, addr, result.user.uid);
                navigate("/");
                // console.log(result);
            })
            .catch((error: Error) => {
                console.log(error);
            });
        e.target.reset();
    };

    // Handle image upload (not shown in the code, but you can add it)

    // Render the sign-up form
    return (
        <div className="min-h-screen">
            <div className="flex flex-col justify-evenly items-center w-full h-full text-3xl">
                <LogoMaracuya enter={() => navigate("/")} w={250} h={250}/>
                <form className="max-w-[920px] px-[20px] w-full flex flex-col gap-[25px] items-center justify-center"
                      onSubmit={handleFormSubmit}>
                    <div className="w-full flex flex-col gap-[15px]">
                        <label htmlFor="firstName">
                            <span>Имя</span>
                        </label>
                        <input
                            className="text-5xl px-[20px] h-[155px] border rounded-full w-full"
                            value={firstName}
                            onChange={(e) => setFirstName((prev) => prev = e.target.value)}
                            type="text"
                            name="fName"
                            placeholder="Введите ваше имя"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-[15px]">
                        <label htmlFor="lastName">
                            <span>Фамилия</span>
                        </label>
                        <input
                            className="text-5xl px-[20px] h-[155px] border rounded-full w-full"
                            value={lastName}
                            onChange={(e) => setLastName((prev) => prev = e.target.value)}
                            type="text"
                            name="lName"
                            placeholder="Введите вашу фамилию"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-[15px]">
                        <label htmlFor="lastName">
                            <span>Адрес</span>
                        </label>
                        <input
                            className="text-5xl px-[20px] h-[155px] border rounded-full w-full"
                            value={address}
                            onChange={(e) => setAddress((prev) => prev = e.target.value)}
                            type="text"
                            name="address"
                            placeholder="Введите ваш адрес"
                        />
                    </div>
                    <div className="w-full flex flex-col gap-[15px]">
                        <label htmlFor="email">
                            <span>Электронная Почта</span>
                        </label>
                        <input
                            className="text-5xl px-[20px] h-[155px] border rounded-full w-full"
                            value={emailInp}
                            onChange={(e) => setEmailInp((prev) => prev = e.target.value)}
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
                        <button className="rounded-full text-5xl py-[50px] border bg-[var(--yellow-main)]">Регистрация
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;