let table = document.getElementById("table")
let table2 = document.getElementById("table2")
let tableLeft = document.getElementById("tableLeft")
let table4 = document.getElementById("table4")

let dogalDurum = document.getElementById("dogalDurum")
let alternatif = document.getElementById("alternatif")
let maliyet = document.getElementById("maliyet")
let button = document.getElementById("button")
let hesaplaBtn = document.getElementById("hesaplaBtn")
let hurwics = document.getElementById("hurwics")
let teknik = document.getElementById("teknik")
let sonucDiv = document.getElementById("sonucDiv")
let sonucText = document.getElementById("sonucText")

// let ddValue = Number(dogalDurum.value)
// let altValue = Number(alternatif.value)
// console.log(ddValue, altValue);
button.addEventListener("click", (e) => {
    ddValue = Number(dogalDurum.value)
    altValue = Number(alternatif.value)
    maliyet = maliyet.value
    console.log(maliyet);


    tabloYap(altValue, ddValue, table)

    //Burayı 29 kasım saat 00.50 de denemek için yazdım 
    function tabloYap(satir, sutun, table) {
        for (let i = 0; i < satir; i++) {
            let element = document.createElement("tr")
            for (let i = 0; i < sutun; i++) {
                let element2 = document.createElement("td")
                let element3 = document.createElement("input")
                // element3.type="number"
                element3.id = `${i}`
                element2.appendChild(element3)
                element.appendChild(element2);
                element.id = `${i}`
                table.appendChild(element)
            }
        }
    }

    tabloYap(altValue, 1, table2)

    //table 3 işlemleri 

    tabloYap(altValue, 1, tableLeft)

    // Table4 işlemleri

    tabloYap(1, ddValue, table4)


    console.log(ddValue, altValue);

    hesaplaBtn.style.display = "flex"
})



hesaplaBtn.addEventListener("click", (e) => {
    console.log(teknik.value)
    console.log(maliyet)

    let toplam = 0
    let dizi1 = []
    let dizi2 = []
    let sayi = 0
    for (let i = 1; i <= altValue; i++) {
        //  toplam=0

        for (let j = 0; j < ddValue; j++) {
            // console.log(table.childNodes[i].childNodes[j].childNodes[0].value)
            // toplam += Number(table.childNodes[i].childNodes[j].childNodes[0].value)
            sayi = Number(table.childNodes[i].childNodes[j].childNodes[0].value)
            dizi2.push(sayi)
            console.log(dizi2);

        }
        dizi1.push(dizi2)
        console.log(dizi1);
        dizi2 = []

        //  console.log(dizi1);

    }

    // console.log("Toplam:" + toplam);

    console.log(dizi1[0][0]);

    let teknik2 = teknik.value


    switch (teknik2) {
        case 'iyimser': {
            if (maliyet === 'true') {
                iyimserM(dizi1)
            }
            else {
                iyimser(dizi1)
            }
        }; break;
        case 'kotumser': {
            if (maliyet === 'true') {
                kotumserM(dizi1)
            }
            else {
                kotumser(dizi1)
            }
        }; break;
        case 'hurwics': {
            if (maliyet === 'true') {
                hurwics2M(dizi1)
            }
            else {
                hurwics2(dizi1)
            }
        }; break;
    }

})


function iyimser(dizi) {
    let enBuyukler = []
    let enBuyukSatir = 0
    let enBuyukDeger = dizi[0][0];
    console.log(dizi);
    let a = 0;
    let b;
    for (let i = 0; i < altValue; i++) {
        let enBuyuk = dizi[i][0]
        for (let j = 0; j < ddValue; j++) {
            if (dizi[i][j] >= enBuyuk) {
                enBuyuk = dizi[i][j]
            }
            if (enBuyuk > enBuyukDeger) {
                enBuyukDeger = enBuyuk
                enBuyukSatir = i
                // b = i;
            }
        }
        enBuyukler.push(enBuyuk)

    }


    console.log("En buyukler : " + enBuyukler);
    for (let i = 0; i < altValue; i++) {
        table2.childNodes[i + 1].childNodes[0].childNodes[0].value = enBuyukler[i]
    }
    // let yeniDizi = enBuyukler.sort((x, y) => y - x)

    sonucDiv.style.display = "flex"
    // sonucText.textContent=`Verilen iyimser karar : ${yeniDizi[0]}`

    // let sonuc = tableLeft.childNodes[b + 1].childNodes[0].childNodes[0].value

    //deneme alt satır
    let sonuc2 = tableLeft.childNodes[enBuyukSatir + 1].childNodes[0].childNodes[0].value



    // console.log(sonuc);
    console.log(" En buyuk satir :" + Number(enBuyukSatir));
    // sonucText.textContent = `Verilen iyimser karar : ${sonuc}`

    // console.log('a', a)
    console.log("enbuyuk", enBuyukDeger)
    sonucText.textContent = `Verilen iyimser karar yeni  : ${sonuc2}`

    // console.log(b)
}


