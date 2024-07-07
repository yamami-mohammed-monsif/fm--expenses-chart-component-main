fetch('data.json').then(
  (result) => {
    if(result.ok) {
      return result.json();
    }
  }
).then(
  (data) => createChart(data)
)

function createChart(data) {
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.map(value => value.day),
      datasets: [{
        label: '',
        data: data.map(value => value.amount),
        backgroundColor: ['hsl(10, 79%, 65%)'],
        borderRadius: {
          topLeft: 4,
          topRight: 4,
          bottomLeft: 4,
          bottomRight: 4
        },
        hoverBackgroundColor: 'hsl(186, 34%, 60%)'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: true,
          callbacks: {
            title: () => {
              return null
            }
          },
          backgroundColor: 'hsl(25, 47%, 15%)',
          padding: 8,
          bodyFont: {
            weight: '700',
            size: 13
          },
          yAlign: 'top',
          xAlign: 'center'
        }
      },
      scales: {
        x: {
          grid: {
            display: false
          },
          border: {
            display: false
          }
        },
        y: {
          display: false
        }
      }
    }
  });
}