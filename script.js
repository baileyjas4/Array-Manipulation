let shoppingList = [];
// Adds new items to the list
function addItem(item) {

    if (!shoppingList.includes(item)){ //checking for duplicates in the list if there is none we add the item if there is we notify that the item is already there
        shoppingList.push(item);
        return item + ' is added'
    } else {
        return item + ' is already in the list.'
    }

}

function removeLastItem() {
    shoppingList.pop();
}

function displayList() {
    console.log(shoppingList);
}

function filterItems(searchTerm) {
    return shoppingList.filter( item => item.toLowerCase().includes(searchTerm.toLowerCase()))
}

// Display list in browser
function displayList(filteredList = shoppingList) {
    const ul = document.getElementById("shoppingList");
    ul.innerHTML = ""; // clear list

    filteredList.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    });
}

// Event listeners
document.getElementById("addBtn").addEventListener("click", () => {
    const input = document.getElementById("itemInput");
    const msg = addItem(input.value.trim());
    alert(msg); // optional: notify user
    input.value = "";
    displayList();
});

document.getElementById("removeBtn").addEventListener("click", () => {
    removeLastItem();
    displayList();
});

// Filter while typing
document.getElementById("searchInput").addEventListener("input", (e) => {
    const searchTerm = e.target.value;
    displayList(filterItems(searchTerm));
});