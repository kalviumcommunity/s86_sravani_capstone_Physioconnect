## PhysioConnect

## Project Overview:
PhysioConnect is a web-based appointment booking system designed for physiotherapists and patients. Both therapists and patients can sign up and log in. Therapists provide their availability and location during registration, and patients can search for physiotherapists based on location (e.g., state/city) and book appointments accordingly.


## Backend Deployment link:-

https://s86-sravani-capstone-physioconnect.onrender.com


________________________________________
Key User Roles:

1. Patient (User)
●	Register & log in
●	Filter therapists by state
●	Book appointment (select therapist, date, time)
●	View and cancel their appointments

3. Therapist
●	Register & log in
●	Provide:
○	Name, email, password
○	Specialization
○	Location (state & city)
○	Available time slots
●	View their own appointments (optional future feature)

5. Admin (Optional)
●	View counts (total users, therapists, appointments)
●	Manage users and therapists (optional stretch goal)

________________________________________
Core Features: 

Authentication
●	JWT-based secure login/signup for both roles
●	Passwords hashed using bcrypt

Therapist Management
●	Signup with full details including location and time slots
●	Stored in the therapist collection

Location-Based Booking
●	Users select a state from a dropdown
●	Filtered list of therapists from that location is displayed
●	User selects date/time and books appointment
Appointments
●	Booking saved with patient ID, therapist ID, date, and time
●	Status: booked or cancelled
●	Patients can view and cancel their bookings
________________________________________
Tech Stack:

-> Frontend
●	React + Tailwind CSS
●	React Router
●	Axios (for API calls)

-> Backend
●	Node.js + Express
●	MongoDB + Mongoose
●	JWT + bcrypt for Auth


# 📅 6-Week Development Plan – PhysioConnect


## 🏁 Week 1: Planning & Setup (Days 1–7)

### 🎯 Goals:
- Set up frontend, backend, and database
- Design the schema and folder structure

### 🗓️ Daily Plan:
- **Day 1:** Finalize features and tech stack, create GitHub repo
- **Day 2:** Initialize React app (Vite) + Tailwind CSS
- **Day 3:** Set up Express server + basic `/api` route
- **Day 4:** Connect MongoDB Atlas using Mongoose
- **Day 5:** Install essential packages (dotenv, cors, nodemon, axios)
- **Day 6:** Design and create Mongoose schemas (User, Therapist, Appointment)
- **Day 7:** Test frontend-backend connection with dummy API, document structure

---

## 🔐 Week 2: Authentication System (Days 8–14)

### 🎯 Goals:
- Implement secure JWT-based login/signup for both roles

### 🗓️ Daily Plan:
- **Day 8:** Build signup/login routes for patient and therapist
- **Day 9:** Hash passwords using bcrypt; generate JWT tokens
- **Day 10:** Create frontend forms for signup/login (with role selection)
- **Day 11:** Store JWT token in localStorage; add Axios auth headers
- **Day 12:** Add protected routes using React Router
- **Day 13:** Implement logout and redirect logic
- **Day 14:** Test authentication flow end-to-end

---

## 🧑‍⚕️ Week 3: Therapist Features (Days 15–21)

### 🎯 Goals:
- Therapist can register with details and availability
- Patients can filter therapists by location

### 🗓️ Daily Plan:
- **Day 15:** Extend therapist model with specialization, state, city, time slots
- **Day 16:** Create frontend form for therapist registration
- **Day 17:** Build API to filter therapists by state/city
- **Day 18:** Display therapist list on UI with filters
- **Day 19:** Design therapist card with key details
- **Day 20:** (Optional) Create therapist profile/dashboard
- **Day 21:** Test and polish all therapist-related features

---

## 👩‍🦽 Week 4: Patient Features & Booking (Days 22–28)

### 🎯 Goals:
- Patients can search therapists and book appointments

### 🗓️ Daily Plan:
- **Day 22:** Create appointment schema (patientId, therapistId, date, time, status)
- **Day 23:** Build appointment booking API
- **Day 24:** Create booking form on frontend (with therapist selection)
- **Day 25:** Connect booking form to backend via Axios
- **Day 26:** Add success/failure messages to booking
- **Day 27:** Prevent double booking/conflicting slots
- **Day 28:** Test and complete booking flow

---

## 📆 Week 5: Appointment Management (Days 29–35)

### 🎯 Goals:
- Patients can view and cancel appointments
- Therapists optionally view their bookings

### 🗓️ Daily Plan:
- **Day 29:** Build API to fetch appointments for patients
- **Day 30:** Display appointment list in UI (patient dashboard)
- **Day 31:** Create cancel API (update status to "cancelled")
- **Day 32:** Add cancel button in appointment list
- **Day 33:** (Optional) Therapist view for appointments
- **Day 34:** Add status filter: upcoming/past/cancelled
- **Day 35:** Full feature testing and UI polish

---

## 🚀 Week 6: Admin, Testing & Deployment (Days 36–42)

### 🎯 Goals:
- Final touches, deployment, and optional admin dashboard

### 🗓️ Daily Plan:
- **Day 36:** Build admin stats API (total users, therapists, appointments)
- **Day 37:** Create basic admin dashboard (optional)
- **Day 38:** Final UI polishing (responsive design, buttons, forms)
- **Day 39:** Test all user flows and fix bugs
- **Day 40:** Deploy backend (Render/Railway)
- **Day 41:** Deploy frontend (Netlify/Vercel)
- **Day 42:** Final README update, screenshots, and live links






