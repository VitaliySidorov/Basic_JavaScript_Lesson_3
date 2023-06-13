const name = prompt('Введите имя', 'Виталий');
function hiFn(name) {
    alert(`Привет, ${name}!`);
}
hiFn(name);

if (confirm("Вы уверены?")) {
    alert("Мы рады, что вы уверены!");
}
else {
    alert("Жаль, что вы неуверены...");
}