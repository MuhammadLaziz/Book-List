// Selectors
const form = document.querySelector('form')
const bookName = document.getElementById('nomi')
const bookAuthor = document.getElementById('yozuvchi')
const publishDate = document.getElementById('sana')
const tbody = document.querySelector('tbody')
const mainContainer = document.querySelector('.mainContainer')

// Constractor function
function Kitob (name, author, date) {
    this.name = name,
    this.author = author,
    this.date = date
}


// UI constractor
function UI () {}

// Prototypes
UI.prototype.bookAdd = function (kitob1) {

    const newRow = document.createElement('tr')
    tbody.appendChild(newRow)
    newRow.innerHTML = `
        <td>${kitob1.name}</td>
        <td>${kitob1.author}</td>
        <td>${kitob1.date}</td>
        <td><i class="delet fas fa-times"></></td>
    `
}

UI.prototype.showInfo = function (xabar, classList) {
    const div = document.createElement('div')
    div.classList.add('alert_info')
    div.innerHTML = `
        <div class="alert alert-${classList}" role="alert">
        ${xabar}
        </div>
    `
    mainContainer.insertBefore(div, form)

    setTimeout(function () {
        document.querySelector('.alert_info').remove()
    }, 3000)
}

UI.prototype.clearInputs = function () {
    bookName.value = ''
    bookAuthor.value = ''
    publishDate.value = ''
}

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const kitob1 = new Kitob(bookName.value, bookAuthor.value, publishDate.value)
    

    const ui = new UI

    ui.bookAdd(kitob1)
    
    if(bookName.value == '' || bookAuthor.value == '' || publishDate.value == '') {
        ui.showInfo(`Inputs are not completed !`, 'danger')      
    }else {
        ui.showInfo(`All Inputs Completed !`, 'success')
        // ui.showInfo('Inputs are cleared !', 'primary')
        ui.clearInputs()
    }
})

document.addEventListener('click', (e) => {
    const item = e.target
    if(item.classList[0] == 'delet') {
        const parentEl = item.parentElement.parentElement
        parentEl.remove()
    }
})

