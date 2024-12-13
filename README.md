

# **Screaming Hawks**

## **About the Project**
The Multiroom Compiler is a web-based application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project is designed to provide a collaborative environment where users can write, compile, and share code across multiple "rooms" in real time.

It combines the functionality of an online compiler with real-time collaboration, making it suitable for coding interviews, hackathons, and group coding sessions.

---

## **Tech Stack**
- **Frontend**: React.js, Bootstrap/Material-UI, Axios
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Other Tools**: JWT for authentication, bcrypt for password hashing, Redux for state management (if applicable)

---

## **Features**
- User authentication (register/login/logout)
- Role-based access (e.g., admin, user)
- CRUD operations for [entities like products, posts, etc.]
- Responsive design
- API integration

---

## **Installation**

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- npm or yarn

### **Clone the Repository**
```bash
git clone https://github.com/MONISH-JODHA/Screaming-Hawks.git
cd Screaming-Hawks
```

### **Backend Setup**
1. Navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the backend directory:
    ```plaintext
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```
4. Start the server:
    ```bash
    npm start
    ```

### **Frontend Setup**
1. Navigate to the `frontend` folder:
    ```bash
    cd ../frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm start
    ```

---

## **Usage**
1. Open your browser and navigate to `http://localhost:3000` for the frontend.
2. The backend runs at `http://localhost:5000` for API requests.


## **Contributing**
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add SomeFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## **License**
This project is licensed under the [MIT License](LICENSE).

---


