import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const InvestmentChart = () => {
  const [chartData, setChartData] = useState({});
  const [email, setEmail] = useState('');

  // Hardcoded backend URL
  const BASE_URL = 'https://prolific-fascination-production.up.railway.app';

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
      fetchInvestmentHistory(storedEmail);

      // Use a slight delay before calling addInvestmentAutomatically
      setTimeout(() => {
        addInvestmentAutomatically();
      }, 500); // 500ms delay to ensure data is properly stored
    }
  }, []);

  const addInvestmentAutomatically = async () => {
    const totalInvested = parseFloat(localStorage.getItem('overallInvested'));
    const totalCurrentValue = parseFloat(localStorage.getItem('overallCurrentValue'));
    const profitLossPercentage = parseFloat(localStorage.getItem('profitLossPercentage'));
    const email = localStorage.getItem('email');
    const date = new Date().toISOString().split('T')[0]; // Current date in YYYY-MM-DD format

    console.log('localStorage totalInvested:', totalInvested);
    console.log('localStorage totalCurrentValue:', totalCurrentValue);
    console.log('localStorage profitLossPercentage:', profitLossPercentage);
    console.log('localStorage email:', email);

    if (!email || isNaN(totalInvested) || isNaN(totalCurrentValue) || isNaN(profitLossPercentage)) {
      console.warn('Some investment data is missing or invalid in localStorage.');
      return;
    }

    const investmentData = {
      email,
      date,
      totalInvested,
      totalValue: totalCurrentValue,
      profitLossPercentage,
    };

    try {
      // Store data in backend
      await axios.post(`${BASE_URL}/api/investments`, investmentData);
      console.log('Investment added automatically');
      fetchInvestmentHistory(email);
    } catch (error) {
      console.error('Error adding investment:', error);
    }
  };

  const fetchInvestmentHistory = async (email) => {
    try {
      const response = await axios.get(`${BASE_URL}/api/investments/${email}`);
      const data = response.data;
      const dates = data.map((item) => item.date);
      const profitLossPercentages = data.map((item) => item.profitLossPercentage);

      setChartData({
        labels: dates,
        datasets: [
          {
            label: 'Profit/Loss Percentage Over Time',
            data: profitLossPercentages,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
            tension: 0.1,
          },
        ],
      });
    } catch (error) {
      console.error('Error fetching investment history:', error);
    }
  };

  return (
    <div id="investment-chart" className="chart-placeholder">
      <h3>Investment Chart</h3>
      {chartData.labels && chartData.labels.length > 0 ? (
        <Line data={chartData} options={{ responsive: true }} />
      ) : (
        <p>No data to display</p>
      )}
    </div>
  );
};

export default InvestmentChart;
