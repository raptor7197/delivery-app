export const AppContext = createContext();

export const AppProvider = ({ children }) => {
   const navigate = useNavigate();
   const [user, setUser] = useState(null);
    const [seller, setIsseller] = useState(false);
    const value = {navigate , user, setUser, seller, setIsseller};
    const [isLoading, setIsLoading] = useState(false);
    
    return (
        <AppContext.Provider>
        {children}
        </AppContext.Provider>
    );
}
export const useAppContext = () => {
    return useContext(AppContext);
}