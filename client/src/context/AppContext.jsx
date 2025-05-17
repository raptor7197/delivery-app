export const AppContext = createContext();

export const AppProvider = ({ children }) => {
   const navigate = useNavigate();
   const [user, setUser] = useState(null);
    const [seller, setIsseller] = useState(false);
    
    return (
        <AppContext.Provider>
        {children}
        </AppContext.Provider>
    );
}