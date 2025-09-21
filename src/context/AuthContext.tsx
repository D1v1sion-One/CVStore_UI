import React, {createContext, useState, useEffect, ReactNode, useContext} from 'react';
// import axios from 'axios';
// import * as SecureStore from 'expo-secure-store';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { validateToken, login, register } from './auth';

const JWT_API = "YOUR API ENDPOINT";
const AUTH_KEY_VALUE= "THIS-IS-WILL-Be-SpeCiaL-AUthCode";

type AuthContextType = {
    user: any | null;
    token: string | null;
    loading: boolean;
    role: string | null;
    signup: (username: string, email: string, password: string, role: string) => Promise<void>;
    login: (username: string, password: string) => Promise<void>;
    //googleLogin: () => Promise<void>;
    logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({children} : { children: ReactNode }) => {
    const [user, setUser] = useState<any[] | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [role, setRole] = useState<string | null>('')

    useEffect(() => {
        const loadToken = async () => {
            //load and validate your token stored in securestore or asyncstorage
        }

        loadToken();
    }, []);

    const fetchProfile = async (jwt: string) => {
        //fetch user's profile using your token
    }

    const signup = async (username: string, email: string, password: string, role: string) => {
        //register an account
    }

    const login = async(username: string, password: string) => {
        //login and get a token, which will be used for authorization
        //store the token using securestore or asyncstorage
    }

    const logout = async () => {
        //delete your token stored in securestore or asyncstorage
    }

    return(
        <AuthContext.Provider value={{user, token, loading, role, signup, login, logout}}>
            {children}
        </AuthContext.Provider>
    )

}
