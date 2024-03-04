# Objects and Arrays

The script in the web page manages adn array of "person" objects.  Each person has a few properties, firstName, middleName, lastName and birthday (as a string).

The page is setup with three main parts:
1. the "people list" that shows the people that are in the list and allows you to select one for editing or kick off adding a new person
1. the "edit form" that allows you to update an existing person in the list
1. the "create form" that allows you to add a new item into the list

## Complete the edit form
When a person is selected for editing, the script keeps track of the person being edited in a variable called personBeingEdited.  How original, right!

1. Complete the selectPerson() function to initialize the values of the inputs on the edit form from the selected object
1. Complete the saveUpdate() function to write the values from the inputs back into the object that is being edited

## Complete the add form
1. Complete the createNewPerson() function to initialize the values of a new person object from the inputs on the "new" form and add it to the array of people

## Remove person
1. Add a button to the edit form to remove the person from the array
1. use confirm() to make sure the user really wants that

## Empty people array
1. show the text "No people in the list... add one now!" when the array is empty

## Avoid multiple adds
1. Hide the "Add person" button when the create person form is visible.

## Cancel button
1. ask for confirmation on the cancel button for the cancel button in the add person and edit person form

## Medium People List
1. change the synchronizePeopleList to use Array.forEach()

## Spicy Cancel Option
1. only ask for confirmation to cancel on update when the fields have actually changed value from their original values

## Spicy People List
1. Sort the people list by name
1. add sort buttons for first name, last name, or birthdate
