const btn = document.createElement("button");
btn.onclick = function () {
    alert("Natív gomb megnyomva!")
}
btn.innerHTML = "Natív gomb";
document.getElementById("nativ-button-container").appendChild(btn);

const gomb = React.createElement("button",      "gomb": Unkown word.
    {
        onclick: function()
        {
            alert("Ez eg react kód!");
        },
    },
    "React gomb"    "gomb": Unkown word.
)
ReactDom.rander(gomb,documentElementById("react-button-container"));