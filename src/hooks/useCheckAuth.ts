import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {getAuth, onAuthStateChanged} from "firebase/auth";

export const useCheckAuth = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const auth = getAuth();
        onAuthStateChanged(auth, (user)=>{
            if (!user) navigate("/fox-library")}
        );
    },[])
}