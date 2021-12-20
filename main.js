const KitobNomi = document.getElementById('nomi')
const mualifi = document.getElementById('yozuvchi')
const sana = document.getElementById('sana')
const form = document.querySelector('form')
const tbody = document.querySelector('tbody')
const mainCountainer = document.querySelector('.mainContainer')


// constructor function
 function Kitob(nomi, yozuvchi, sana) {
     this.nomi = nomi
     this.yozuvchi = yozuvchi
     this.sana = sana
 }


// UI constructor
function UI() {} // prototypelar uchun functionlar

// prototype   method
UI.prototype.kitobQosh = function(kitob) {
    // create table row
    const newRow = document.createElement('tr')
    tbody.appendChild(newRow)
    newRow.innerHTML = `<td>${kitob.nomi}</td>
    <td>${kitob.yozuvchi}</td>
    <td>${kitob.sana}</td>
    <td> <i class="ochirish fas fa-times"></i> </td>`
    
    
}

UI.prototype.inputTozalash = function() {
    KitobNomi.value = ''
    mualifi.value = ''
    sana.value = ''
}

UI.prototype.xatoKorsat = function(xabar, classList) {
    // div
    const div = document.createElement('div')
    div.classList.add('alert_info')

    div.innerHTML = `<div class="alert alert-${classList}" role="alert">
    ${xabar}
  </div>`


  mainCountainer.insertBefore(div, form)

  setTimeout(function() {
      document.querySelector('.alert_info').remove()
  }, 3000)
  


}



// event listeners

form.addEventListener('submit', (e) => {
    e.preventDefault()
    

    const kitob = new Kitob(KitobNomi.value, mualifi.value, sana.value)
    

    // kitob qoshmoq

    const ui = new UI()
    
    
    // input tozalash
    
    
    if(KitobNomi.value == '' || mualifi.value == '' || sana.value == '') {
        ui.xatoKorsat('Hech narsa kiritilmadi !', 'danger')
    }else{
        ui.xatoKorsat('Kitob qoshildi !', 'success')
        ui.xatoKorsat('Kitob ochirildi !', 'primary')
        
        ui.kitobQosh(kitob)


        ui.inputTozalash()

    }
})

tbody.addEventListener('click', function(e) {
    const item = e.target
    if(item.classList[0] == 'ochirish') {
        const parentItem = item.parentElement.parentElement
        parentItem.remove()
    }
})