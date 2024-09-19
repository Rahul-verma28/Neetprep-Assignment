
const products = [
  {
    id: 1,
    name: "NEET Online Video Course",
    rating: 4.6,
    price: 149.99,
    isNew: true,
    description:
      "Comprehensive NEET video course covering Physics, Chemistry, Botany, and Zoology. Access video lectures from top educators, specifically designed to help students prepare for NEET 2024.",
    images: ["https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg", "https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg", "https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg"],
  },
  {
    id: 2,
    name: "NEET Test Series",
    rating: 4.6,
    price: 79.99,
    isNew: false,
    description:
      "A curated test series with NEET pattern-based mock tests. Analyze your performance with detailed solutions and performance metrics.",
    images: ["https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg", "https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg", "https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg"],
  },
  {
    id: 3,
    name: "NEET Crash Course",
    rating: 4.0,
    price: 199.99,
    isNew: true,
    description:
      "Short-term intensive crash course focusing on high-yield topics for NEET. Includes live sessions, video tutorials, and chapter-wise tests.",
    images: ["https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg", "https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg", "https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg"],
  },
  {
    id: 4,
    name: "NEET Physics Syllabus",
    rating: 4.6,
    price: 49.99,
    isNew: true,
    description:
      "Detailed NEET Physics syllabus course, including topics like Thermodynamics, Electrostatics, and more. Includes tests, videos, and doubt-clearing sessions.",
    images: ["https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg", "https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg", "https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg"],
  },
  {
    id: 5,
    name: "NEET Chemistry Syllabus",
    rating: 4.6,
    price: 49.99,
    isNew: true,
    description:
      "NEET Chemistry syllabus with topics like Chemical Bonding, Thermodynamics, and Surface Chemistry. Video lessons and quizzes for each chapter.",
    images: ["https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg", "https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg", "https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg"]
  },
  {
    id: 6,
    name: "NEET Zoology Syllabus",
    rating: 4.9,
    price: 59.99,
    isNew: true,
    description:
      "In-depth NEET Zoology syllabus, covering key areas such as Human Physiology, Genetics, and Evolution. Includes chapter-wise tests and interactive quizzes.",
    images: ["https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg", "https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg", "https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg"],
  },
  {
    id: 7,
    name: "NEET Botany Syllabus",
    rating: 4.0,
    price: 59.99,
    isNew: false,
    description:
      "Complete Botany syllabus for NEET, covering topics like Plant Physiology, Genetics, and Ecology. Includes test papers and solutions for each topic.",
    images: ["https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg", "https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg", "https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg"],
  },
  {
    id: 8,
    name: "AIIMS Test Series",
    rating: 4.6,
    price: 99.99,
    isNew: false,
    description:
      "A dedicated test series for AIIMS aspirants. Detailed questions with in-depth solutions, designed to improve accuracy and speed.",
    images: ["https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg", "https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg", "https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg"],
  },
  {
    id: 9,
    name: "Biology Full Course",
    rating: 4.6,
    price: 69.99,
    isNew: false,
    description:
      "Complete biology course, encompassing both Botany and Zoology. Perfect for NEET students looking to solidify their understanding in life sciences.",
    images: ["https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg", "https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg", "https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg"],
  },
  {
    id: 10,
    name: "NEET Biology Quick Revision",
    rating: 3.8,
    price: 39.99,
    isNew: false,
    description:
      "Quick revision course for NEET Biology, covering the most important topics and key points to remember before the exam.",
    images: ["https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg", "https://dwns1r2geopuk.cloudfront.net/assets/target-24-5b0d0f0382fad34315e6e098af213bd74c749f7923093bb3aaa4d494168c15ba.svg", "https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg","https://dwns1r2geopuk.cloudfront.net/assets/credit-section-video-thumbnail-4e7aa593504027e6c690a2d861ae6c0c393421da1b0511334095c49978a9a7da.svg"],
  },
];

export default products;
