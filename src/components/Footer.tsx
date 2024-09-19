import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-950 py-8 border-t-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold dark:text-white">Contact Us</h3>
            <p className="text-gray-400">Email: support@neetprep.com</p>
            <p className="text-gray-400">Phone: +91 9956298858</p>
            <p className="text-gray-400">Address: 123 NEET Street, Delhi, India</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold dark:text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-black dark:hover:text-white">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black dark:hover:text-white">Courses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-black dark:hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold dark:text-white ">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white"><Facebook /></a>
              <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white"><Twitter /></a>
              <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white"><Instagram /></a>
              <a href="#" className="text-gray-400 hover:text-black dark:hover:text-white"><Youtube /></a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} NEETprep. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
