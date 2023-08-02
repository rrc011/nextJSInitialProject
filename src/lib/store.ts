import { create } from 'zustand'

// Define el tipo de los datos del estado
interface SessionData {
    user: {
        name: string;
        email: string;
        image: string;
    };
    expires: string;
}

interface TokenData {
    name: string;
    email: string;
    picture: string;
    sub: string;
    id: string;
    iat: number;
    exp: number;
    jti: string;
}

interface AppState {
    session: SessionData | null;
    token: TokenData | null;
    setSessionData: (data: any) => void;
    setTokenData: (data: any) => void;
}

const useStore = create<AppState>((set) => ({
    session: null,
    token: null,
    setSessionData: (data: SessionData) => set({ session: data }),
    setTokenData: (data: TokenData) => set({ token: data }),
}));

export default useStore;