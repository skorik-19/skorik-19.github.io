const dark = document.getElementById('dark')
const red = document.getElementById('red')
const conteiner = document.getElementById('conteiner')
const header = document.getElementById('header')
const header_top = document.getElementById('header_top')
const header_title = document.getElementById('header_title')
const button = document.getElementById('button')
const first = document.getElementById('first')
const first_text = document.getElementById('first_text')
const second = document.getElementById('second')
const table = document.getElementById('table')
const td1= document.getElementById('td1')
const td2= document.getElementById('td2')
const td3= document.getElementById('td3')
const td4= document.getElementById('td4')
const td5= document.getElementById('td5')
const td6= document.getElementById('td6')
const td7= document.getElementById('td7')
const td8= document.getElementById('td8')
const td9= document.getElementById('td9')
const td10= document.getElementById('td10')
const td11= document.getElementById('td11')
const td12= document.getElementById('td12')
const td13= document.getElementById('td13')
const td14= document.getElementById('td14')
const td15= document.getElementById('td15')
const third = document.getElementById('third')
const thirds = document.getElementById('thirds')
const title = document.getElementById('title')
const footer = document.getElementById('footer')

function changeStyleDiv(){
  header.style.background = 'url(image/tree.jpg) center no-repeat'
  header.style.backgroundSize = 'cover'
  header.style.marginBottom = '60px'
  header_title.style.background ='white'
}
first_imges.onmouseover = function(){
  this.src = "image/first_img_dark.jpg";
  this.alt ='red_1';
}
first_imges.onmouseout = function(){
  this.src = "image/first_img.jpg";
  this.alt  ='red_4';
}
 
 dark.onclick = () => {
   dark.style.display = 'none'
   red.style.display = 'block'
   conteiner.style.background= '#0f0f11'
   header.style.background = 'url(image/header_dark.jpg) center no-repeat'
   header.style.backgroundSize = 'cover'
   header.style.marginBottom = '60px'
   header_top.style.backgroundColor ='#222222e1'
   first.style.background = 'url(image/background_dark.jpg) center no-repeat'
   first.style.backgroundSize = 'cover'
   first.style.backgroundAttachment ='fixed'
   first_text.style.color= 'white'
   second.style.background = 'url(image/background_first_dark.jpg) center no-repeat'
   second.style.backgroundSize = 'cover'
   table.style.background = '#3d3d3d99'
   table.style.border = '#3d3d3de0'
   td1.style.background = '#3d3d3ddc'
   td2.style.background = '#3d3d3ddc'
   td3.style.background = '#3d3d3ddc'
   td4.style.background = '#3d3d3ddc'
   td5.style.background = '#3d3d3ddc'
   td6.style.background = '#3d3d3ddc'
   td7.style.background = '#3d3d3ddc'
   td8.style.background = '#3d3d3ddc'
   td9.style.background = '#3d3d3ddc'
   td10.style.background = '#3d3d3ddc'
   td11.style.background = '#3d3d3ddc'
   td12.style.background = '#3d3d3ddc'
   td13.style.background = '#3d3d3ddc'
   td14.style.background = '#3d3d3ddc'
   td15.style.background = '#3d3d3ddc'
   second.style.backgroundAttachment ='fixed'
   third.style.background = 'url(image/background_first_dark.jpg) center no-repeat'
   third.style.backgroundSize = 'cover'
   third.style.backgroundAttachment ='fixed'
   thirds.style.background = '#3d3d3de1'
   footer.style.backgroundColor  = '#0f0f11'
}
 red.onclick = () =>  {
   dark.style.display = 'block'
   red.style.display = 'none'
    conteiner.style.background= '#db0000e1'
    header.style.background = 'url(image/header.jpg) center no-repeat'
    header.style.backgroundSize = 'cover'
    header.style.marginBottom = '60px'
    header_top.style.backgroundColor ='#8b0000b3'
    first.style.background = 'url(image/background_first.jpg) center no-repeat'
    first.style.backgroundSize = 'cover'
    first.style.backgroundAttachment ='fixed'
    first_text.style.color= 'white'
    second.style.background = 'url(image/background.jpg) center no-repeat'
    second.style.backgroundSize = 'cover'
    second.style.backgroundAttachment ='fixed'
    third.style.background = 'url(image/background.jpg) center no-repeat'
    third.style.backgroundSize = 'cover'
    third.style.backgroundAttachment ='fixed'
    footer.style.backgroundColor  = '#0f0f11'
}


