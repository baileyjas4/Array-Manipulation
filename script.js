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
console.log(addItem('bread'));
console.log(addItem('cheese'));
console.log(addItem('bread'));

console.log(shoppingList)


function removeLastItem() {
    shoppingList.pop(item);
}


// function displayList() {
//     console.log(shoppingList);
// }




