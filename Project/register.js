var salon={
    name:"The Fashion Pet",
    address:{
        street:"Palm Ave",
        number:"927-G"
    },
    hour:{
        open:"9:00 am",
        close:"5:00 pm"
    },
    pets:[]
}
var c=0;
// OBJECT CONSTRUCTOR
class Pet{
    constructor(name,age,gender,breed,treat,service,ownerName,contactPhone){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.breed=breed;
        this.treat=treat;
        this.service=service;
        this.ownerName=ownerName;
        this.contactPhone=contactPhone;
        this.id=c++;
    }
}

// DISPLAY PET COMPLETE INFO UNDER REGISTRATION FUNCTION
function displayPet(){
    var tmp="";
    document.getElementById("info").innerHTML=`<p> Amount of pets: ${salon.pets.length} </p>`;
    for(var i=0;i<salon.pets.length;i++){
        // aPet=salon.pets[i];              YOU CAN USE aPet instead of salon.pets[i]... with this line of code
        tmp+=`
        <tr id="${salon.pets[i].id}" Class="pet">
            <div class="pet-title">
                <td>Name: ${salon.pets[i].name}</td>
                <td><button onclick="deletePet(${salon.pets[i].id});">🗑️</button></td>
            </div>
            <td>Age: ${salon.pets[i].age}</td>
            <td>Gender: ${salon.pets[i].gender}</td>
            <td>Breed: ${salon.pets[i].breed}</td>
            <td>Fave Treat: ${salon.pets[i].treat}</td>
            <td>Service: ${salon.pets[i].service}</td>
            <td>Owner: ${salon.pets[i].ownerName}</td>
            <td>Contact: ${salon.pets[i].contactPhone}</td>
        </tr>`}

    document.getElementById("pets").innerHTML=tmp;
}

// DELETE PET FUNCTION
function deletePet(id){
    var div=document.getElementById(id);
    for(var i=0;i<salon.pets.length;i++){
        var aPet=salon.pets[i];
        if (aPet.id==id) {
            deleteIndex=i;
        }
    }

    salon.pets.splice(deleteIndex,1);
    div.remove();
    displayPet();
}

// MAKE SURE NO EMPTY INPUTS FUNCTION
function validation(i1,i2,i3,i4,i5,i6,i7,i8){
    if(i1!="" &&
        i2!="" &&
        i3!="" &&
        i4!="" &&
        i5!="" &&
        i6!="" &&
        i7!="" &&
        i8!=""){
        var flag=true
        }
    return flag;
}

// REGISTER PET FUNCTION
function registerPet(){
    // get and store value
    var inputName=document.getElementById("petName").value;
    var inputAge=document.getElementById("petAge").value;
    var inputGender=document.getElementById("petGender").value;
    var inputBreed=document.getElementById("petBreed").value;
    var inputTreat=document.getElementById("petTreat").value;
    var inputService=document.getElementById("petService").value;
    var inputOwnerName=document.getElementById("petOwner").value;
    var inputPhone=document.getElementById("ownerPhone").value;
    //console.log(inputName,inputAge,inputGender,inputBreed,inputService,inputOwnerName,inputPhone)
    if (validation(inputName,inputAge,inputGender,inputBreed,inputTreat,inputService,inputOwnerName,inputPhone)){
        // create generic object
        var thePet=new Pet(inputName,Number(inputAge),inputGender,inputBreed,inputTreat,inputService,inputOwnerName,inputPhone);
        // push the objects into array
        salon.pets.push(thePet);
        // clear the inputs
        clearInputs();
        displayPet();

        var element=document.getElementById('alert');
        element.classList.remove("hide");
        setTimeout(function(){
            element.classList.add("hide");
        },3000);
    } else {
        var fail=document.getElementById('fail');
        fail.classList.remove("hide");
        setTimeout(function(){
            element.classList.add("hide");
        },3000);
    }
}
// CLEAR INPUTS FUNCTION
function clearInputs(){
    document.getElementById("petName").value="";
    document.getElementById("petAge").value="";
    document.getElementById("petGender").value="";
    document.getElementById("petBreed").value="";
    document.getElementById("petTreat").value="";
    document.getElementById("petOwner").value="";
    document.getElementById("ownerPhone").value="";
}

function searchPet(){
    // GETTING THE SEARCH STRING
    var searchString=document.getElementById(`searchPet`).value;
    // TRAVEL THE ARRAY TO SEARCH THE STRING
    salon.pets.forEach(pet => {
        var petBox=document.getElementById(pet.id);
        console.log(petBox);
        // COMPARE THE SEARCH STRING WITH ALL THE NAMES
        if(pet.name.toLowerCase().includes(searchString.toLowerCase()) || 
            pet.service.toLowerCase().includes(searchString.toLowerCase())){
            // HIGHLIGHT THE ELEMENT IN THE DOM
            petBox.classList.add(`show`)
        } else {
            console.log(`Not found!`);
            petBox.classList.remove(`show`);
            petBox.classList.add('hide');
        }
    });
}
// ALWAYS RUNNING ON PAGE LOAD FUNCTION ??? // NOTE: "INIT" SHORTHAND FOR "INITIATE"
function init(){
    console.log("init");

    var scooby=new Pet("Scooby",50,"Male","Dane","Scooby Snacks","Shower","Shaggy","619-420-4220");
    var scrappy=new Pet("Scrappy",35,"Male","Dane","Scooby Snacks","Nails Clipped","Shaggy","619-420-4220");
    var polly=new Pet("Polly",100,"Female","Parrot","Cracker","Beak Shine","Captain Black Beard","619-666-6666");
    var tod=new Pet("Tod",16,"Male","Fox","Milk","Fur Trim","Widow Tweed","619-012-3456");

    salon.pets.push(scooby);
    salon.pets.push(scrappy);
    salon.pets.push(polly);
    salon.pets.push(tod);

    displayPet();
// HOOK EVENTS
    document.querySelector(`#btn-register`).addEventListener("click", registerPet);
    document.querySelector(`#searchPet`).addEventListener("keyup",searchPet);
}
window.onload=init;