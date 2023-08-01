import NavBar from "./NavBar";
import Footer from "./Footer";
function Layout({ children }) {
  return (
    <div className="layout">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
