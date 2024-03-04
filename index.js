let people = [
    {firstName: 'Tony', middleName: 'Oscar', lastName: 'Enerson', birthday: '1972-10-04'},
    {firstName: 'Marco', middleName: '', lastName: 'Enerson', birthday: '2013-03-21'},
]

let personBeingEdited = null

function selectPerson(index) {
    hide('newPersonForm')

    personBeingEdited = people[index]
    // copy the object fields from people into the "edit" inputs

    show('editForm')
}

function saveUpdate() {
    // copy values from inputs back into the personBeingEdited object

    // don't forget to synchronize the people list at the end
    // hide the edit form if you want
}

function cancelUpdate() {
    hide('editForm')
}

function showAddPersonForm() {
    // clear out any values
    document.getElementById('newFirstName').value=''
    document.getElementById('newMiddleName').value=''
    document.getElementById('newLastName').value=''
    document.getElementById('newBirthday').value=''

    // swap the forms around
    hide('editForm')
    show('newPersonForm')
}

function createNewPerson() {
    // copy values from "new" inputs into an object and push it into the array

    // don't forget to synchronize the people list at the end
    // hide the create form if you want
}

function cancelNewPerson() {
    hide('newPersonForm')
}

function synchronizePeopleList() {
    let peopleListHtml = ''
    for (let index = 0; index < people.length; index++) {
        person = people[index]
        peopleListHtml += '<div class="person" onclick="selectPerson('+index+')">'+person.firstName+" "+person.lastName+"</div>"
    }
    document.getElementById("peopleList").innerHTML = peopleListHtml
}

function hide(elementId) {
    document.getElementById(elementId).style.display='none'
}

function show(elementId) {
    document.getElementById(elementId).style.display=null
}

synchronizePeopleList()
hide('editForm')
hide('newPersonForm')