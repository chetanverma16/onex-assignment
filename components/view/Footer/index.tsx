// Components
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import { Separator } from "@/components/ui/separator";
import LanguageSelector from "../Navbar/LanguageSelector";

const navigation = {
  evfy: [
    { name: "Home", href: "/" },
    { name: "About EVFY", href: "/" },
    { name: "Contact Us", href: "/" },
    { name: "FAQ", href: "/" },
  ],
  evcars: [
    { name: "EV Brands", href: "/" },
    { name: "Car Types", href: "/" },
    { name: "EV Types", href: "/" },
  ],
  newsandguides: [
    { name: "Top News", href: "/" },
    { name: "EV Guides", href: "/" },
  ],
  terms: [
    { name: "Cookies", href: "/" },
    { name: "Privacy", href: "/" },
    { name: "Legal", href: "/" },
  ],
};

const Footer = () => {
  return (
    <div className="wrapper sm:px-10 px-10 lg:px-0">
      <div className="my-20 flex flex-col items-start md:flex-row justify-between">
        <div className="flex flex-col items-start gap-y-4">
          <Logo />
          <h2 className="text-xl font-medium">
            Stay up to date on the <br /> latest EVFY news
          </h2>
          <p className="max-w-xs text-gray-500">
            Our newsletters are a concentrated blast of all the latest from
            EVFY: news, events, product information and more.
          </p>
          <Button variant="default">Subscribe</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-10 md:py-0">
          {/* EVFY */}
          <div className="flex items-start flex-col gap-y-4 lg:items-start">
            <h2 className="font-semibold">EVFY</h2>
            <div className="flex flex-col gap-2">
              {navigation.evfy.map((item) => (
                <Link
                  className="text-gray-600 hover:text-gray-900 transition-all duration-100 ease-in-out"
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          {/* EV Cars */}
          <div className="flex items-start flex-col gap-y-4 lg:items-start">
            <h2 className="font-semibold">EV Cars</h2>
            <div className="flex flex-col gap-2">
              {navigation.evcars.map((item) => (
                <Link
                  className="text-gray-600 hover:text-gray-900 transition-all duration-100 ease-in-out"
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* News & Guides */}
          <div className="flex items-start flex-col gap-y-4 lg:items-start">
            <h2 className="font-semibold">News & Guides</h2>
            <div className="flex flex-col gap-2">
              {navigation.newsandguides.map((item) => (
                <Link
                  className="text-gray-600 hover:text-gray-900 transition-all duration-100 ease-in-out"
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div className="flex items-start flex-col gap-y-4 lg:items-start">
            <h2 className="font-semibold">Terms</h2>
            <div className="flex flex-col gap-2">
              {navigation.terms.map((item) => (
                <Link
                  className="text-gray-600 hover:text-gray-900 transition-all duration-100 ease-in-out"
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Separator orientation="horizontal" className="my-6" />
      <div className="flex items-center justify-between py-6">
        <span className="text-xs text-gray-500">
          © 2021 EVFY, Inc. All rights reserved.
        </span>
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Footer;
