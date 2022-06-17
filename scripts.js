window.onload = () => {
    let button = document.querySelector("#button");
    button.addEventListener("click", calculateBMI);
  }
  
  function calculateBMI() {
    let height = parseInt(document.querySelector("#height").value);
      let weight = parseInt(document.querySelector("#weight").value);
    let result = document.querySelector("#results");
    let bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // console.log(bmi);
    // alert("Your BMI is" + " " + bmi);
    if (bmi < 18.6) result.innerHTML =
            `Under Weight : ${bmi}`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            result.innerHTML = 
                `Normal : ${bmi}`;
  
        else result.innerHTML =
            `Over Weight : ${bmi}`;
  }
  