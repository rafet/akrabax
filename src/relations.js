const ben = 0;
const amca = 1;
const anne = 2;
const anneanne = 3;
const baba = 4;
const babanne = 5;
const bacanak = 6;
const baldiz = 7;
const damat = 8;
const dayi = 9;
const dede = 10;
const elti = 11;
const eniste = 12;
const erkekKardes = 13;
const gelin = 14;
const hala = 15;
const kari = 16;
const kaynana = 17;
const kayinpeder = 18;
const kayinco = 19;
const koca = 20;
const kuzen = 21;
const kizKardes = 22;
const teyze = 23;
const torun = 24;
const yenge = 25;
const ogul = 26;
const gorumce = 27;
const yegen = 28;
const kiz = 29;
// const cocuk = 30;


export default [
    {
        titles: [baba, kizKardes],
        result: hala
    },
    {
        titles: [baba, erkekKardes],
        result: amca
    },
    { titles: [anne, erkekKardes], result: dayi },
    {
        titles: [anne, kizKardes],
        result: teyze
    },
    {
        titles: [kari, anne],
        result: kaynana
    },
    {
        titles: [kari, baba],
        result: kayinpeder
    },
    {
        titles: [koca, anne],
        result: kaynana
    },
    {
        titles: [koca, baba],
        result: kayinpeder
    },
    {
        titles: [kari, kizKardes, koca],
        result: bacanak
    },
    {
        titles: [koca, erkekKardes, kari],
        result: elti
    },
    {
        titles: [amca, kari],
        result: yenge
    },
    {
        titles: [dayi, kari],
        result: yenge
    },
    {
        titles: [kari, kizKardes],
        result: baldiz
    },
    {
        titles: [kizKardes, koca],
        result: eniste
    },
    {
        titles: [baba, baba],
        result: dede
    },
    {
        titles: [anne, baba],
        result: dede
    },
    {
        titles: [anne, anne],
        result: anneanne
    },
    {
        titles: [baba, anne],
        result: babanne
    },
    {
        titles: [kizKardes, baba],
        result: baba
    },
    {
        titles: [erkekKardes, baba],
        result: baba
    },
    {
        titles: [kizKardes, anne],
        result: anne
    },
    {
        titles: [erkekKardes, anne],
        result: anne
    },
    {
        titles: [kari, koca],
        result: ben
    },
    {
        titles: [kari, erkekKardes],
        result: kayinco
    },
    {
        titles: [kiz, kiz],
        result: torun
    },
    {
        titles: [kiz, ogul],
        result: torun
    },
    {
        titles: [ogul, ogul],
        result: torun
    },
    {
        titles: [ogul, kiz],
        result: torun
    },

    {
        titles: [amca, kiz],
        result: kuzen
    },
    {
        titles: [amca, ogul],
        result: kuzen
    },
    {
        titles: [dayi, kiz],
        result: kuzen
    },
    {
        titles: [dayi, ogul],
        result: kuzen
    },
    {
        titles: [dayi, anne],
        result: anneanne
    },
    {
        titles: [ogul, kari],
        result: gelin
    },
    {
        titles: [kiz, koca],
        result: damat
    },
    {
        titles: [ogul, teyze],
        result: baldiz
    },
    {
        titles: [kiz, teyze],
        result: baldiz
    },
    {
        titles: [hala, baba],
        result: dede
    },
    {
        titles: [hala, koca],
        result: eniste
    },
    {
        titles: [hala, anne],
        result: babanne
    },
    {
        titles: [hala, ogul],
        result: kuzen
    },
    {
        titles: [hala, kiz],
        result: kuzen
    },
    {
        titles: [teyze, baba],
        result: dede
    },
    {
        titles: [teyze, anne],
        result: anneanne
    },
    {
        titles: [teyze, koca],
        result: eniste
    },
    {
        titles: [kuzen, dede],
        result: dede
    },
    {
        titles: [baba, kari],
        result: anne
    },
    {
        titles: [baba, bacanak],
        result: eniste
    },
    {
        titles: [anne, koca],
        result: baba
    },
    {
        titles: [gelin, koca],
        result: ogul
    },
    {
        titles: [koca, kizKardes],
        result: gorumce
    },
    {
        titles: [baldiz, baba],
        result: kayinpeder
    },
    {
        titles: [baldiz, anne],
        result: kaynana
    },
    {
        titles: [amca, anne],
        result: babanne
    },
    {
        titles: [amca, kizKardes],
        result: hala
    },
    {
        titles: [erkekKardes, dede],
        result: dede
    },
    {
        titles: [kizKardes, dede],
        result: dede
    },
    {
        titles: [teyze, kiz],
        result: kuzen
    },
    {
        titles: [teyze, ogul],
        result: kuzen
    },
    {
        titles: [dede, kiz],
        result: [baba, amca, hala]
    },
    {
        titles: [dede, ogul],
        result: [baba, amca, hala]
    },
    {
        titles: [erkekKardes, ogul],
        result: yegen
    },
    {
        titles: [erkekKardes, kiz],
        result: yegen
    },
    {
        titles: [kizKardes, ogul],
        result: yegen
    },
    {
        titles: [kizKardes, kiz],
        result: yegen
    },
    {
        titles: [amca, baba],
        result: dede
    },
    {
        titles: [dede, torun],
        result: [ben, kuzen]
    },
    {
        titles: [torun, baba],
        result: [ogul, damat]
    },
    {
        titles: [torun, anne],
        result: [kiz, gelin]
    }
]