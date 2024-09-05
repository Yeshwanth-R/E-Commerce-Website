# E-Commerce Website

This repository contains the code for a full-stack e-commerce web application. The project is built using modern technologies and frameworks to deliver a responsive, fast, and user-friendly shopping experience. The application includes both an admin panel for product and order management and a frontend for customer interaction.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Admin Panel](#admin-panel)
- [Frontend](#frontend)
- [Authentication](#authentication)
- [Image Storage](#image-storage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Responsive Design**: The application is designed to be mobile-friendly and responsive across various devices.
- **Admin Panel**: Allows administrators to manage products, categories, and orders.
- **Authentication**: Google and GitHub login integration using NextAuth.js.
- **Image Storage**: Amazon Cloud Service (AWS S3) for secure and scalable image storage.
- **Product Search and Filtering**: Search products by category, price, or keywords.
- **Cart and Checkout**: Secure and seamless checkout process with Stripe integration.
- **Order Management**: Admins can view and update order statuses, and customers can view their order history.

---

## Tech Stack

- **Frontend**: Next.js, React, TailwindCSS
- **Backend**: Node.js, Express, MongoDB (Mongoose)
- **Authentication**: NextAuth.js with Google and GitHub providers
- **Image Storage**: Amazon AWS S3 for storing product images
- **Payment Gateway**: Stripe API for handling payments
- **State Management**: React Context API
- **HTTP Client**: Axios
- **Deployment**: Vercel, AWS

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/e-commerce-website.git
   cd e-commerce-website
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure environment variables:**

   Create a `.env.local` file in the root directory with the following keys:

   ```bash
   MONGODB_URI=your-mongodb-connection-string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key
   GOOGLE_CLIENT_ID=your-google-client-id
   GOOGLE_CLIENT_SECRET=your-google-client-secret
   GITHUB_CLIENT_ID=your-github-client-id
   GITHUB_CLIENT_SECRET=your-github-client-secret
   AWS_ACCESS_KEY_ID=your-aws-access-key-id
   AWS_SECRET_ACCESS_KEY=your-aws-secret-access-key
   AWS_BUCKET_NAME=your-s3-bucket-name
   STRIPE_SECRET_KEY=your-stripe-secret-key
   ```

4. **Run the development server:**

   Once you've set up the environment variables, you can run the development server with:

   ```bash
   npm run dev
   ```

   This will start the application at `http://localhost:3000`.

---

## Usage

### Admin Panel

- Navigate to `/admin` to access the admin panel.
- Admin users can log in using Google or GitHub OAuth.
- Admin functionalities include managing products, categories, orders, and viewing customer information.”
