
let myLeeds = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("delete-el")


let leedsFromLocalStorage = JSON.parse(localStorage.getItem("myLeeds"))

if(leedsFromLocalStorage){
    myLeeds = leedsFromLocalStorage
    renderLeads()
}

// Added save button
inputBtn.addEventListener('click', function(){
    myLeeds.push(inputEl.value)
    inputEl.value = "";
    localStorage.setItem("myLeeds", JSON.stringify(myLeeds))
    renderLeads()

  console.log(localStorage.getItem("myLeeds"))
})



// Added delete button 
delBtn.addEventListener('click', function(){
    myLeeds.pop(inputEl.value)
    localStorage.clear("myLeeds", JSON.stringify(myLeeds))
    renderLeads()

  
})

// Saves input to a neseted list on the screen
function renderLeads(){
let listItems = "";
for(let i = 0; i < myLeeds.length; i++){
    listItems += `
    <li>
        <a href = "${myLeeds[i]}" target="_blank">
            ${myLeeds[i]}
        </a>
    </li>` 
    // Second way to create an element 
    // create element
    // set text 
    // append to ul
    // const li = document.createElement("li")
    // li.textContent = myLeeds[i]
    // ulEl.append(li)
}
ulEl.innerHTML = listItems
}