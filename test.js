// AIzaSyBtMl6o8eWFYXMS8Z3LZx8gq4lzMSK1tZk

// 625dddd791a9b4de3

//try catch finally
//asynch await
// promises
// fetch
// then: 

//Each .then() receives the result from the previous promise in the chain.
// An async function always returns a promise. If the function explicitly returns a value, that value will be wrapped in a promise. If there's no return statement, it resolves to undefined.
// return; is the correct way to exit out of a function early. When you use return; in a function, it simply stops further execution of that function and exits at that point.



// const GOOGLE_API_KEY = "AIzaSyBtMl6o8eWFYXMS8Z3LZx8gq4lzMSK1tZk"; // Replace with your API key
// const SEARCH_ENGINE_ID = "625dddd791a9b4de3"; // Replace with your Search Engine ID

// document
//   .getElementById("mountainSelect")
//   .addEventListener("change", async (event) => {
//     const mountainName = event.target.value;
//     if (!mountainName) eixt();

//     document.getElementById("mountainCard").style.display = "none";
//     document.getElementById("mountainName").textContent = mountainName;

//     try {
//       const searchUrl = `https://www.googleapis.com/customsearch/v1?key=${GOOGLE_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(mountainName)}&searchType=image&num=1`;

//       console.log("Fetching from URL:", searchUrl); // Log the search URL

//       const response = await fetch(searchUrl);
//       const data = await response.json();
    
//       const imageItems = data.items[0].link
//       console.log("image link", imageItems)
//       console.log("API response:", data); // Log the response data to inspect

//       if (data.items && data.items.length > 0) {
//         const imageUrl = data.items[0].link;
//         document.getElementById("mountainImg").src = imageUrl;
//         document.getElementById("mountainCard").style.display = "block";
//       } else {
//         console.log("No images found for this query.");
//       }
//     } catch (error) {
//       console.error("Error fetching image:", error);
//     }
//   });





const obj = {"num": 1, num2 : 2}
console.log(obj.num)
console.log(obj.num2)