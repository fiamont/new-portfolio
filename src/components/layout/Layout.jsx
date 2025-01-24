import { Navigation, Footer } from "../index.js";

const Layout = ({ children }) => {
  return (
    <div>
      <Navigation />
      <main className="p-2 p-sm-3 p-md-4 p-lg-5">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
