import { ThemeProvider } from "next-themes";
import "../css/tailwind.css";
import UserContextProvider from "../context/UserContext";
import ContractContextProvider from "../context/ContractContext";
import Navbar from "components/_shared/Navbar";
import Footer from "components/_shared/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <UserContextProvider>
                <ContractContextProvider>
                    <Navbar />
                    <Component {...pageProps} />
                    <Footer />
                </ContractContextProvider>
            </UserContextProvider>
        </ThemeProvider>
    );
}

export default MyApp;
