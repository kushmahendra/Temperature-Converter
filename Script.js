document.getElementById('convert-btn').addEventListener('click', function () {
    const degree = parseFloat(document.getElementById('degree').value);
    const unit = document.getElementById('unit').value;
    let result = [];
  
    if (isNaN(degree)) {
      alert("Please enter a valid temperature.");
      return;
    }
  
    switch (unit) {
      case 'Celsius':
        result = [`${(degree * 9 / 5 + 32).toFixed(2)} °F`, `${(degree + 273.15).toFixed(2)} K`];
        break;
      case 'Fahrenheit':
        result = [`${((degree - 32) * 5 / 9).toFixed(2)} °C`, `${(((degree - 32) * 5 / 9) + 273.15).toFixed(2)} K`];
        break;
      case 'Kelvin':
        result = [`${(degree - 273.15).toFixed(2)} °C`, `${((degree - 273.15) * 9 / 5 + 32).toFixed(2)} °F`];
        break;
      default:
        result = ['Invalid unit'];
    }
  
    document.getElementById('result').innerHTML = `${result[0]}<br>${result[1]}`;
  });
  