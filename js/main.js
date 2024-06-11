window.onload = () => {
  const monthInputs = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];

  monthInputs.forEach(month => {
    ['income', 'expenses'].forEach(type => {
      const input = document.getElementById(`${month}-${type}`);
      input.addEventListener('input', function () {
        let value = this.value.trim();
        if (!Number.isFinite(Number(value)) || value < 0) {
          this.value = '';
        }
      });
    });
  });

  document.getElementById('download-btn').addEventListener('click', () => {
    const canvas = document.getElementById('myChart');
    const link = document.createElement('a');
    link.download = 'canvas-image.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  const ctx = document.getElementById('myChart').getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      datasets: [{
        label: 'Income',
        data: [],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }, {
        label: 'Expenses',
        data: [],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  document.getElementById('chart-tab').addEventListener('click', () => {
    const incomeAndExpenses = {
      january: {
        income: document.getElementById('january-income').value,
        expenses: document.getElementById('january-expenses').value
      },
      february: {
        income: document.getElementById('february-income').value,
        expenses: document.getElementById('february-expenses').value
      },
      march: {
        income: document.getElementById('march-income').value,
        expenses: document.getElementById('march-expenses').value
      },
      april: {
        income: document.getElementById('april-income').value,
        expenses: document.getElementById('april-expenses').value
      },
      may: {
        income: document.getElementById('may-income').value,
        expenses: document.getElementById('may-expenses').value
      },
      june: {
        income: document.getElementById('june-income').value,
        expenses: document.getElementById('june-expenses').value
      },
      july: {
        income: document.getElementById('july-income').value,
        expenses: document.getElementById('july-expenses').value
      },
      august: {
        income: document.getElementById('august-income').value,
        expenses: document.getElementById('august-expenses').value
      },
      september: {
        income: document.getElementById('september-income').value,
        expenses: document.getElementById('september-expenses').value
      },
      october: {
        income: document.getElementById('october-income').value,
        expenses: document.getElementById('october-expenses').value
      },
      november: {
        income: document.getElementById('november-income').value,
        expenses: document.getElementById('november-expenses').value
      },
      december: {
        income: document.getElementById('december-income').value,
        expenses: document.getElementById('december-expenses').value
      }
    };

    const incomeData = [];
    const expensesData = [];

    for (let month in incomeAndExpenses) {
      incomeData.push(incomeAndExpenses[month].income);
      expensesData.push(incomeAndExpenses[month].expenses);
    }

    myChart.data.datasets[0].data = incomeData;
    myChart.data.datasets[1].data = expensesData;
    myChart.update();
  });
};