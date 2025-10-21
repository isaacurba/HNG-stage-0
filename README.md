# 🌟 HNG Frontend Stage 0 & 1 – Multi-Page Profile Site

A simple, responsive, and accessible **multi-page profile website** built using **semantic HTML**, **modern CSS (Flexbox + Glassmorphism)**, and **vanilla JavaScript**.

This project now includes:
- **Profile Card (Stage 0)**
- **About Me Page**
- **Contact Page with Validation (Stage 1)**

---

## 🧱 Project Overview

### 🪪 Profile Page
Displays:
- **Name** (`data-testid="test-user-name"`)
- **Short bio** (`data-testid="test-user-bio"`)
- **Current time in milliseconds** (`data-testid="test-user-time"`)
- **Avatar image** (`data-testid="test-user-avatar"`)
- **Social links** (`data-testid="test-user-social-links"`)
- **Hobbies** (`data-testid="test-user-hobbies"`)
- **Dislikes** (`data-testid="test-user-dislikes"`)

### 🙋‍♂️ About Page
Shows a more detailed description including:
- Background, interests, and skills
- Expanded “About Me” content with smooth layout and responsive design

### 📩 Contact Page
Contains a fully functional **contact form** that:
- Validates inputs using **vanilla JavaScript**
- Displays inline error messages
- Shows a success message when submitted
- Uses these test IDs:
  - `data-testid="test-contact-name"`
  - `data-testid="test-contact-email"`
  - `data-testid="test-contact-subject"`
  - `data-testid="test-contact-message"`
  - `data-testid="test-contact-submit"`
  - `data-testid="test-contact-success"`

---

## 🛠️ Technologies Used

- **HTML5** — Semantic and accessible markup  
- **CSS3** — Flexbox layout, glassmorphism effects, responsive media queries  
- **JavaScript (Vanilla)** — Form validation, time updates, and interactive behavior  

---

## 📂 Folder Structure

profile-site/
│
├── index.html # Profile card page
├── about.html # About Me page
├── contact.html # Contact form page
├── style.css # Shared stylesheet
├── script.js # Shared JavaScript (validation + clock)
└── README.md