import React from "react";
import { Github, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Culinary Explorer</h3>
            <p className="text-gray-400 mt-2">Discover amazing meals and cocktails</p>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-purple-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Culinary Explorer. All rights reserved.</p>
          <p className="mt-2">Data provided by TheMealDB and TheCocktailDB</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
