import React from 'react';
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Student Performance in Exams',
      font: {
        size: 20,
        color: '#FFF',
      },
    },
    legend: {
      display: true,
      position: 'right',
      labels: {
        usePointStyle: true,
        // pointStyle: 'rect',
        color: '#FFF',
      },
    },
  },
  // elements: {
  //   point: {
  //     pointStyle: 'square',
  //   },
  // },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: false,
      title: {
        display: true,
        text: 'Parental Education Level',
        color: '#FFF',
        font: {
          size: 16,
        },
      },
      grid: {
        color: '#d1d1d190',
      },
    },
    y: {
      stacked: false,
      max: 100,
      title: {
        display: true,
        text: 'Average Test Score',
        color: '#FFF',
        font: {
          size: 16,
        },
      },
      grid: {
        color: '#d1d1d190',
      },
      // ticks: {
      //   callback: function () {
      //     return '';
      //   },
      // },
      ticks: {
        callback: function (value) {
          return `${value}%`;
        },
      },
    },
  },
};

// const labels = ['', '', '', '', '', ''];
const labels = ['Some High School', 'High School', 'Some College', 'Associates Degree', 'Bachelors Degree', 'Masters Degree'];

export const data = {
  labels,
  datasets: [
    {
      type: 'line',
      label: 'Male Completed Training',
      backgroundColor: '#0000FF',
      borderWidth: 1,
      borderColor: '#0000FF',
      pointStyle: 'triangle',
      radius: 5,
      data: [67.6, 65.3, 73.9, 72.6, 74.4, 72.4],
    },
    {
      type: 'line',
      label: 'Male No Training',
      borderWidth: 2,
      backgroundColor: '#FFFFFF',
      borderColor: '#0000FF',
      pointStyle: 'triangle',
      borderDash: [5, 5],
      radius: 5,
      data: [61.9, 60.2, 61.8, 65.0, 64.4, 73.9],
    },
    {
      type: 'line',
      label: 'Female Completed Training',
      backgroundColor: '#FC0FC0',
      borderWidth: 1,
      borderColor: '#FC0FC0',
      pointStyle: 'circle',
      radius: 5,
      data: [71.4, 68.5, 75.2, 77.2, 78.2, 78.0],
    },
    {
      type: 'line',
      label: 'Female No Training',
      borderWidth: 2,
      borderColor: '#FC0FC0',
      backgroundColor: '#FFFFFF',
      pointStyle: 'circle',
      borderDash: [5, 5],
      radius: 5,
      data: [61.9, 63.1, 68.7, 67.7, 72.8, 70.9],
    },
    {
      label: 'Average Arithmetic Score',
      data: [63.5, 62.1, 67.1, 67.8, 69.4, 69.7],
      backgroundColor: '#F5A623',
      stack: 'Stack 0',
    },
    {
      label: 'Average Reading Score',
      data: [66.9, 64.7, 69.5, 70.9, 73.0, 75.4],
      backgroundColor: '#4A90E2 ',
      stack: 'Stack 1',
    },
    {
      label: 'Average Writing Score',
      data: [64.9, 62.4, 68.8, 69.9, 73.4, 75.6],
      backgroundColor: '#8CC63F ',
      stack: 'Stack 2',
    },
  ],
};

export default function App() {
  return (
    <>
      <h2 style={{textAlign: "center"}}>Student Performance in Exams Based on Parental Education Level</h2>
      <Chart
        type='bar'
        options={options}
        data={data}
        width={1000}
        height={500}
      />
    </>
  );
}
