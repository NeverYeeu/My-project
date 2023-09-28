import {colors, fontSizes} from "/api/api.js"

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document);
const boxOpen = $('.web-set_icon');
const boxSet = $('.web-set_box');
const boxClose = $('.set_box-close');
const boxColor = $('.set_box-colors');
const column = $('.box-display_col');
const bodyColor = $('#set_box-display');

boxOpen.addEventListener('click', () => {
	boxSet.classList.toggle('close')
	boxOpen.classList.toggle('web-active')
})
boxClose.onclick = () => {
	boxSet.classList.add('close')
	boxOpen.classList.remove('web-active')
}	
boxColor.innerHTML = colors.map((color) => {
	let {nameColor} = color;
	return (`
		<div id=${nameColor} style= "background-color: ${nameColor}"></div>
	`)
}).join('')


const colorBtns = $$('.set_box-colors > div');
//Lấy giá trị localStorage-------------------------------

function getColorWeb() {
	colorBtns.forEach((color) => {
		color.addEventListener('click', () => {
			let searchColor = color.getAttribute('id');
			column.style.backgroundColor = searchColor;
		// Save LocalStorage------------------------------------
			localStorage.setItem('setColor', searchColor)
		})
	} )
}
getColorWeb()

let getColor = localStorage.getItem('setColor');
column.style.backgroundColor = getColor;


// change Size -------------------------------------------------------------
const size = $('.fontSize > .text_size-show span')
const height = $('.lineHeight > .text_size-show span')

const increaseBtns = $$('.text_size-show > .increaseBtn')
const decreaseBtns = $$('.text_size-show > .decreaseBtn')


var newSize = localStorage.getItem('fontSize')
size.innerText = newSize;
column.style.fontSize = newSize + 'px';
function changeSize() {
	increaseBtns[0].addEventListener('click', () => {
		newSize++;
		let setSize = ++newSize;
		if (setSize <= 32){
			size.innerText = setSize;
			column.style.fontSize = setSize + 'px';
			localStorage.setItem('fontSize', setSize)
		} else {
			size.innerText = 32;
			localStorage.setItem('fontSize', 30)
			column.style.fontSize = 30 + 'px';
		}
	})
	decreaseBtns[0].addEventListener('click', () => {
		newSize--;
		let setSize = --newSize;
		if (setSize >= 12){
			size.innerText = setSize;
			column.style.fontSize = setSize + 'px';
			localStorage.setItem('fontSize', setSize)
		} else {
			size.innerText = 12;
			localStorage.setItem('fontSize', 12)
			column.style.fontSize = 12 + 'px';
		}
	})
}
changeSize();

// Đưa giá trị mặc định lên localStorage
// localStorage.setItem('lineHeight', 1)

var newHeight = localStorage.getItem('lineHeight')
// let newHeight = Math.round(getHeight)
// height.innerText = getHeight;
// column.style.lineHeight = getHeight;

function changLineHeight() {
	increaseBtns[1].addEventListener('click', () => {
		let setNum = ++newHeight
		console.log(setNum)
		if (setNum <= 7 && setNum >= 1){
			height.innerText = plusHeight(setNum);
			column.style.lineHeight = plusHeight(setNum);
			localStorage.setItem('lineHeight', plusHeight(setNum))
		} 
	})
	decreaseBtns[1].addEventListener('click', () => {
		let setNum = --newHeight
		if (setNum <= 7 && setNum >= 1) {
			height.innerText = minusHeight(setNum);
			column.style.lineHeight = minusHeight(setNum);
			localStorage.setItem('lineHeight', minusHeight(setNum))
		} 
	})
}
changLineHeight();
function plusHeight(a) {
	// 2, 4, 6
	return a/2 + 0.5
}
function minusHeight(a) {
	return a/2 - 0.5
}

