let btnSave = document.querySelector('#save-btn')
let btnView = document.querySelector('#view-btn')
let btnRemove = document.querySelector('#remove-btn')

let viewInfo = document.querySelector('.viewInfo')
let removeInfo = document.querySelector('.removeInfo')
let addInfo = document.querySelector('.addInfo')

// Store student data
function store() {
    let sid = document.getElementById('sid').value.trim()
    let sname = document.getElementById('sname').value.trim()
    let snumber = document.getElementById('snumber').value.trim()

    addInfo.innerHTML = '' // Clear previous messages
    let info = document.createElement('p')

    if (!sid || !sname || !snumber) {
        info.innerHTML = `<span class='span-item err'>Please Enter All the details</span>`
        addInfo.appendChild(info)
        return
    }

    let existing = localStorage.getItem(sid)

    if (existing) {
        info.innerHTML = `<span class='span-item err'>Student Already Exists</span>`
        addInfo.appendChild(info)
        return
    }

    const sdetails = {
        StudentId: sid,
        StudentName: sname,
        Pnumber: snumber
    }

    localStorage.setItem(sid, JSON.stringify(sdetails))
    info.innerHTML = `<span class='span-item success'>Data Added Successfully</span>`
    addInfo.appendChild(info)

    // Optional: clear inputs or refresh UI instead of reloading
    setTimeout(() => {
        window.location.reload()
    }, 2000)
}

// View student data
function view() {
    let sid = document.getElementById('showid').value.trim()
    viewInfo.innerHTML = '' // Clear previous messages
    let info = document.createElement('p')

    if (!sid) {
        info.innerHTML = `<span class='span-item err'>Invalid Student Id</span>`
        viewInfo.appendChild(info)
        return
    }

    let item = localStorage.getItem(sid)
    if (!item) {
        info.innerHTML = `<span class='span-item err'>No Data Found</span>`
        viewInfo.appendChild(info)
        return
    }

    let data = JSON.parse(item)
    info.innerHTML = `<span class='span-item'>
        Student Name : ${data.StudentName}</br></br>
        Phone Number : ${data.Pnumber}</span>`
    viewInfo.appendChild(info)
}

// Remove student data
function remove() {
    let removeid = document.getElementById('removeid').value.trim()
    removeInfo.innerHTML = '' // Clear previous messages
    let info = document.createElement('p')

    if (!removeid) {
        info.innerHTML = `<span class='span-item err'>Invalid Student Id</span>`
        removeInfo.appendChild(info)
        return
    }

    let item = localStorage.getItem(removeid)
    if (!item) {
        info.innerHTML = `<span class='span-item err'>No Data Found</span>`
        removeInfo.appendChild(info)
        return
    }

    localStorage.removeItem(removeid)
    info.innerHTML = `<span class='span-item success'>Item Removed Successfully</span>`
    removeInfo.appendChild(info)
}

// Event listeners
btnSave.addEventListener('click', store)
btnView.addEventListener('click', view)
btnRemove.addEventListener('click', remove)
