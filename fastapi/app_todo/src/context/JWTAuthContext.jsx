import { createContext, useReducer, useEffect, useRef } from "react"
import { validateToken } from "../utils/jwt"
import { setSession, resetSession } from "../utils/session"
import axiosInstance from "../services/axios"

const initialState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null
};

export const AuthContext = createContext({
    ...initialState,
    login: () => Promise.resolve(),
    logout: () => Promise.resolve()
});

const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, user } = action.payload;
        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        }
    },
    LOGIN: (state, action) => {
        const { user } = action.payload;
        return {
            ...state,
            isAuthenticated: true,
            user
        }
    },
    LOGOUT: (state) => {
        return {
            ...state,
            isAuthenticated: false,
            user: null
        }
    }
};

const reducer = (state, action) => handlers[action.type] ? handlers[action.type](state, action) : state;

export const AuthProvider = (props) => {
    const { children } = props;
    const [state, dispatch] = useReducer(reducer, initialState);
    const isMounted = useRef(false);
    
    useEffect(() => {
        if(isMounted.current) return;
        const initialize = async () => {
            try{
                const accessToken = localStorage.getItem("accessToken");
                if(accessToken && validateToken(accessToken)){
                    //Código para validar o token
                    setSession(accessToken);
                    const response = await axiosInstance.get("/user/me");
                    const {data: user} = response;
                    dispatch({type: "INITIALIZE", payload: {isAuthenticated: true, user}});
                } else {
                    dispatch({type: "INITIALIZE", payload: {isAuthenticated: false, user: null}});
                }
            }catch(error){
                console.error(error);
                dispatch({type: "INITIALIZE", payload: {isAuthenticated: false, user: null}});
            }
        };
        initialize();
        isMounted.current = true;
    }, []);

    const getTokens = async(email, password) => {
        const formData = new FormData();
        formData.append("username", email);
        formData.append("password", password);
        try{
            const response = await axiosInstance.post("/auth/login", formData);
            setSession(response.data.access_token, response.data.refresh_token);
        }catch(error){
            console.error(error);
        }
    }

    const login = async (email, password) => {
        try{
            await getTokens(email, password);
            const response = await axiosInstance.get("/user/me");
            const {data: user} = response;
            dispatch({type: "LOGIN", payload: {user}});
        }catch(error){
            console.error(error);
        }
    }

    const logout = async () => {
        resetSession();
        dispatch({type: "LOGOUT"});
    }

    return (
        <AuthContext.Provider value={{...state, login, logout}}>
            { children }
        </AuthContext.Provider>
    )
}

export const AuthConsumer = AuthContext.Consumer;


