window.onscroll = function(){
    const scroolTop = document.documentElement.scrollTop;

    if(scroolTop>0){
        document.querySelector('.navi').classList.add('black');
        document.querySelector('.kontakt-navigation').classList.add('hide');
    }
    else{
        document.querySelector('.navi').classList.remove('black');
        document.querySelector('.kontakt-navigation').classList.remove('hide');
    }
    if(scroolTop>650){
        document.querySelector('.navi').classList.add('opacity');
    }
    else{
        document.querySelector('.navi').classList.remove('opacity');
    }
}
/*Kontakt fb i instagram*/
var fb = document.querySelector('.button-f');
var inst = document.querySelector('.button-i');
var fb1 = document.getElementById('button-f');
var inst1 = document.getElementById('button-i');
fb.addEventListener("click", function(){
    window.open('https://www.facebook.com/profile.php?id=100063574807459'); return false;
})
inst.addEventListener("click", function(){
    window.open('https://www.instagram.com/dekorativna_cigla_belini_/'); return false;
})
fb1.addEventListener("click", function(){
    window.open('https://www.facebook.com/profile.php?id=100063574807459'); return false;
})
inst1.addEventListener("click", function(){
    window.open('https://www.instagram.com/dekorativna_cigla_belini_/'); return false;
})
/*kontakt mail*/
var otvori3 = document.querySelector('.btnKontakt');
var zatvori3 =document.querySelector('.btnClose2')
var modalni3 = document.querySelector('.email');
var text = document.querySelector('.text');
otvori3.addEventListener("click", function(){
    window.open('https://novi.kupujemprodajem.com/uredjenje-kuce/zidna-dekoracija/dekorativna-cigla-belini-dostava-u-celoj-srbiji/oglas/127688132'); return false;
})
zatvori3.addEventListener("click", function(){
    modalni3.style.display = 'none';
    text.style.display = 'block';
})
/*Modalni prozor za kamen*/
var otvori1 = document.querySelector('.kamen1');
var zatvori1 = document.querySelector('.btnClose');
var modalni1 = document.querySelector('.informacije1');
var kamen = document.querySelector('.kamen');
var displej = window.matchMedia("(max-width: 760px)")
otvori1.addEventListener("click", function(){
    modalni1.style.display = 'block';
    kamen.style.display = 'none';
})
zatvori1.addEventListener("click", function(){
    modalni1.style.display = 'none';
    kamen.style.display = 'flex';
})

/*Modalni prozor za ciglu*/
var otvori2 = document.querySelector('.cigla');
var zatvori2 = document.querySelector('.btnClose1');
var modalni2 = document.querySelector('.informacije2');
var kamen = document.querySelector('.kamen');
var displej = window.matchMedia("(max-width: 760px)")
otvori2.addEventListener("click", function(){
    modalni2.style.display = 'block';
    kamen.style.display = 'none';
})
zatvori2.addEventListener("click", function(){
    modalni2.style.display = 'none';
    kamen.style.display = 'flex';
})
var navigacija = document.querySelector(".navi")
document.querySelector(".hamburger").addEventListener("click", function(){          
    document.querySelector('.navi').classList.toggle('modal');
});
const navigation = document.querySelector('.navi');
    i = navigation.querySelectorAll('a');

    i.forEach(function(navi){
        navi.addEventListener('click', function(){
            for(let k=0; k<i.length; k++){
            i[k].classList.remove('active');
        }
            this.classList.add('active');
        document.querySelector('.navi').classList.toggle('modal');
})});