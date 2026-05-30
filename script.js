// BMI Calculator

function calculateBMI(){

    let weight =
    document.getElementById("weight").value;

    let height =
    document.getElementById("height").value;

    if(weight === "" || height === ""){

        document.getElementById("result")
        .innerHTML =
        "Please enter all values";

        return;
    }

    height = height / 100;

    let bmi =
    weight / (height * height);

    let category = "";

    if(bmi < 18.5){
        category = "Underweight";
    }
    else if(bmi < 25){
        category = "Normal Weight";
    }
    else if(bmi < 30){
        category = "Overweight";
    }
    else{
        category = "Obese";
    }

    document.getElementById("result")
    .innerHTML =
    `BMI: ${bmi.toFixed(1)} (${category})`;
}


// Dark Mode

const themeBtn =
document.getElementById("themeBtn");

themeBtn.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

});


// Testimonials

const testimonials = [

{
text:"The yoga sessions helped me become more active and mindful throughout the day.",
name:"Priya Sharma"
},

{
text:"I improved my flexibility and developed a consistent routine.",
name:"Ananya Joshi"
},

{
text:"A simple and welcoming wellness experience for beginners.",
name:"Neha Patil"
}

];

let current = 0;

function changeTestimonial(){

    current++;

    if(current >= testimonials.length){
        current = 0;
    }

    document.getElementById("testimonialText")
    .innerText =
    testimonials[current].text;

    document.getElementById("testimonialName")
    .innerText =
    "- " + testimonials[current].name;

}

setInterval(changeTestimonial,4000);


// Contact Form Validation

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

    e.preventDefault();

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let message =
    document.getElementById("message").value;

    if(
        name === "" ||
        email === "" ||
        message === ""
    ){
        alert("Please fill all fields");
    }
    else{
        alert("Thank you! Your message has been submitted.");
        this.reset();
    }

});