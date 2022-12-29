//  Q.1 Create a button , on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button
// Ans:- 
const headingchange =document.querySelector(".headingchange") //Q.3 Ans is heares
const changeHeading =()=>{
   const h1 =  `<h1>Mern Stack Devloper</h1>`
   document.body.insertAdjacentHTML("beforebegin", h1)  

   headingchange.textContent = "Welcome to Elevation Academy"
}


// Q.3 Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

let div =  document.createElement("div")
setInterval(()=>{
let date = new Date()
let hrs = date.getHours()
let min = date.getMinutes()
let sec = date.getSeconds()
  div.innerHTML =`<h2>Time = ${hrs}hrs::${min}min::${sec}sec</h2>`
  document.body.appendChild(div)
},1000)


// Q.4 Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy"
//const headingchange =document.querySelector(".headingchange") //Q.3 Ans is heares
// const changeHeading =()=>{
//     const h1 =  `<h1>Mern Stack Devloper</h1>`
//     document.body.insertAdjacentHTML("beforebegin", h1)  
 
//     headingchange.textContent = "Welcome to Elevation Academy"
//  }


// Q.5 Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text

const hideText = ()=>{
const text = document.querySelector("#hide__h2")
text.textContent = null
}






