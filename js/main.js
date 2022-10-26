//Inizializating attributes
let div = document.getElementById("divToWrite");
const members = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        image: "wayne-barnet-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        image: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        image: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        image: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        image: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        image: "barbara-ramos-graphic-designer.jpg"
    }
]

//Print in console
for(let i = 0; i < members.length; i++){
    console.log(members[i].name);
    console.log(members[i].role);
    console.log(members[i].image);
}

//Print in DOM (String) 
for(let i = 0; i < members.length; i++){
    div.innerHTML += members[i].name + ", " + members[i].role + ", " + members[i].image + "<br>"
}
//Print in DOM (images)
for(let i = 0; i < members.length; i++){
    let src = "<img src = 'img/" + members[i].image +"' alt ='image'>";
    div.innerHTML += members[i].name + ", " + members[i].role + " " + src + "<br>";
}