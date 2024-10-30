"use client";

import React from "react";
import Link from "next/link";
import { Pie, Bar, Line } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js/auto';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement);

// Sample data for charts
const pieData = {
  labels: ["Content Suggestions", "Optimal Posting Times", "New Lead Generation Ideas"],
  datasets: [{ data: [30, 40, 30], backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"] }],
};

const barData = {
  labels: ["Followers Count", "Engagement Metrics", "Growth Trends"],
  datasets: [{ label: "Metrics", data: [300, 400, 350], backgroundColor: "rgba(75,192,192,0.4)" }],
};

const lineData = {
  labels: ["Top-Performing Content", "Comparison Charts", "Spend vs. Results"],
  datasets: [{ label: "Performance", data: [200, 300, 500], borderColor: "blue", backgroundColor: "rgba(0,123,255,0.5)" }],
};

const subMenuItems = [
  "Content Suggestions",
  "Optimal Posting Times",
  "New Lead Generation Ideas",
  "Followers Count",
  "Engagement Metrics",
  "Growth Trends",
  "Top-Performing Content",
  "Comparison Charts",
  "Spend vs. Results",
  "Top Performing Ads",
  "Platform Breakdown",
  "Leads by Platform",
  "Lead Conversion Rate",
  "Top-Performing Campaigns",
  "Cost-Per-Lead",
];

export default function Dashboard() {
  return (
    <div style={{ display: "flex", padding: "20px" }}>
      {/* Sidebar Menu */}
      <div
        style={{
          border: "1px solid #000",
          borderRadius: "8px",
          padding: "20px",
          backgroundColor: "#343a40", // Sidebar background color
          color: "#fff",
          width: "250px",
          marginRight: "20px",
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>Dashboards</h2>
        <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
          {subMenuItems.map((subItem, subIndex) => (
            <li key={subIndex} style={{ marginBottom: "5px" }}>
              <Link href="#" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
                {subItem}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content Area */}
      <div style={{ flex: 1, padding: "0 20px" }}>
        {/* Cards Section */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {subMenuItems.slice(0, 12).map((item, index) => (
            <div key={index} style={{ border: "1px solid #ddd", borderRadius: "8px", padding: "0", backgroundColor: "#f8f9fa" }}>
              <Link href="#" style={{
                display: "block",
                padding: "10px",
                backgroundColor: "#007bff", // Box background color
                color: "#fff",
                textDecoration: "none",
                borderTopLeftRadius: "8px",
                borderTopRightRadius: "8px",
                fontSize: "18px",
                fontWeight: "bold",
                textAlign: "center"
              }}>
                {item}
              </Link>
              <p style={{ padding: "20px", margin: 0 }}>
                {item} metrics provide insights into performance and engagement trends to optimize strategies.
              </p>
            </div>
          ))}
        </div>

        {/* Chart Containers in Grid Layout */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "20px", // Added gap between charts
        }}>
          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>Pie Chart</h2>
            <Pie data={pieData} />
          </div>

          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>Bar Chart</h2>
            <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: "top" } } }} />
          </div>

          <div style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "22px", fontWeight: "bold", color: "#333", marginBottom: "10px" }}>Line Chart</h2>
            <Line data={lineData} options={{ responsive: true }} />
          </div>
        </div>
      </div>
    </div>
  );
}