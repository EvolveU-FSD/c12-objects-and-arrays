let people = [
    {firstName: 'Tony', middleName: 'Oscar', lastName: 'Enerson', birthday: '1972-10-04'},
    {firstName: 'Marco', middleName: '', lastName: 'Enerson', birthday: '2013-03-21'},
    {firstName: 'Ryan', middleName: '', lastName: 'Wells', birthday: '2000-01-01'},
]

let personBeingEdited = null
let personBeingEditedIndex = -1

function selectPerson(index) {
    hideNewPersonForm()

    personBeingEdited = people[index]
    personBeingEditedIndex = index

    // copy the object fields from people into the "edit" inputs
    document.getElementById('editFirstName').value = personBeingEdited.firstName
    document.getElementById('editMiddleName').value = personBeingEdited.middleName
    document.getElementById('editLastName').value = personBeingEdited.lastName
    document.getElementById('editBirthday').value = personBeingEdited.birthday

    showEditForm()
}

function saveUpdate() {
    personBeingEdited.firstName = document.getElementById('editFirstName').value
    personBeingEdited.middleName = document.getElementById('editMiddleName').value
    personBeingEdited.lastName = document.getElementById('editLastName').value 
    personBeingEdited.birthday = document.getElementById('editBirthday').value

    // SAVE TO THE SERVER GOES RIGHT HERE

    synchronizePeopleList()
    hideEditForm()
}

function cancelUpdate() {
    if (confirm('Are you sure you want to abandon your edits to ' + personBeingEdited.firstName + '?')) {
        hideEditForm()
    }
}

function showAddPersonForm() {
    // clear out any values
    document.getElementById('newFirstName').value=''
    document.getElementById('newMiddleName').value=''
    document.getElementById('newLastName').value=''
    document.getElementById('newBirthday').value=''

    // swap the forms around
    hideEditForm()
    showNewPersonForm()
}

function createNewPerson() {
    let newPerson = {}
    newPerson.firstName = document.getElementById('newFirstName').value
    newPerson.middleName = document.getElementById('newMiddleName').value
    newPerson.lastName = document.getElementById('newLastName').value 
    newPerson.birthday = document.getElementById('newBirthday').value

    people.push(newPerson)
    synchronizePeopleList()
    hideNewPersonForm()
}

function cancelNewPerson() {
    const newName = document.getElementById('newFirstName').value
    if (!newName || confirm('Are you sure you want to abandon ' + newName + ' without saving?')) {
        hideNewPersonForm()
    }
}

function removePerson() {
    if (confirm("Are you sure you want to remove " + personBeingEdited.firstName )) {
        people.splice(personBeingEditedIndex, 1)
        hideEditForm()
        synchronizePeopleList()
    }
}

function synchronizePeopleList() {   
    if (people.length > 0) {
        let peopleListHtml = ''
        for (let index = 0; index < people.length; index++) {
            const person = people[index]
            peopleListHtml += '<div class="person" onclick="selectPerson('+index+')">'+person.firstName+" "+person.lastName+"</div>"
        }
        document.getElementById("peopleList").innerHTML = peopleListHtml
    }
    else {
        document.getElementById("peopleList").innerHTML = 'No people here! Add one to get started.'
    }
}

function showEditForm() {
    show('editForm')
    hide('addPersonButton')
}

function hideEditForm() {
    hide('editForm')
    show('addPersonButton')
}

function showNewPersonForm() {
    show('newPersonForm')
    hide('addPersonButton')
}

function hideNewPersonForm() {
    hide('newPersonForm')
    show('addPersonButton')
}

function hide(elementId) {
    document.getElementById(elementId).style.display='none'
}

function show(elementId) {
    document.getElementById(elementId).style.display=null
}

synchronizePeopleList()
hide('editForm')
hideNewPersonForm()