
function BMI(weight,height) {
    let result = weight / (height * height);
    return result;
}
console.log(BMI(80,1.8));

function Status(BodyMass){
    if(BodyMass<18.5){
        return "لديك نقص في الوزن";
    } else if(BodyMass <25 && BodyMass> 18.5){
        return "وزنك صحي";
    } else if(BodyMass > 25){
        return "لديك زيادة في الوزن";
    }
}

function calcultor(){
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    let bmi_value = BMI(weight,height);
    let desc = Status(bmi_value);

    let box = document.getElementById("result");
    box.innerText = bmi_value + " == " + desc;
}