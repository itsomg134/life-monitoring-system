import React, { useState, useEffect } from 'react';
import { Activity, Heart, Thermometer, Droplets, Wind, TrendingUp, AlertCircle, User } from 'lucide-react';

export default function LifeMonitoringSystem() {
  const [vitals, setVitals] = useState({
    heartRate: 72,
    bloodPressure: { systolic: 120, diastolic: 80 },
    temperature: 98.6,
    oxygenLevel: 98,
    respiratoryRate: 16,
    glucose: 95
  });

  const [alerts, setAlerts] = useState([]);
  const [patient] = useState({
    name: "John Doe",
    age: 45,
    id: "P-2024-001",
    status: "Stable"
  });

  // Simulate real-time vital updates
  useEffect(() => {
    const interval = setInterval(() => {
      setVitals(prev => ({
        heartRate: Math.max(60, Math.min(100, prev.heartRate + (Math.random() - 0.5) * 4)),
        bloodPressure: {
          systolic: Math.max(110, Math.min(140, prev.bloodPressure.systolic + (Math.random() - 0.5) * 3)),
          diastolic: Math.max(70, Math.min(90, prev.bloodPressure.diastolic + (Math.random() - 0.5) * 2))
        },
        temperature: Math.max(97, Math.min(99.5, prev.temperature + (Math.random() - 0.5) * 0.2)),
        oxygenLevel: Math.max(95, Math.min(100, prev.oxygenLevel + (Math.random() - 0.5) * 0.5)),
        respiratoryRate: Math.max(12, Math.min(20, prev.respiratoryRate + (Math.random() - 0.5) * 1)),
        glucose: Math.max(80, Math.min(120, prev.glucose + (Math.random() - 0.5) * 3))
      }));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Check for alerts
  useEffect(() => {
    const newAlerts = [];
    
    if (vitals.heartRate > 100 || vitals.heartRate < 60) {
      newAlerts.push({ type: 'warning', message: 'Heart rate abnormal', time: new Date().toLocaleTimeString() });
    }
    if (vitals.temperature > 99.5 || vitals.temperature < 97) {
      newAlerts.push({ type: 'warning', message: 'Temperature abnormal', time: new Date().toLocaleTimeString() });
    }
    if (vitals.oxygenLevel < 95) {
      newAlerts.push({ type: 'critical', message: 'Low oxygen level', time: new Date().toLocaleTimeString() });
    }
    
    if (newAlerts.length > 0) {
      setAlerts(prev => [...newAlerts, ...prev].slice(0, 5));
    }
  }, [vitals]);

  const getStatusColor = (value, normal, type) => {
    if (type === 'heart') {
      return value >= 60 && value <= 100 ? 'text-green-500' : 'text-yellow-500';
    }
    if (type === 'oxygen') {
      return value >= 95 ? 'text-green-500' : 'text-red-500';
    }
    if (type === 'temp') {
      return value >= 97 && value <= 99.5 ? 'text-green-500' : 'text-yellow-500';
    }
    return 'text-green-500';
  };

  const VitalCard = ({ icon: Icon, title, value, unit, status, color }) => (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-full ${color} bg-opacity-10`}>
            <Icon className={`w-6 h-6 ${color}`} />
          </div>
          <h3 className="font-semibold text-gray-700">{title}</h3>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${
          status === 'normal' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
        }`}>
          {status}
        </span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className={`text-3xl font-bold ${color}`}>
          {typeof value === 'number' ? value.toFixed(1) : value}
        </span>
        <span className="text-gray-500">{unit}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-indigo-100 rounded-full">
                <User className="w-8 h-8 text-indigo-600" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">{patient.name}</h1>
                <p className="text-gray-600">Patient ID: {patient.id} • Age: {patient.age}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${
                patient.status === 'Stable' ? 'bg-green-500' : 'bg-yellow-500'
              } animate-pulse`}></div>
              <span className="font-semibold text-gray-700">{patient.status}</span>
            </div>
          </div>
        </div>

        {/* Alerts Section */}
        {alerts.length > 0 && (
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-5 h-5 text-yellow-600" />
              <h2 className="text-lg font-semibold text-gray-800">Recent Alerts</h2>
            </div>
            <div className="space-y-2">
              {alerts.map((alert, idx) => (
                <div key={idx} className={`flex items-center justify-between p-3 rounded-lg ${
                  alert.type === 'critical' ? 'bg-red-50 border border-red-200' : 'bg-yellow-50 border border-yellow-200'
                }`}>
                  <span className={alert.type === 'critical' ? 'text-red-700' : 'text-yellow-700'}>
                    {alert.message}
                  </span>
                  <span className="text-sm text-gray-500">{alert.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Vital Signs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <VitalCard
            icon={Heart}
            title="Heart Rate"
            value={vitals.heartRate}
            unit="bpm"
            status={vitals.heartRate >= 60 && vitals.heartRate <= 100 ? 'normal' : 'alert'}
            color={getStatusColor(vitals.heartRate, null, 'heart')}
          />
          
          <VitalCard
            icon={Activity}
            title="Blood Pressure"
            value={`${vitals.bloodPressure.systolic.toFixed(0)}/${vitals.bloodPressure.diastolic.toFixed(0)}`}
            unit="mmHg"
            status="normal"
            color="text-blue-500"
          />
          
          <VitalCard
            icon={Thermometer}
            title="Temperature"
            value={vitals.temperature}
            unit="°F"
            status={vitals.temperature >= 97 && vitals.temperature <= 99.5 ? 'normal' : 'alert'}
            color={getStatusColor(vitals.temperature, null, 'temp')}
          />
          
          <VitalCard
            icon={Wind}
            title="Oxygen Level"
            value={vitals.oxygenLevel}
            unit="%"
            status={vitals.oxygenLevel >= 95 ? 'normal' : 'alert'}
            color={getStatusColor(vitals.oxygenLevel, null, 'oxygen')}
          />
          
          <VitalCard
            icon={Activity}
            title="Respiratory Rate"
            value={vitals.respiratoryRate}
            unit="breaths/min"
            status="normal"
            color="text-purple-500"
          />
          
          <VitalCard
            icon={Droplets}
            title="Blood Glucose"
            value={vitals.glucose}
            unit="mg/dL"
            status="normal"
            color="text-pink-500"
          />
        </div>

        {/* Status Bar */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <div className="flex items-center justify-between text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Live Monitoring Active</span>
            </div>
            <span>Last updated: {new Date().toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}