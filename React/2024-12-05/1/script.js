document.getElementById('doboz').style.backgroundColor ="green"; //doboznak háttérszíne zöld
document.getElementById('doboz').style.color ="white";//Betúszíne a doboznak fehér
fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => console.log(res));//jsonból adatot szed ki
//
fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json()).then(res => document.getElementById('doboz').innerHTML = res[0].title);
//kiíratja a kiszedett adatokat a dobozba, de csak az első elemét