let calculations = localStorage.getItem("calculations") || "";
      document.querySelector(".js-calculations").innerHTML = calculations || "";

      function updateCalculation(value) {
        calculations += value;
        localStorage.setItem("calculations", calculations);
        document.querySelector(".js-calculations").innerHTML = calculations;
      }

      function calculate() {
        calculations = eval(calculations);
        console.log(calculations);
        localStorage.setItem("calculations", calculations);
        document.querySelector(".js-calculations").innerHTML = calculations;
      }

      function clearCalculations() {
        calculations = "";
        console.log(calculations);
        localStorage.removeItem("calculations");
        document.querySelector(".js-calculations").innerHTML = calculations;
      }
      

      document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
          calculate();
        } 
        if (event.key ==='Backspace') {
          clearCalculations();
        }
      });
    