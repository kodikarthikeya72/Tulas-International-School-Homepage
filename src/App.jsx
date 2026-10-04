import { useMobileMenu } from "./hooks/useMobileMenu";
import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import CustomCursor from "./components/animation/CustomCursor";
import ScrollProgress from "./components/animation/ScrollProgress";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Academics from "./sections/Academics";
import Life from "./sections/Life";
import Sports from "./sections/Sports";
import Campus from "./sections/Campus";
import Quote from "./sections/Quote";
import Testimonials from "./sections/Testimonials";
import Admissions from "./sections/Admissions";
export default function App() {
  const [dark, setDark] = useTheme();
  const [menu, setMenu] = useMobileMenu();
  return (
    <div className="app">
      <ScrollProgress />
      <CustomCursor />
      <Navbar dark={dark} setDark={setDark} menu={menu} setMenu={setMenu} />
      <main id="top">
        <Hero />
        <About />
        <Academics />
        <Life />
        <Sports />
        <Campus />
        <Quote />
        <Testimonials />
        <Admissions />
      </main>
      <Footer />
    </div>
  );
}
