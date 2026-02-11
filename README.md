# QoS-Based Digital Twin – Admin Dashboard

This repository contains the **Admin Dashboard module** of the proposed QoS-Based Digital Twin system developed within the scope of a thesis project.

The dashboard is designed to centralize, visualize, and monitor real-time data collected from Wi-Fi networks, Digital Twin models, and AutoML-based prediction mechanisms.

---

## Project Overview

The Admin Dashboard provides an integrated interface for monitoring:

- Wi-Fi Quality of Service (QoS) metrics  
- Personnel performance indicators  
- Energy consumption of access points  
- Real-time system state and decision support insights  

The goal is to support network optimization, energy efficiency, and data-driven personnel resource management.

---

## Core Functional Components

### Wi-Fi QoS Monitoring

The dashboard visualizes key network performance metrics including:

- Latency  
- RTT (Round Trip Time)  
- Packet Loss  

These metrics are presented using time-series graphs and dynamic charts to enable early detection of network performance degradation.

---

### Personnel Performance & Efficiency Indicators

The system calculates and visualizes:

- Performance Score (Sp)  
- Efficiency Ratio (η_eff)  

These indicators are correlated with personnel mobility and network usage behavior.

---

### Energy Consumption & Access Point Status

Through the Digital Twin model, the dashboard monitors:

- Active / Passive state of Wi-Fi access points  
- Energy consumption levels  

This enables data-driven decisions for reducing unnecessary energy usage.

---

### Real-Time Monitoring & Decision Support

The dashboard processes live data streams and provides:

- Instant system visibility  
- Dynamic visualization outputs  
- Support for network reconfiguration decisions  
- Strategic workforce planning insights  

---

## System Architecture

The dashboard operates in synchronization with:

- Backend data collection modules  
- Network measurement components  
- AutoML-based prediction models  

Data is transferred via API-based communication and rendered dynamically in the frontend interface.

---

## Purpose of This Repository

This repository focuses specifically on the **Admin Dashboard implementation**.  
The full thesis project includes additional backend, AutoML, and Digital Twin components.

---

## Technologies Used

- React (Frontend)
- API-based data integration
- Data visualization libraries
- Real-time monitoring logic

---

## Academic Context

This project is part of a research study proposing an intelligent personnel tracking and network optimization system using:

- Digital Twin technology  
- AutoML-based performance prediction  
- Wi-Fi QoS-aware system modeling  

---

## License

This project is developed for academic and research purposes.
