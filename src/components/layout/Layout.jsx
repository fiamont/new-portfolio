import { Navigation, Footer } from "../index.js";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className="pt-0 ps-2 ps-sm-3 ps-md-4 ps-lg-5 pe-2 pe-sm-3 pe-md-4 pe-lg-5">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
