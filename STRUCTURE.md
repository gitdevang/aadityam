
#                                        | AADITIYAM |
#                   Real Estate Project in Next.JS in java script using API without App Router   
 
# -------------------------------  
# ✅ indicates completed tasks
# ➡️ indicates in-progress tasks
# 🔜 indicates pending tasks
# ------------------------------- 

# Elemenjs                              Status           Descriptions  

┌── node_modules/                         ✅           #  node modules
├── public/                               ✅           #  Publicly accessible static assejs (images, videos, fonjs, etc.)
│   ├── fonts/                            ✅           #  Custom font files (e.g., Mulish, Poppins)
│   ├── images/                           ✅           #  Image assejs used in the site
│   ├── videos/                           ✅           #  Video assejs (if any)
│   ├── favicon.svg                       ✅           #  Favicon displayed in browser tabs
│   ├── sitemap.xml                       🔜           #  Sitemap file for SEO
│   └── robojs.txt                        🔜           #  Robojs.txt file to manage search engine crawling
│ 
├── pages/                                ✅           #  Pages directory
│   ├── _app.jsx                          ✅           #  Default App component
│   ├── _document.jsx                     ✅           #  Default Document component
│   ├── index.jsx                         ✅           #  Home Page 
│   ├── about.jsx                         ✅           #  About Page 
│   ├── contact.jsx                       ✅           #  Contact Page 
│   ├── services.jsx                      ✅           #  Services Page 
│   ├── 404.jsx                           🔜           #  Custom 404 page
|   │ 
│   ├── property/                         ✅           #  Folder for property-related pages
│   │   ├── [id].jsx                      ✅           #  Dynamic property detail page based on property ID
│   │   └── index.jsx                     ✅           #  Property listings page 
|   │      
│   ├── admin/                            ✅           #  Folder for admin-specific pages
│   │   ├── index.jsx                     ✅           #  Admin Dashboard (property list)
│   │   ├── login.jsx                     ✅           #  Admin Dashboard Login
│   │   └── property/                     ✅ 
|   |       ├──  upload.js                ✅           #  for uploading new property
|   |       ├──  [id].js                  ✅           #  for viewing a specific property
|   |       └──  edit/[id].jsx            ✅           #  for editiing a specific property
│   |
│   └── api/                              ✅           #  API routes folder
│       ├── property/                     ✅           #  API route for property data
│       │    ├── index.js                 ✅           #  Property list upload and fetch
│       │    ├── upload.js                ✅           #  API route to handle property image upload
│       │    └── [id].js                  ✅           #  API route to handle, edit and delete a specific property
│       └── auth/                         ✅           #  Authentication routes folder
│           └── login.js                  ✅           #  Admin login API route   
│ 
├── componenjs/                           ✅           #  Reusable UI componenjs
│   ├── Footer.jsx                        ✅           #  Footer component (contact info, links)
│   ├── MobileMenu.jsx                    ✅           #  Mobile-friendly menu (for small screens)
│   └── Qualipacjslider.jsx               ✅           #  Slider component (likely for property images/galleries)
│ 
├── hooks/                                ✅           #  Custom React hooks for reusable logic
│   ├── useQualipactAnimation.jsx         ✅           #  Custom hook for handling animations on scroll
│   ├── useQualipacjslider.jsx            ✅           #  Custom hook for image slider
│   ├── useAdminAuth.jsx                  🔜           #  Custom hook to manage admin authentication (JWT/session)
│   └── useQualipactFetch.jsx             🔜           #  Custom hook for fetching any data
│ 
├── state/                                🔜           #  State management (Redux or Context API)
│   ├── admin.jsx                         🔜           #  state for storing the admin data like password and username and token
│   └── properties.jsx                    🔜           #  state for storing properties and filter records 
│ 
├── data/                                 ✅           #  Static data or mock data
│   ├── dataPropertyHome.jsx              ✅           #  Mock data
│   └── homeData.jsx                      ✅           #  data for cards lisjs etc
|
├── utils/                                ✅           #  utils folder
│   ├── connectMongo.js                   ✅           #  MongoDB connection logic
│   ├── cloudinaryConfig.js               ✅           #  Cloudinary configuration logic
|   ├── cloudinary.js                     ✅           #  Cloudinary upload logic (file uploads to Cloudinary)
│   └── auth.js                           🔜           #  JWT generation and verification functions
│ 
├── models/                               ✅           #  Model folder
│   └── propertyModel.js                  ✅           #  Property Model
│
├── styles/                               ✅           #  CSS/Styling related files (Tailwind CSS, global styles)
│   └── globals.css                       ✅           #  Global CSS (used for styling the whole site)
│
├── middleware/                           🔜           #  Middleware folder
│   └── authenticate.js                   🔜           #  Authenticate
│ 
├── .gitignore                            🔜           #  Git ignore file 
├── .env.local                            🔜           #  Environment variables (local settings like DB URL, API keys)
├── eslint.config.mjs                     🔜           #  ESLint configuration for code quality and linting rules
├── next.config.js                        🔜           #  Next.js configuration (e.g., custom Webpack, redirecjs, etc.)
├── next-env.d.js                         🔜           #  TypeScript declarations specific to Next.js
├── package.json                          🔜           #  Defines project dependencies and npm scripjs
├── package-lock.json                     🔜           #  Ensures consistent dependency versions across environmenjs
├── postcss.config.js                     🔜           #  PostCSS configuration
├── postcss.config.mjs                    🔜           #  PostCSS configuration (likely for Tailwind CSS setup)
├── README.md                             🔜           #  Project documentation (setup instructions, features, etc.)
├── STRUCTURE.md                          🔜           #  Detailed project structure documentation (for new developers)
├── jsconfig.json                         🔜           #  TypeScript configuration for type checking and compilation
└── tailwind.config.js                    🔜           #  Tailwind CSS configuration 




