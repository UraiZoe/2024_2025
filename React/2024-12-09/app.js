const btn = document.createElement("button"); //létrehozunk egy gombot
btn.onclick = function () { //function gombnyomásra
    alert("Natív gomb megnyomva!") //gombnyomásra aktíválodik
}
btn.innerHTML = "Natív gomb"; //gomb szövege Natív gomb lesz
document.getElementById("nativ-button-container").appendChild(btn);

const gomb = React.createElement("button",  // 2db paramétert használ
    {
        onClick: function() //rányomásra függvényt hoz létre
        {
            alert("Ez egy react kód!");//gombnyomásra aktíválodik
        },
    },
    "React gomb"   // második       //gomb szövege React gomb lesz
)
ReactDOM.render(gomb, document.getElementById("react-button-container"));