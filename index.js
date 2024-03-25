var skills = ["Assess your own performance", "Communication", "Agree your responsibilities and see them through make decisions",
"Cope with stress and tension", "Deal with people in power and authority", "Work out what you are good and not so good at settle disagreement",
"Search for information and get advice", "Plan your time and energy", "Negotiate", "Solve problems"];
var percentages_2023 = [60, 80, 90, 90, 80, 80, 60, 60, 58, 60];
var percentages_2024 = [30, 100, 70, 40,60, 50, 100, 50, 30, 90];

// Configuration
var config = {
type: 'radar',
data: {
labels: skills,
datasets: [
{
  label: 'My First Dataset',
  data: percentages_2023,
  backgroundColor: 'rgba(255, 99, 132, 0.5)', // Red color for 2023
  borderColor: 'rgba(255, 99, 132, 1)',
  pointBackgroundColor: 'rgba(255, 99, 132, 1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgba(255, 99, 132, 1)'
},
{
  label: 'My Second Dataset',
  data: percentages_2024,
  backgroundColor: 'rgba(54, 162, 235, 0.5)', // Blue color for 2024
  borderColor: 'rgba(54, 162, 235, 1)',
  pointBackgroundColor: 'rgba(54, 162, 235, 1)',
  pointBorderColor: '#fff',
  pointHoverBackgroundColor: '#fff',
  pointHoverBorderColor: 'rgba(54, 162, 235, 1)'
}
]
},
options: {
scale: {
ticks: {
  beginAtZero: true,
  min: 0,
  max: 100,
  stepSize: 20
}
}
}
};

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, config);