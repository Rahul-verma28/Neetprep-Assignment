"use client"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import heroImage from "@/public/hero.webp";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <section className="bg-blue-50 dark:bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-6">
              Crack NEET with Expert Guidance
            </h1>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8">
              Join the thousands of successful NEET aspirants who trust NEETprep
              for their exam preparation. Get the latest study material, video
              lectures, and practice tests.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <Button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
                Start Learning
              </Button>
              <Button
                variant="outline"
                className="text-blue-600 border-blue-600 px-6 py-3 rounded-md hover:bg-blue-100 hover:dark:bg-black"
              >
                Free Trial
              </Button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={heroImage}
              alt="NEET students"
              width={400}
              height={400}
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default HeroSection;
