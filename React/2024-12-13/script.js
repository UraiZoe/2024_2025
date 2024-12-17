const btn = document.createElement("button"); //létrehozunk egy gombot
btn.onclick = function () { //function gombnyomásra
    alert("Natív gomb megnyomva!") //gombnyomásra aktíválodik
}
btn.innerHTML = "Natív gomb"; //gomb szövege Natív gomb lesz
document.getElementById("nativ-button-container").appendChild(btn);


//React mit akarok látni?   // 2db paramétert használ
const gomb = React.createElement("button",  //első) Melyik elemte szeretnénk használini (button, header..idk)
    {
        onClick: function() //Belső függvény kötelező, külömben nincs értelme
        {
            alert("Ez egy react kód!");
        },
    },
    "React gomb"   // második       //gomb szövege React gomb lesz
)
ReactDOM.render(gomb, document.getElementById("react-button-container"));  //második) refelektár a dom elemre, hivatkozási megoldása