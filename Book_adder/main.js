const kitobNomi = document.getElementById('name')
const yozuvchi = document.getElementById('yozuvchi')
const sana = document.getElementById('sana')
const form = document.querySelector('form')
const kitobRoyhat = document.querySelector('.kitob-royhati')
const container = document.querySelector('.mainContainer')

// Constractor function
function Kitob (nomi, yozuvchi, sana) {
    this.nomi = nomi,
    this.yozuvchi = yozuvchi,
    this.sana = sana
}

// UI constractor
function UI () {} // bu asosan protatyplar uchun


// Prototype == method
UI.prototype.kitobQosh = function (kitob1) {
    // create table row
    const row = document.createElement('tr')
    row.innerHTML = `
        <td>${kitob1.nomi}</td>
        <td>${kitob1.yozuvchi}</td>
        <td>${kitob1.sana}</td>
        <td>
            <i class="ochirish fas fa-times"></i>
        </td>
        `
    kitobRoyhat.appendChild(row)
}

UI.prototype.inputTozalash = function (kitob1) {
    kitobNomi.value = ''
    yozuvchi.value = ''
    sana.value = ''
}


UI.prototype.xabarKorsat = function (xabar, classList) {
    // div
    const div = document.createElement('div')
    div.classList.add('alert_info')
    div.innerHTML = `
        <div class="alert alert-${classList}" role="alert">
            ${xabar}
        </div>
    `
    container.insertBefore(div, form)

    setTimeout(function () {
        document.querySelector('.alert_info').remove()
    }, 3000)
}

UI.prototype.xabarTozalash = function() {

}

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const kitob1 = new Kitob(kitobNomi.value, yozuvchi.value, sana.value)


    // Add Book
    const ui = new UI()
    
    // input Bo'shbo'lganda
    if(kitobNomi.value == '' || yozuvchi.value == '' || sana.value == '') {
        ui.xabarKorsat('Hech narsa kiritilmadi !', 'danger')
    }else {
        //omadli qoshish
        ui.xabarKorsat(`Kitob qo'shildi`, 'success')
        ui.xabarKorsat(`kitob O'chirildi`, 'primary')
        // KITOB QO'SHISH
        ui.kitobQosh(kitob1)
    
        // input tozalash
        ui.inputTozalash(kitob1)

    }
})

document.addEventListener('click', function (e) {
    const item = e.target
    if(e.target.classList[0] == 'ochirish') {
        const parentItem = item.parentElement.parentElement
        parentItem.remove()
    }
})