//zad 1
function pitagoras(a, b, c) {
    var tab = [a, b, c];
    tab.sort(function(x, y){ return x - y });

    if (tab[0]*tab[0] + tab[1]*tab[1] === tab[2]*tab[2]) {
        console.log("Tak, to jest trójka pitagorejska");
    } else {
        console.log("Nie, to NIE jest trójka pitagorejska");
    }
}
//zad 2
function podzielne(a, b, c) {
    for (var i = a; i <= b; i++) {
        if (i % c === 0) {
            console.log(i);
        }
    }
}
//zad 3
function tabliczka(n) {
    for (var i = 1; i <= n; i++) {
        var linia = "";
        for (var j = 1; j <= n; j++) {
            linia = linia + (i*j) + " ";
        }
        console.log(linia);
    }
}
//zad 4
function fibo(n) {
    var a = 0;
    var b = 1;

    for (var i = 0; i < n; i++) {
        console.log(a);
        var next = a + b;
        a = b;
        b = next;
    }
}

//zad 5
function choinka(h) {
    var gwiazdki = "";
    for (var i = 1; i <= h; i++) {
        gwiazdki = gwiazdki + "*";
        console.log(gwiazdki);
    }
}
//zad 6
function choinkaNoca(h) {
    // góra
    for (var i = h; i >= 1; i--) {
        var left = "";
        var right = "";

        for (var j = 0; j < i; j++) left += "*";
        for (var j = 0; j < (h - i) * 2 - 1; j++) right += " ";

        if (i === h) {
            console.log("*".repeat(h*2 - 1));
        } else {
            console.log(left + right + left);
        }
    }

    // dół
    console.log("*".repeat(h*2 - 1));
}
//zad 7
function poleProstokata(a, b) {
    return a * b;
}

function poleTrapezu(a, b, h) {
    return (a + b) * h / 2;
}

function poleRownolegloboku(a, h) {
    return a * h;
}

function poleTrojkata(a, h) {
    return a * h / 2;
}

function poleFigury(figura, x, y, z) {
    var wynik;

    switch(figura) {
        case "prostokat":
            wynik = poleProstokata(x, y);
            break;

        case "trapez":
            wynik = poleTrapezu(x, y, z);
            break;

        case "rownoleglobok":
            wynik = poleRownolegloboku(x, y);
            break;

        case "trojkat":
            wynik = poleTrojkata(x, y);
            break;

        default:
            console.log("Nieznana figura");
            return;
    }

    console.log("Pole = " + wynik);
}
