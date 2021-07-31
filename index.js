// // Functions to make request. Accepts 2 arguments string - method (POST, GET and etc)
// // Second argument is url
// // Returns Promise
// // As request function use XMLHttpRequest;
// function makeRequest(method, url) {
//    return new Promise( function (resolve, reject){
//       const xhr = new XMLHttpRequest()
//       xhr.open(method, url);
//       xhr.responseType = 'json'

//       xhr.onload = () => {
//          if(xhr.respons >= 400) {
//             reject(xhr.response)
//          }else {
//             resolve(xhr.response)
//          }
//       }
//       xhr.onerror = () => {
//          reject(xhr.response)
//       }

//       xhr.send
//    })
// }


// // Class for create todoItem. Used only with user entered todos. In constructor
// // receives string.
// class TodoListItem {
//    constructor(todo) {
//      this.title =  
//      this.id = function randomIntervalId(min,max) { return Math.floor(Math.random() * (max - min + 1) + min)}
//      this.userId = function randomIntervalUserId (min,max) { return Math.floor(Math.random() * (max - min + 1) + min)}
//      this.complete =  // completed status. Boolean.
//    }
//  }


// class App {
//   constructor(list, storageKey,) {
//     this._list =  list // list of items. Taken from constructor arguments. IF not passed default [] must be used
//     this._storageKey =  // String. StorageKey Taken from constructor arguments. IF not passed default 'myTodoAppList' must be used
//     this._dom =  // Copy of DOM. Must be taken from HTML
//   };
  
//   // Fetch todos from external source Async function - you need to wait for result. Pay attention of type of result you
//   // are receiving (hint it could be not Array); But you must return Array here
//   fetchTodos() {
//     /// url to fetch todos ==== https://jsonplaceholder.typicode.com/users/1/todos
//     const result =
//     return
//   }
  
//   // Checks if there is key in local storage. If not - creates with key which is in class and sets empty value of array
//   setStorage() {
//      var array = [];
//    if (localStorage.getItem('someKey') === null) {
      
//     }
//   }
  
//   // Reads storage for items. If there key and storage items - adds to list in class.
//   // If not - fetch items and add them to list and to storage
//   // Also for each todos added to _list this function calls create element with append
//   async readStorage() {
//     const storageItems = ///
//     if () {
    
//     } else {
//     }
    
//   }
  
//   // Sets _list to localstorage, with key is defined in class
//   addToStorage() {
  
//   }
  
//   // Creates app template - main with 2 sections inside - first will be used for form
//   // and second will be used for list. Dont forget about classes and BEM
//   createTemplate() {
   // const main = document.createElement('main');
   // const sectionOne = document.createElement('section');
   // const sectionTwo = document.createElement('section');
   // const app = document.querySelector('.app')
   
   // main.classList.add('main');
   // sectionOne.classList.add('main__section-one', 'section');
   // sectionTwo.classList.add('main__section-two', 'section');
   
   // app.appendChild(main)
   // main.appendChild(sectionOne)
   // main.appendChild(sectionTwo)

//   }
  
  // Creates form which contains text input and submit button. Please do not forget
  // about classes (BEM). Also event listener for form submit defined here.
  // as argument it accepts event type and class method. Please care here about this for class method.
  // Also please care about basic validation - form must not be submitted if input is empty (HTML5 validation)
//   createForm() {
     
//    const form = document.createElement('input')
//    function setAttributes (el, attrs) {
//       for(var key in attrs) {
//          el.setAttribute(key, attrs[key]);
//       }
//    }
//    setAttributes(form, {"type": "text", "id": "myInput" , "placeholder":"Write your todo"});
//    form.appendChild(sectionOne)
//   }
  
//   // Creates list for items. Also event listener for click on list item defined here.
//   // as argument it accepts event type and class method. Please care here about this for class method.
//   createList() {
  
//   }
  
//   // Creates list item with todos. Please check of todos status - if completed - checkbox must be checked.
//   // list item must have checkbox, todos title and button for delete. Each list item must have unique ID,
//   // added as data attribute. Also his function besides todoitem accepts second argument - type.
//   // If append - list must append todoitem. Else - must prepend.
//   createListItemElement(todoItem, type) {
//     const checkbox =
//     if () {
//     }
//     if () {
//     } else {
//     }
    
//   }
  
//   // universal function for handling click on item list. Must check what type of event is passed as argument
//   // and call function for mark todoitem as done or delete it fron _list and element from dom
//   // ID of todoitem you can get from closest li where in attribute data todoitem id is.
//   clickListItemHandler(event) {
//   }
  
//   // Toggles todoitem done. You need find item in list and toggle its completed property value to opposite
//   // Hint - use index
//   // Also you need add changed list to storage;
//   toggleListItemToggleDone(id) {
//   }
  
//   // Delete from list todoItem.
//   // Hint - use index
//   // Also you need save changed list to storage;
//   deleteListItem(id) {
 
//   }
  
//   // Delete from DOM from list todoitem based on passed ID. Query this item on dataset
//   deleteListItemElement(id) {
  
//   }
  
//   // Submits todoitem from form. Form default behaviour must not be used
//   // New todoitem must be class (see above)
//   // Also you need add to list, create element in dom and clear event target value, in order to be able to
//   // add new todos
//   submitFormHandler(event) {

//   }
  
//   // Adds item to _list (ARRAY method use here to add at THE BEGINNING of the list
//   // Also adds to storage;
//   addToList(todoItem) {
    
//   }
  
//   // Inits app
//   async init() {
//     this.createTemplate();
//     this.createForm();
//     this.createList();
//     this.setStorage();
//     await this.readStorage();
//   }
// }

// const app = new App();

// app.init();

