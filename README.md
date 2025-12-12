# Life Monitoring System 🏥

A modern, real-time health monitoring dashboard for tracking patient vital signs and health metrics. Built with React and Tailwind CSS.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/react-18.x-61dafb.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

## 📋 Overview

The Life Monitoring System provides healthcare professionals with a comprehensive, real-time dashboard to monitor patient vital signs. The system features automatic alerts, intuitive visualizations, and a clean, responsive interface designed for medical environments.

## ✨ Features

- **Real-time Vital Monitoring** - Continuous tracking of 6 critical health metrics
- **Smart Alert System** - Automatic detection and notification of abnormal readings
- **Live Data Updates** - Simulated real-time data refresh every 2 seconds
- **Color-Coded Status** - Instant visual feedback on patient health status
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Patient Profile** - Individual patient information and status tracking
- **Alert History** - Recent alerts with timestamps for quick review



<img width="1919" height="978" alt="image" src="https://github.com/user-attachments/assets/4117ca14-04b1-46f8-9213-712d8248ef36" />


## 🩺 Monitored Vital Signs

1. **Heart Rate** (bpm) - Normal range: 60-100
2. **Blood Pressure** (mmHg) - Systolic/Diastolic readings
3. **Body Temperature** (°F) - Normal range: 97-99.5
4. **Oxygen Saturation** (%) - Critical threshold: 95%
5. **Respiratory Rate** (breaths/min) - Normal range: 12-20
6. **Blood Glucose** (mg/dL) - Normal range: 80-120

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/life-monitoring-system.git
cd life-monitoring-system
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```
## 🛠️ Built With

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **JavaScript ES6+** - Modern JavaScript features

## 📁 Project Structure

```
life-monitoring-system/
├── src/
│   ├── components/
│   │   └── LifeMonitoringSystem.jsx
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md
```

## 🎨 UI Components

### VitalCard Component
Individual card displaying a single vital sign with:
- Icon representation
- Current value with unit
- Status indicator (normal/alert)
- Color-coded visual feedback

### Alert System
- Real-time monitoring of vital thresholds
- Timestamp tracking
- Priority-based styling (warning/critical)
- Limited history display (last 5 alerts)

### Patient Header
- Patient identification information
- Age and patient ID
- Real-time status indicator
- Visual status pulse animation

## 🔧 Configuration

### Customizing Alert Thresholds

Edit the alert conditions in the `useEffect` hook:

```javascript
if (vitals.heartRate > 100 || vitals.heartRate < 60) {
  newAlerts.push({ 
    type: 'warning', 
    message: 'Heart rate abnormal', 
    time: new Date().toLocaleTimeString() 
  });
}
```

### Adjusting Update Interval

Modify the interval timing (in milliseconds):

```javascript
const interval = setInterval(() => {
  // Update logic
}, 2000); // Change this value
```

## 🔮 Future Enhancements

- [ ] Historical data charts and trends
- [ ] Multi-patient dashboard support
- [ ] Data export functionality (PDF/CSV)
- [ ] Integration with medical devices via Bluetooth/API
- [ ] User authentication and role-based access
- [ ] Customizable alert thresholds per patient
- [ ] Audio/visual alert notifications
- [ ] Database integration for persistent storage
- [ ] Advanced analytics and reporting
- [ ] Telemedicine integration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This system is designed for educational and demonstration purposes. It should not be used as a replacement for professional medical equipment or advice. Always consult with qualified healthcare professionals for medical decisions.
## 👨‍💻 Author

Om Gedam

GitHub: @itsomg134

Email: omgedam123098@gmail.com

Twitter (X): @omgedam

LinkedIn: Om Gedam

Portfolio: https://ogworks.lovable.app

## 🙏 Acknowledgments

- Icons provided by Lucide React
- Design inspiration from modern healthcare dashboards
- Built with the React community's best practices
