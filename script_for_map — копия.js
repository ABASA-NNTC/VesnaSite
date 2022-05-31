// Переменные с координатами карт
let el_m = [55.042136, 82.91699];
let el1_m = [54.042136, 82.91699];
let el2_m = [53.042136, 82.91699];
let el3_m = [52.042136, 82.91699];
let mapDG;

// Функция для отображения карты
DG.then(function() {
    mapDG = DG.map('map', {
        center: [56.48924492554364, 44.019436870349246],
        zoom: 13
    });

    DG.geoJson(data, {
        style: function (feature) {
            console.log(feature.properties["stroke"]);
            return {
                stroke: true,
                fill: true,
                color: feature.properties.stroke,
                fillColor: feature.properties.fill,
                fillOpacity: feature.properties["fill-opacity"],
            };
        }
    }
    ).addTo(mapDG);
});

//Функция для смена координат №1
function Change_map_el1() {
    let el_m = el1_m;
    map_obj.panTo(el1_m);
};

// Функция для смены координат №2
function Change_map_el2() {
    let el = el2_m;
    map_obj.panTo(el2_m);
};

// Функция для смены координат №3
function Change_map_el3() {
    let el = el3_m;
    map_obj.panTo(el3_m);
};

//Функция показывающая/скрывающая блоки
function showButton2() {
    document.getElementsByClassName('elements2')[0].style.display="block";
    document.getElementsByClassName('elements')[0].style.display="none";
}

//Функция показывающая/скрывающая блоки
function showButton1() {
    document.getElementsByClassName('elements2')[0].style.display="none";
    document.getElementsByClassName('elements')[0].style.display="block";
}

// Переменные для хранения и обработки checkbox
let num_f = [];
let num_c = [];
let num_f_id=[];
let num_c_id=[];

// Функциb checkbox
function fun1_f() {
var chbox;
chbox=document.getElementById('el1_f');
    if (chbox.checked) {
        console.log('Выбран 1 поле');
        num_f[0] = 1;
        let f1_id='001'
        num_f_id[0] = f1_id;
    }
    if(chbox.checked==false) {
        num_f[0] = null;
        num_f_id[0]= null;
    }
}

function fun2_f() {
var chbox;
chbox=document.getElementById('el2_f');
    if (chbox.checked) {
        console.log('Выбран 2 поле');
        num_f[1] = 2;
        let f2_id='002';
        num_f_id[1] = f2_id;
    }
    if(chbox.checked==false) {
        num_f[1]=null;
        num_f_id[1] = null;
    }
}

function fun3_f() {
var chbox;
chbox=document.getElementById('el3_f');
    if (chbox.checked) {
        console.log('Выбран 3 поле');
        num_f[2] = 3;
        let f3_id='003';
        num_f_id[2] = f3_id;
    }
    if(chbox.checked==false) {
        num_f[2]=null;
        num_f_id[2]=null;
    }
}

function fun1_c() {
var chbox;
chbox=document.getElementById('el1_c');
    if (chbox.checked) {
        console.log('Выбран 1 кадастр');
        num_c[0]=1;
        let c1_id='52:43:0100016:41';
        num_c_id[0]=c1_id;
    }
    if(chbox.checked==false) {
        num_c[0]=null;
        num_c_id[0]=null;
    }
}

function fun2_c() {
var chbox;
chbox=document.getElementById('el2_c');
    if (chbox.checked) {
        console.log('Выбран 2 кадастр');
        num_c[1]=2;
        let c2_id ='52:43:0100016:42';
        num_c_id[1]=c2_id
    }
    if(chbox.checked==false) {
        num_c[1]=null;
        num_c_id[1]=null;
    }
}

function fun3_c() {
var chbox;
chbox=document.getElementById('el3_c');
    if (chbox.checked) {
        console.log('Выбран 3 кадастр');
        num_c[2]=3;
        let c3_id = '52:43:0100016:43';
        num_c_id[2]=c3_id;
    }
    if(chbox.checked==false) {
        num_c[2]=null;
        num_c_id[2]=null;
    }
}

// Функция для кнопки "Выбрать всё"
function fun_all() {
var chbox;
chbox=document.getElementById('all_f');
    if (chbox.checked) {
        document.getElementById('el1_f').click();
        document.getElementById('el2_f').click();
        document.getElementById('el3_f').click();
        document.getElementById('el1_c').click();
        document.getElementById('el2_c').click();
        document.getElementById('el3_c').click();
    }
}

// Функция показывающая карты, зависящая от checkbox
function showField() {
    if (num_f.includes(1)){
        Change_map_el1();
    }
    if (num_f.includes(2)){
        Change_map_el2();
    }
    if (num_f.includes(3)){
        Change_map_el3();
    }

    if (num_c.includes(1)){
        Change_map_el1();
    }
    if (num_c.includes(2)) {
        Change_map_el2();
    }
    if (num_c.includes(3)) {
        Change_map_el3();
    }
    console.log('id выбранных полей: ' + num_f_id);
    console.log('Номера выбранных кадастров: ' + num_c_id);
}



// Кнопка "Подробнее"
function info_el1_f() {
    alert('На огороде растут ягоды');
}

function info_el2_f() {
    alert('На грядке растёт морковь');
}

function info_el3_f() {
    alert('На поле растёт пшеница');
}

// Функция для сброса карт(перезагрузка страницы)
function reload() {
    location.reload();
}
