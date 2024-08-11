function saveToLocalStorage(key, value) {
    let users = JSON.parse(localStorage.getItem(key))
    if(!users){
      users = [];
    }
    users.push(value);
  
    localStorage.setItem(key, JSON.stringify(users));
    return true;
  }
  
  /**
   *
   * @param {*} key
   */
  function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  function bindEvents() {  
    if(document.getElementById('create')){
      document.getElementById('create').addEventListener('click', createHandler);
    }
    
  }
  function savesToLocalStorage(key, value) {
    let rides = JSON.parse(localStorage.getItem(key))
    if(!rides){
      rides = [];
    }
    rides.push(value);
  
    localStorage.setItem(key, JSON.stringify(rides));
    return true;
  }
  
  /**
   *
   * @param {*} key
   */
  function getFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  function editButtonHandler(element){
    savesToLocalStorage();
    getFromLocalStorage();
  }