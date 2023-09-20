let myLeads = []
let oldLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const delBtn = document.getElementById("delete-el")
const leedsFromLocalStorage = JSON.parse(localStorage.getItem("myLeeds"))
const tabBtn = document.getElementById("tab-btn")


if(leedsFromLocalStorage){
    myLeads = leedsFromLocalStorage
    render(myLeads)
}

// Saves input to a neseted list on the screen
function render(leads){
    let listItems = "";
    for(let i = 0; i < leads.length; i++){
        listItems += `
        <li>
            <a href = "${leads[i]}" target="_blank">
                ${leads[i]}
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

// Added save button
inputBtn.addEventListener('click', function(){
    myLeads.push(inputEl.value)
    inputEl.value = "";
    localStorage.setItem("myLeeds", JSON.stringify(myLeads))
    render(myLeads)
})


// Added delete button 
delBtn.addEventListener('click', function(){
   localStorage.clear()
   myLeads = []
   render(myLeads)
    
})

// Added save tab button
tabBtn.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeeds", JSON.stringify(myLeads))
        render(myLeads)

    })
       
})


