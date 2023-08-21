const accordion = document.getElementsByClassName('contentBx');

for(i = 0; i<accordion.length; i++){
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
};

const button1 = document.getElementById('button-1');
const button2 = document.getElementById('button-2');
const button3 = document.getElementById('button-3');
const items = document.getElementsByClassName('grid_item');

button1.addEventListener('click', function () {
    items[0].classList.remove('blurred')
    items[4].classList.remove('blurred')
    
    items[1].classList.add('blurred')
    items[2].classList.add('blurred')
    items[3].classList.add('blurred')
    items[5].classList.add('blurred')
});
button2.addEventListener('click', function () {
    items[2].classList.remove('blurred')

    items[0].classList.add('blurred')
    items[1].classList.add('blurred')
    items[3].classList.add('blurred')
    items[4].classList.add('blurred')
    items[5].classList.add('blurred')
});
button3.addEventListener('click', function () {
    items[1].classList.remove('blurred')
    items[3].classList.remove('blurred')
    items[5].classList.remove('blurred')

    items[0].classList.add('blurred') 
    items[2].classList.add('blurred')
    items[4].classList.add('blurred')   
});


var btn = document.getElementsByClassName('dropdown_btn_content')
var content = document.getElementById('dropdown_btn_content')
var contactsCityInfo = document.getElementsByClassName('contacts_city_info')
var makeActive = document.getElementById('dropdown_btn_wrapper')

//function for: 
for(i = 0; i < btn[0].children.length; i++){
    btn[0].children[i].addEventListener('click', function () {
        document.getElementById('dropdown').innerHTML = this.classList;//1.changing the city's name on the drop-down 
        makeActive.classList.add('active')//2.making the button cakground color green after the city is choosen
        content.classList.remove('active')//3.deactivating the drop-down list after the city is choosen
        content.classList.add('off-margin')
    })
};
//function for: 
makeActive.addEventListener('click', function() {
    content.classList.add('active')//making drop-down content appear
})


var cityInfo = document.getElementsByClassName('contacts_info_switcher')

//function for: 
//showing the related city info under the drop down button
for(i = 0; i < btn[0].children.length; i++){
    btn[0].children[i].addEventListener('click', function () {
        if(this.classList.value === 'Canandaigua, NY') {
            cityInfo[0].children[0].classList.add('active')
            cityInfo[0].children[1].classList.remove('active')
            cityInfo[0].children[2].classList.remove('active')
            cityInfo[0].children[3].classList.remove('active')
        } else if (this.classList.value === 'New York City') {
            cityInfo[0].children[0].classList.remove('active')
            cityInfo[0].children[1].classList.add('active')
            cityInfo[0].children[2].classList.remove('active')
            cityInfo[0].children[3].classList.remove('active')
        } else if (this.classList.value === 'Yonkers, NY') {
            cityInfo[0].children[0].classList.remove('active')
            cityInfo[0].children[1].classList.remove('active')
            cityInfo[0].children[2].classList.add('active')
            cityInfo[0].children[3].classList.remove('active')
        } else {
            cityInfo[0].children[0].classList.remove('active')
            cityInfo[0].children[1].classList.remove('active')
            cityInfo[0].children[2].classList.remove('active')
            cityInfo[0].children[3].classList.add('active')
        }
    })
};


var btnWrapper = document.getElementById('dropdown_btn_wrapper')

//btn content active remover --- removes the content when the city button is pressed in order to change the choosen city
btnWrapper.addEventListener('click', function() {
    for (let i = 0; i < 4 ; i++) {
        contactsCityInfo[i].classList.remove('active')
    }
})

var burger = document.getElementById('header_burger')
var welcome_wrapper = document.getElementById('welcome_wrapper')
var menu = document.getElementById('menu')
var menu_div = document.getElementById('menu_div')

burger.addEventListener('click', function () {
    this.classList.toggle('active')
    welcome_wrapper.classList.toggle('active')
    menu.classList.toggle('active')
    menu_div.classList.toggle('active')
})

// console.log()
// console.log(btn[0].children[1])


// document.getElementById('dropdown').innerHTML = "whatever";
