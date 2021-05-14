var shoppingList = [["milk", 3], ["cereal", 1], ['tomatoes', 4], ['french fries', 1], ['doritos', 4]]

// for (var i = 0; i < shoppingList.length; i++) {
//     let item = shoppingList[i][0]
//     let count = shoppingList[i][1]
//     console.log(item + ' ' + count)
// }

shoppingList.forEach((item, count) => console.log(shoppingList[count++]))