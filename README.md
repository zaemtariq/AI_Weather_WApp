# 🌦️ AI Weather App

The **AI Weather App** is a modern and intelligent weather forecasting application built with **React** and **Tailwind CSS**, delivering real-time weather updates, hourly and daily forecasts, and AI-powered insights that provide practical suggestions for daily life. With a clean and responsive design, it combines speed, accuracy, and usability to make checking the weather smarter and simpler.

---

## ✨ Features

- 📍 **Location-Based Forecasts** – Accurate data based on your city.
- ⏰ **Hourly & Daily Forecasts** – Stay ahead with detailed predictions.
- 🤖 **AI-Powered Suggestions** – Get smart tips like _“Carry an umbrella today”_ or _“Perfect day for outdoor activities.”_
- 🎨 **Modern UI/UX** – Minimal, responsive, and clean design using Tailwind CSS.
- ⚡ **Optimized Performance** – Powered by React hooks and efficient state management.

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS
- **State Management:** Zustand / Context API
- **API:** Meteosource / OpenWeather (or any weather API you configure)
- **AI Layer:** Custom logic that interprets conditions to provide daily suggestions

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/ai-weather-app.git
cd ai-weather-app
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Add API Key

Create a `.env` file in the root and add your weather API key:

```bash
VITE_WEATHER_API_KEY=your_api_key_here
```

### 4️⃣ Run the App

```bash
npm run dev
```

The app will be available at **[http://localhost:5173](http://localhost:5173)**

---

## 📂 Project Structure

```
ai-weather-app/
│
├── public/            # Static assets (favicons, public images, index.html entry)
│
├── src/
│   ├── components/    # Reusable UI parts (e.g., Header, WeatherCard, DailyForecast)
│   ├── store/         # State management files (Zustand stores or Context providers)
│   ├── assets/        # Icons, images, or static content (e.g., weather icons)
│   ├── App.jsx        # Main component that holds the application layout and routing
│   └── main.jsx       # The entry point of the React application (where the app is rendered)
│
├── .gitignore
├── README.md
├── package.json       # Project dependencies and scripts (start, build)
├── tailwind.config.js # Tailwind CSS configuration file
├── vite.config.js     # Vite bundler configuration file
```

---

## 🤖 AI Insights

The AI layer analyzes weather conditions such as:

- **Rainfall Probability** → Suggests umbrella or raincoat.
- **Temperature Extremes** → Advises on clothing (light/heavy).
- **Wind & Humidity** → Recommends outdoor or indoor activities.

This makes the forecast **actionable**, not just informational.

---

## 📸 Screenshots

<img width="1327" height="826" alt="Screenshot 2025-09-15 195646" src="https://github.com/user-attachments/assets/0f00d985-39d9-40a4-bbf4-a113e76c716c" />
<img width="902" height="825" alt="Screenshot 2025-09-15 195755" src="https://github.com/user-attachments/assets/076a0701-8020-48f3-9926-b0fa06c10088" />
<img width="1327" height="827" alt="Screenshot 2025-09-15 195731" src="https://github.com/user-attachments/assets/8a38d09c-dc20-4275-80d7-049ac861da98" />

## 🐞 Issues & Contributions

- Found a bug? Open an issue [here](../../issues).
- Contributions are welcome! Fork the repo, create a branch, and submit a PR.

---

## 📜 License

This project is licensed under the **MIT License** – free to use, modify, and distribute.
