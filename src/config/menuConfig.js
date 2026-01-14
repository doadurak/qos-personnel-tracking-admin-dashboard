// src/config/menuConfig.js
import { ROLES } from "../constants/roles";

export const menuConfig = {
  [ROLES.ADMIN]: [
    "Digital Twins",
    "AutoML",
    "Wi-Fi Energy",
    "QoS Map",
    "User Management",
  ],
  [ROLES.LEADER]: [
    "Team Performance",
    "Task Completion",
    "Heatmap",
  ],
  [ROLES.EMPLOYEE]: [
    "My Twin",
    "Productivity",
    "Break Reminder",
  ],
};
