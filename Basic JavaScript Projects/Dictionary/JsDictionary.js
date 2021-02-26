function my_Dictionary() {
    var Animal = {
        Species:"Dog",//key value pair
        Color:"Black",
        Breed:"Labrador",
        Age:5,
        Sound:"Bark!"
    };
    delete Animal.Sound;//delete statement
    document.getElementById("Dictionary").innerHTML = Animal.Sound;//calling the variable key value
}