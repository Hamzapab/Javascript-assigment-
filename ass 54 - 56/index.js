// Exo 01
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let i = 0;
let counter = 0;

while (i < friends.length){
    i++;
    if((typeof(friends[i]) === typeof("a") ) == true && friends[i].startsWith("A") == false){
        while (counter < friends.length){
            counter++;
            break;
    }
    console.log(`"${counter} => ${friends[i]}"`)
}
}
// Exo 02
