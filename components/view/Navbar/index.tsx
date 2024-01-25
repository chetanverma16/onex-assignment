import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import LanguageSelector from "./LanguageSelector";
import { Navigation } from "./NavigationMenu";

const Navbar = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between wrapper p-6 lg:px-0">
      <div className="flex items-center gap-x-4">
        <Logo />
        <Navigation />
      </div>
      <div className="flex items-center gap-x-4">
        <LanguageSelector openTop />
        <Button variant="ghost">Log In / Sign Up</Button>
      </div>
    </div>
  );
};

export default Navbar;
