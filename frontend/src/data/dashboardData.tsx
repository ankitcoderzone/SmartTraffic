// Traffic Management Dashboard Data

export const trafficMetrics = {
  avgSpeed: {
    value: 45.2,
    unit: "km/h",
    change: 5.4,
    trend: "up" as const
  },
  waitingTime: {
    value: 2.8,
    unit: "minutes",
    change: -12.3,
    trend: "down" as const
  },
  trafficDensity: {
    value: 78,
    unit: "%",
    change: 3.2,
    trend: "up" as const
  },
  incidents: {
    value: 12,
    unit: "active",
    change: -25.0,
    trend: "down" as const
  }
};

export const trafficDensityData = [
  { time: "00:00", density: 15 },
  { time: "02:00", density: 8 },
  { time: "04:00", density: 5 },
  { time: "06:00", density: 25 },
  { time: "08:00", density: 65 },
  { time: "10:00", density: 45 },
  { time: "12:00", density: 55 },
  { time: "14:00", density: 70 },
  { time: "16:00", density: 80 },
  { time: "18:00", density: 95 },
  { time: "20:00", density: 60 },
  { time: "22:00", density: 35 }
];

export const accidentReports = [
  { month: "Jan", before: 45, after: 28 },
  { month: "Feb", before: 52, after: 31 },
  { month: "Mar", before: 48, after: 25 },
  { month: "Apr", before: 61, after: 35 },
  { month: "May", before: 55, after: 29 },
  { month: "Jun", before: 67, after: 38 },
  { month: "Jul", before: 59, after: 32 },
  { month: "Aug", before: 71, after: 41 },
  { month: "Sep", before: 63, after: 34 },
  { month: "Oct", before: 58, after: 31 },
  { month: "Nov", before: 49, after: 26 },
  { month: "Dec", before: 44, after: 23 }
];

export const newsUpdates = [
  {
    id: 1,
    title: "New Traffic Management System Reduces Congestion by 35%",
    description: "Implementation of AI-powered traffic lights shows significant improvement in city-wide traffic flow.",
    time: "2 hours ago",
    category: "System Update",
    priority: "high"
  },
  {
    id: 2,
    title: "Highway 101 Maintenance Scheduled",
    description: "Planned maintenance on Highway 101 will cause temporary lane closures this weekend.",
    time: "4 hours ago",
    category: "Maintenance",
    priority: "medium"
  },
  {
    id: 3,
    title: "Smart Parking Integration Complete",
    description: "Downtown parking meters now integrated with traffic management system for better flow optimization.",
    time: "1 day ago",
    category: "Feature",
    priority: "low"
  },
  {
    id: 4,
    title: "Emergency Response Time Improved",
    description: "New traffic priority system for emergency vehicles reduces response times by 28%.",
    time: "2 days ago",
    category: "Emergency",
    priority: "high"
  },
  {
    id: 5,
    title: "Monthly Traffic Report Available",
    description: "Comprehensive analysis of October traffic patterns and system performance metrics.",
    time: "3 days ago",
    category: "Report",
    priority: "low"
  }
];

export const navigationItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    active: true
  },
  {
    name: "Reports",
    path: "/reports",
    active: false
  },
  {
    name: "Analytics",
    path: "/analytics",
    active: false
  },
  {
    name: "Traffic Control",
    path: "/control",
    active: false
  },
  {
    name: "Users",
    path: "/users",
    active: false
  },
  {
    name: "Settings",
    path: "/settings",
    active: false
  }
];