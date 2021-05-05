var kutyaTomb = [{
        nev: "Molly",
        kor: "9",
        fajta: "Német Juhász"
    },
    {
        nev: "Roki",
        kor: "2",
        fajta: "Német Juhász"
    },
    {
        nev: "Buksi",
        kor: "3",
        fajta: "Husky"
    }
];
var irany = true;

$(function () {
    tablazatKiir();




});
function tablazatKiir() {
    $("article").empty();
    $("article").append("<table>");
    $("article table").append("<tr><th>Név</th><th>kor</th><th>fajta</th></tr>");
    for (var i = 0; i < kutyaTomb.length; i++) {
        $("article table").append("<tr><td>" + kutyaTomb[i].nev + "</td><td>" + kutyaTomb[i].kor + "</td><td>" + kutyaTomb[i].fajta + "</td></tr>");

    }
    $("article th").click(rendezes);
}
function rendezes() {
    console.log(irany);
    if (irany) {
        kutyaTomb.sort(function (a, b) {
            return Number(a.nev > b.nev) - 0.5;
        });
        irany = false;
    } else {
        kutyaTomb.sort(function (a, b) {
            return Number(a.nev < b.nev) - 0.5;
        });
        irany = true;
    }
    tablazatKiir();

}


