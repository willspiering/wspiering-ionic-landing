import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen font-inter">
            <Navigation />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;