import {useContext, useEffect} from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {useNavigate} from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import {db} from "../../config/firebase";

const Profile = () => {
    const { user, logOut, loading } = useContext(AuthContext);

    // Use the useNavigate hook to programmatically navigate between pages
    const navigate = useNavigate();

    useEffect(() => {
        const getUserData = async () => {
            try {
                const userDoc = doc(db, "users", "tmxYxAmM11j1tAludufI");
                const document = await getDoc(userDoc)
                    .then((doc) => {
                        if (doc.exists()) {
                            console.log("Данные документа:", doc.data());
                        } else {
                            console.log("Документ не найден!");
                        }
                    })

            } catch (e){

            }
        }
        getUserData();
    }, []);

    // Handle user logout
    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate("/login"); // Redirect to the login page after logout
            })
            .catch((error: Error) => console.error(error));
    };

    // Render user's profile information
    return (
        <div>
            <button className="bg-black text-white text-4xl px-5 py-6" onClick={handleSignOut}>Выйти</button>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 className="text-5xl font-bold">{user?.displayName}</h1>
                        <p className="py-6">{user?.email}</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;