// document.getElementById("grandparent").addEventListener("click", () => {
//   console.log("Grand clicked");
// });
// document.getElementById("parent").addEventListener("click", () => {
//   console.log("Parent clicked");
// });
// document.getElementById("child").addEventListener("click", () => {
//   console.log("Child clicked");
// });

//eventhough usecapture(True/False) is not giving event bubbles up order default
// console result--->child paretn grandparednt up order bubbles up

// document.getElementById("grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grand clicked");
//   },
//   true
// );
// document.getElementById("parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicked");
//   },
//   true
// );
// document.getElementById("child").addEventListener(
//   "click",
//   () => {
//     console.log("Child clicked");
//   },
//   true
// );

// console result--->  grandparednt --->paretnup --->child order trickles down (Captures down)

// document.getElementById("grandparent").addEventListener(
//   "click",
//   () => {
//     console.log("Grand clicked");
//   },
//   true //trickling cycle
// );
// document.getElementById("parent").addEventListener(
//   "click",
//   () => {
//     console.log("Parent clicked");
//   },
//   false //bubbling cycling
// );
// document.getElementById("child").addEventListener(
//   "click",
//   () => {
//     console.log("Child clicked");
//   },
//   true //trickling cycle
// );
//if trickling cycle is present then order of execution will be trickling--->ubbling
//Grand clicked(Capturing)--> Child clicked(Capturing)--> Parent clicked(Bubbling)

document.getElementById("grandparent").addEventListener(
  "click",
  (e) => {
    console.log("Grand clicked");
    e.stopPropagation();
  },
  true //trickling cycle
);
document.getElementById("parent").addEventListener(
  "click",
  (e) => {
    console.log("Parent clicked");
  },
  true //trickling cycling
);
document.getElementById("child").addEventListener(
  "click",
  (e) => {
    console.log("Child clicked");
  },
  true //trickling cycle
);

//sice this propagation cause performance issues so we need to stop propagting events
