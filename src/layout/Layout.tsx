import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const Layout: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
