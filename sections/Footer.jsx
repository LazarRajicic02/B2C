// components/Footer.js
import Logo from "@/public/static/images/WhiteBackground.jpg";
import Instagram from "@/public/static/images/instagram.png";
import Youtube from "@/public/static/images/youtube.png";
import Facebook from "@/public/static/images/facebook.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center lg:flex-row lg:justify-between space-y-8 lg:space-y-0 lg:space-x-8 lg:items-start ">
          <div className="flex flex-col space-y-6">
            <Image
              src={Logo}
              alt="Ringz & Thingz Logo"
              className="h-10"
              width={300}
              height={150}
              priority={true}
            />
            <div className="flex space-x-4 m-auto">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Image src={Instagram} width={30} height={30} alt="instagram" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Image src={Facebook} width={30} height={30} alt="facebook" />
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                <Image src={Youtube} width={30} height={30} alt="youtube" />
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-2 lg:w-1/4">
            <h3 className="text-lg font-semibold text-gray-900">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Customer Care
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Email us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Store Locator
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col space-y-2 lg:w-1/4">
            <h3 className="text-lg font-semibold text-gray-900">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Express Delivery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  How to Return
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Return Label
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col space-y-2 lg:w-1/4">
            <h3 className="text-lg font-semibold text-gray-900">Our Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Investor Relations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  Press
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <div className="border-t pt-8 border-gray-200  space-y-4 lg:space-y-0 lg:flex-row lg:justify-between lg:items-center">
            <div className="flex flex-wrap justify-center space-x-4">
              <a href="#" className="text-gray-600 hover:text-gray-900">
                FAQ
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Help & Contact
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Privacy Statement
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900">
                Terms & Conditions
              </a>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-4">
            &copy; 2024 Ringz & Thingz DOO | All rights reserved. Powered by
            Croonus Technologies.
          </p>
        </div>
      </div>
    </footer>
  );
}