function iyimserM(dizi) {
    let enKucukler = []
    let enKucukSatir = 0
    let enKucukDeger = dizi[0][0];
    console.log(dizi);

    for (let i = 0; i < altValue; i++) {
        let enKucuk = dizi[i][0]
        for (let j = 0; j < ddValue; j++) {
            if (dizi[i][j] <= enKucuk) {
                enKucuk = dizi[i][j]
            }
            if (enKucuk < enKucukDeger) {
                enKucukDeger = enKucuk
                enKucukSatir = i;
            }
        }
        enKucukler.push(enKucuk)

    }


    console.log("En kucukler : " + enKucukler);
    for (let i = 0; i < altValue; i++) {
        table2.childNodes[i + 1].childNodes[0].childNodes[0].value = enKucukler[i]
    }
    // let yeniDizi = enBuyukler.sort((x, y) => y - x)

    sonucDiv.style.display = "flex"
    // sonucText.textContent=`Verilen iyimser karar : ${yeniDizi[0]}`

    // let sonuc = tableLeft.childNodes[b + 1].childNodes[0].childNodes[0].value

    //deneme alt satır
    let sonuc2 = tableLeft.childNodes[enKucukSatir + 1].childNodes[0].childNodes[0].value



    // console.log(sonuc);
    console.log(" En kucuk satir :" + Number(enKucukSatir));
    // sonucText.textContent = `Verilen iyimser karar : ${sonuc}`

    // console.log('a', a)
    console.log("enKucuk", enKucukDeger)
    sonucText.textContent = `Verilen iyimser karar yeni  : ${sonuc2}`

    // console.log(b)
}



function kotumser(dizi) {
    let enKucukler = []
    let enKucuklerinEnBuyugu = dizi[0][0]
    let sonucSatir;
    console.log(dizi);
    for (let i = 0; i < altValue; i++) {
        let enKucuk = dizi[i][0]
        for (let j = 0; j < ddValue; j++) {
            if (dizi[i][j] <= enKucuk) {
                enKucuk = dizi[i][j]
                if (dizi[i][j] >= enKucuklerinEnBuyugu) {
                    enKucuklerinEnBuyugu = dizi[i][j]
                    sonucSatir = i
                }
            }


        }
        enKucukler.push(enKucuk)
    }

    console.log("En kucukler : " + enKucukler);
    for (let i = 0; i < altValue; i++) {
        table2.childNodes[i + 1].childNodes[0].childNodes[0].value = enKucukler[i]
    }

    let sonuc2 = tableLeft.childNodes[sonucSatir + 1].childNodes[0].childNodes[0].value

    // let yeniDizi = enKucukler.sort().reverse()
    // console.log(yeniDizi);
    // console.log("Verilen kötümser karar :" + yeniDizi[0]);
    sonucDiv.style.display = "flex"
    sonucText.textContent = `Verilen kötümser karar : ${sonuc2}`
    return enKucuklerinEnBuyugu
}

