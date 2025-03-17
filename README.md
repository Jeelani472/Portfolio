# Portfolio Website

This is a **full-stack portfolio website** that includes a **frontend** (HTML, CSS, JavaScript) and a **backend** (Node.js, Express, MongoDB). The portfolio allows users to **submit messages** through a contact form, which are stored in a MongoDB database.

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Hosting:** Render (for both frontend & backend)
  
## 🌍 Live Demo

🔗 **[Visit Deployed Website](https://portfolio-9h7e.onrender.com)**  

## 💂️ Project Structure

```
portfolio/
│—— backend/             # Node.js & Express backend
│   ├—— app.js           # Main backend server file
│   ├—— models/          # Mongoose schema definitions
│   ├—— routes/          # Express route handlers
│   ├—— .env             # Environment variables (not committed)
│   └—— package.json     # Backend dependencies
│—— frontend/            # Frontend files
│   ├—— index.html       # Main portfolio webpage
│   ├—— style.css        # Styling
│   └—— script.js        # JavaScript for form handling
│—— README.md            # Project documentation
│—— .gitignore           # Ignore node_modules, .env, etc.
```

---

## 🚀 Getting Started

### 1️⃣ **Clone the Repository**
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

### 2️⃣ **Backend Setup**
#### Install dependencies:
```bash
cd backend
npm install
```

#### Create a **`.env`** file inside the `backend/` folder:
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

#### Run the backend server:
```bash
npm start
```
> The backend will start on **`http://localhost:5000`**.

---

### 3️⃣ **Frontend Setup**
Just open the `frontend/index.html` in a browser, or serve it using a simple static server:
```bash
cd frontend
npx serve
```
> The frontend will be available at **`http://localhost:3000`**.

---

## 🚀 Deployment

### **Backend Deployment on Render**
1. Push your code to GitHub.
2. Go to [Render](https://dashboard.render.com/) and create a **new web service**.
3. Connect your GitHub repo and set the **root directory** to `backend/`.
4. Set up **Environment Variables** (MONGODB_URI).
5. Deploy!

### **Frontend Deployment on Render**
If you want to serve your **frontend from Express**, it’s already handled by:
```js
app.use(express.static(path.join(__dirname, '../frontend')));
```
Your deployed site will be available at **the same domain** as your backend.

---

## 📌 Features
✅ **Responsive** design  
✅ **Contact form** to collect messages  
✅ **MongoDB integration** for storing form submissions  
✅ **Hosted on Render** with auto-deployment  

---

## ❓ Troubleshooting

### **Form submission not working?**
- Check if the **backend is running** and logs are visible.
- Ensure the **frontend uses a relative URL (`fetch("/submit-form")`)**.
- Verify MongoDB is **connected**.

### **Deployment Issues?**
- Ensure `.env` variables are correctly set in Render.
- Check logs in Render dashboard (`Logs` section).

---

## 🏆 Contributing

1. Fork the repo 🍝
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a **Pull Request** 🎉

---

## 🐝 License
This project is **open-source** and available under the [MIT License](LICENSE).

