// -------------------------------------Basic----------------------------------------
// Ex 1
// Based on the following two Objects print the following message within the browser:

var sandwiches = `{ "sandwich": "hamburger", "calories": "260" }`;
var fries = `{ "fries_size": "Large French Fries", "calories": "570" }`;

let mySandwich = JSON.parse(sandwiches);
let myFries = JSON.parse(fries);

document.getElementById("sandwich").innerHTML = `My favorite sandwich is a ${mySandwich.sandwich} 
which has approximately ${mySandwich.calories} calories, along with it I enjoy eating ${myFries.fries_size} which
have about ${myFries.calories} calories.`

// -------------------------------------Intermediate----------------------------------------
// Ex 1
//Fill the JSON file with meaningful data for 10 Employees. 
//Print each employee's details in a table which will look representative and easily readable for the management team.


let employees = `[{
    "uniqueId": "234850",
"firstName": "Olga",
"lastName": "Terl",
"emailAddress": "terl@gmail.com", 
"jobTitle": "Web Developer",
"salary": "2500" 
},{
    "uniqueId": "123850",
"firstName": "Alena",
"lastName": "Kov",
"emailAddress": "kovl@gmail.com", 
"jobTitle": "Head of HR",
"salary": "2000" 
},{
    "uniqueId": "1233450",
"firstName": "Elena",
"lastName": "Nova",
"emailAddress": "noval@gmail.com", 
"jobTitle": "Sales Manager",
"salary": "1600" 
},{
    "uniqueId": "321850",
"firstName": "Mike",
"lastName": "Lev Blanc",
"emailAddress": "blancl@gmail.com", 
"jobTitle": "Sales Assistant",
"salary": "1500" 
},{
    "uniqueId": "750210",
"firstName": "Chandler",
"lastName": "Bing",
"emailAddress": "bingl@gmail.com", 
"jobTitle": "Software Engineer",
"salary": "3000" 
},{
    "uniqueId": "2413850",
"firstName": "Vaelria",
"lastName": "Kov",
"emailAddress": "kovvl@gmail.com", 
"jobTitle": "Intern",
"salary": "800" 
},{
    "uniqueId": "7654850",
"firstName": "Monica",
"lastName": "Geller",
"emailAddress": "gellerl@gmail.com", 
"jobTitle": "HR Assistant",
"salary": "1500" 
},{
    "uniqueId": "987850",
"firstName": "Rachel",
"lastName": "Green",
"emailAddress": "greenl@gmail.com", 
"jobTitle": "Personal Assistant",
"salary": "1900" 
},{
    "uniqueId": "12869483",
"firstName": "Hector",
"lastName": "Hec",
"emailAddress": "hecl@gmail.com", 
"jobTitle": "Pricing Manager",
"salary": "2200" 
}
]`

let personalData = JSON.parse(employees);

for (let i = 0; i < personalData.length; i++){
    document.getElementById("tableEmployees").innerHTML += 
    `Unique ID: ${personalData[i].uniqueId} <br> 
    Last Name: ${personalData[i].lastName}<br> 
    First Name: ${personalData[i].firstName}<br> 
    Email Address: ${personalData[i].emailAddress}<br>
    Job Title: ${personalData[i].jobTitle}<br>
    Salary: ${personalData[i].salary}<hr>`;
}

// -------------------------------------Advanced----------------------------------------
// Ex 1
//Iterate through the array of books. For each book, create a <p> element with the book title and author and append it to the page.
//Each book should have an image cover.
//Change the style of the book depending on whether you have read it or not.


let books =`[{
"title": "The Culture Map",
"author": "Erin Meyer",
"read": "Not yet",
"img": "books_covers/culturemap.jpg"
},
{
"title": "Where the Crawdads Sing",
"author": "Delia Owens",
"read": "Yes",
"img": "books_covers/raki.jpg"
},
{
"title": "City of Girls",
"author": "Elizabeth Gilbert",
"read": "Yes",
"img": "books_covers/girls.jpg"
},
{
"title": "Anxious People",
"author": "Frederick Backman",
"read": "Yes",
"img": "books_covers/apeople.jpg"
},
{
"title": "Sapiens",
"author": "Yuval Noah Harari",
"read": "Yes",
"img": "books_covers/sapiens.jpg" 
},
{
"title": "A Man Called Otto",
"author": "Frederick Backman",
"read": "Not yet",
"img": "books_covers/man.jpg"
}
]`


let myBooks = JSON.parse(books);

for(let i = 0; i < myBooks.length; i++){
    let color = ""    
    if(myBooks[i].read == "Yes"){
        color = "green"
    } 
    else {
        color = "red"
    }

    document.getElementById("main-container").innerHTML += 
    `<p><img src= "${myBooks[i].img}"></p>
    <p>Book Name: ${myBooks[i].title}<br></p> 
    <p>Author: ${myBooks[i].author}<br></p>
    <p id="${color}"> Have I read it: ${myBooks[i].read}</p>
    </p>
    <hr>`
}




