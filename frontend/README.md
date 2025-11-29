# 🌴 Resort Booking Web App (Admin + User System)

This is a full-stack **Resort Booking Application** built using:

- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **React.js**
- **TypeScript/JavaScript**
- **JWT Authentication**

The project supports **public users** (who can submit bookings) and **admin users** (who can view/manage all bookings).

---

##  Features

###  Public User
- Create a resort booking  


### Admin Panel
- Secure login  
- View all bookings  
- Search bookings  
- Filter and sort bookings  
- Mobile & Desktop responsive dashboards  
- Auto redirect if unauthorized  

---

## Authentication & Role System

### ✔ 1. Admin Registration Is Public  
Anyone can register using the admin register page.

BUT this does **NOT** make them a real admin.

### ✔ 2. Every Registered User Gets  
```json
{
  "role": "user"
}


### Admin Demo Accounts

These demo accounts are provided for testing the Admin Dashboard.


⭐ Admin User 1

Email: admin@gmail.com

Password: admin123



⭐ Admin User 2

Email: adarsh@gmail.com

Password: adarsh123



## ⭐ Project Setup & Installation

⭐ # Navigate to backend folder
    cd backend

    # Install all backend dependencies
    npm install

    # Start backend in development mode
    npm run dev


   ⭐ # Navigate to frontend folder
   cd ../frontend

   # Install all frontend dependencies
   npm install

   # Start frontend development server
   npm run dev
