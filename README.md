# 📘 Student Management System (LocalStorage Based)

## 🔖 Overview
This is a simple **Student Management System** built with **HTML, CSS, and JavaScript**. It allows users to:
- Add student details
- View student details by ID
- Remove student details

The data is stored locally using the browser's `localStorage`, so no server or backend is needed.

---

## 📂 Project Structure

```
student-management/
│
├── index.html         # Main HTML file with form UI
├── style.css          # Responsive and clean UI styles
├── script.js          # JavaScript logic to handle data
└── README.md          # Project documentation (you are here)
```

---

## 🛠️ Technologies Used
- **HTML5**
- **CSS3 (Responsive Layout)**
- **JavaScript (Vanilla)**
- `localStorage` API for data persistence

---

## 🚀 Setup Instructions

1. **Clone or Download the Project**
   ```bash
   git clone https://github.com/darkspace123098/student-management.git
   cd student-management
   ```

2. **Open in Browser**
   Just open the `index.html` file in any modern browser (Chrome, Firefox, Edge).

3. **No Server or Dependencies Required**
   This is a pure frontend project—no backend setup is needed.

---

## ✨ Features

### ➕ Add Student
- Inputs: Student ID, Name, Phone Number
- Validates that all fields are filled
- Prevents duplicate entries (based on Student ID)
- Stores data in `localStorage`

### 🔍 View Student
- Fetches student info by ID
- Shows name and phone number if found
- Shows error message if student doesn't exist

### ❌ Remove Student
- Deletes student info by ID from `localStorage`
- Shows confirmation or error message

### ✅ Responsive UI
- Works seamlessly on mobile, tablet, and desktop
- Uses modern design with styled messages for feedback

---

## 📜 Code Overview

### HTML (`index.html`)
- Contains structured sections for Add, View, and Remove
- Includes input fields and buttons
- Placeholder `div` areas to show messages

### CSS (`style.css`)
- Styled form layout with max-width for readability
- `.success` and `.err` classes for messages
- Media queries for mobile responsiveness

### JavaScript (`script.js`)
- `store()`: Adds new student
- `view()`: Displays student info
- `remove()`: Deletes a student
- Uses `JSON.stringify()` and `JSON.parse()` for data formatting
- Ensures validation and feedback

---

## 🧪 Sample Data

You can test the app using:

| Field        | Sample Value      |
|--------------|------------------|
| Student ID   | 101              |
| Student Name | Alex Johnson     |
| Phone Number | 9876543210       |

---

## ⚠️ Limitations
- Data is stored only in the browser (`localStorage`)
- Clearing browser storage or using incognito mode will remove all data
- No server-side security or backup

---

## 💡 Future Enhancements (Ideas)
- Edit/Update student data
- Show all student records in a table
- Export/import data as JSON
- Connect to a real backend (e.g., Firebase or Node.js API)

---

## 🙌 Credits

Developed by: **Irshad Ali** 

### Visit Me

[Firecode](https://firecode.ezyro.com)

 