function kotumserM(dizi) {
    let enBuyukler = []
    let enBuyukSatir = 0
    let enBuyukDeger = dizi[0][0];

    console.log(dizi);

    for (let i = 0; i < altValue; i++) {
        let enBuyuk = dizi[i][0]
        for (let j = 0; j < ddValue; j++) {
            if (dizi[i][j] >= enBuyuk) {
                enBuyuk = dizi[i][j]
            }
            // if (enBuyuk > enBuyukDeger) {
            //     enBuyukDeger = enBuyuk
            //     enBuyukSatir = i
            //     // b = i;
            // }
        }
        enBuyukler.push(enBuyuk)

    }


    console.log("En buyukler : " + enBuyukler);
    for (let i = 0; i < altValue; i++) {
        table2.childNodes[i + 1].childNodes[0].childNodes[0].value = enBuyukler[i]
    }
    let enBuyuklerinEnKucugu = enBuyukler[0];
    let sonucSatir;
    for (let i = 0; i < altValue; i++) {
        if (enBuyukler[i] <= enBuyuklerinEnKucugu) {
            enBuyuklerinEnKucugu = enBuyukler[i]
            sonucSatir = i
        }

    }

    sonucDiv.style.display = "flex"
    let sonuc2 = tableLeft.childNodes[sonucSatir + 1].childNodes[0].childNodes[0].value

    console.log("Maliyet yapılı kötümser karar değeri", enBuyuklerinEnKucugu)
    sonucText.textContent = `Verilen Kötümser karar yeni  : ${sonuc2}`

    return enBuyuklerinEnKucugu
}

function hurwics2(dizi) {
    let alfa = hurwics.value
    let enBuyukler = []
    let enKucukler = []
    let sonucSatir = 0

    console.log(dizi);

    for (let i = 0; i < altValue; i++) {
        let enBuyuk = dizi[i][0]
        let enKucuk = dizi[i][0]
        for (let j = 0; j < ddValue; j++) {
            if (dizi[i][j] >= enBuyuk) {
                enBuyuk = dizi[i][j]
            }
            if (dizi[i][j] <= enKucuk) {
                enKucuk = dizi[i][j]
            }

        }
        enBuyukler.push(enBuyuk)
        enKucukler.push(enKucuk)
    }
    let sonuclarDizisi = []
    let sonuc = enBuyukler[0] * alfa + (1 - alfa) * enKucukler[0];
    for (let i = 0; i < altValue; i++) {
        let deger = enBuyukler[i] * alfa + (1 - alfa) * enKucukler[i]
        sonuclarDizisi.push(deger)
        if (deger > sonuc) {
            sonuc = deger
            sonucSatir = i
        }

    }

    for (let i = 0; i < altValue; i++) {
        table2.childNodes[i + 1].childNodes[0].childNodes[0].value = sonuclarDizisi[i]
    }

    let sonuc2 = tableLeft.childNodes[sonucSatir + 1].childNodes[0].childNodes[0].value

    sonucDiv.style.display = "flex"
    console.log("Hurwics   karar değeri", sonuc)
    sonucText.textContent = `Hurwics e göre karar   : ${sonuc2}`

}

function hurwics2M(dizi) {
    let alfa = hurwics.value
    let enBuyukler = []
    let enKucukler = []
    let sonucSatir = 0

    console.log(dizi);

    for (let i = 0; i < altValue; i++) {
        let enBuyuk = dizi[i][0]
        let enKucuk = dizi[i][0]
        for (let j = 0; j < ddValue; j++) {
            if (dizi[i][j] >= enBuyuk) {
                enBuyuk = dizi[i][j]
            }
            if (dizi[i][j] <= enKucuk) {
                enKucuk = dizi[i][j]
            }

        }
        enBuyukler.push(enBuyuk)
        enKucukler.push(enKucuk)
    }
    let sonuclarDizisi = []
    let sonuc = enBuyukler[0] * (1 - alfa) + alfa * enKucukler[0];
    for (let i = 0; i < altValue; i++) {
        let deger = enBuyukler[i] * (1 - alfa) + alfa * enKucukler[i]
        sonuclarDizisi.push(deger)
        if (deger <= sonuc) {
            sonuc = deger
            sonucSatir = i
        }

    }

    for (let i = 0; i < altValue; i++) {
        table2.childNodes[i + 1].childNodes[0].childNodes[0].value = sonuclarDizisi[i]
    }

    let sonuc2 = tableLeft.childNodes[sonucSatir + 1].childNodes[0].childNodes[0].value

    sonucDiv.style.display = "flex"
    console.log("Hurwics   karar değeri", sonuc)
    sonucText.textContent = `Hurwics e göre karar   : ${sonuc2}`

}