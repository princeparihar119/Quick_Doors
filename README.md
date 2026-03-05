Follow these steps to get your local development environment running.

1. Clone the Repository
Bash
git clone https: github link
cd quick door
2. Backend Setup
Navigate to the server directory and set up your environment:

Bash
cd server
npm install
Create a .env file in the server folder and add the following:

Code snippet
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key

# Cloudinary (Image Hosting)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Payment Gateway (Stripe/Razorpay)
STRIPE_SECRET_KEY=sk_test_your_key

# Email Service (Resend)
RESEND_API_KEY=re_your_resend_api_key

Start the server: nodemon index.js

Bash
npm run dev
3. Frontend Setup (Vite)
Navigate to the client directory and install dependencies:

Bash
cd client
npm install
Create a .env file in the client folder:

Code snippet
VITE_API_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=pk_test_your_key
Start the development server:

Bash
npm run dev
