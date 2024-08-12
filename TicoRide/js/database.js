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
  function savedToLocalStorage(key, value) {
    let drivers = JSON.parse(localStorage.getItem(key))
    if(!drivers){
      drivers = [];
    }
    drivers.push(value);
  
    localStorage.setItem(key, JSON.stringify(drivers));
    return true;
  }
  
  /**
   *
   * @param {*} key
   */
  function getdFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }
  function bindEvents() {  
    if(document.getElementById('addUserButton')){
      document.getElementById('addUserButton').addEventListener('click', addUserButtonHandler)
    }
    if(document.getElementById('create')){
      document.getElementById('create').addEventListener('click', createHandler);
    }
    if(document.getElementById('RegisterButton')){
      document.getElementById('RegisterButton').addEventListener('click', createHandler);
    }

    
  }
  function savesRToLocalStorage(key, value) {
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
  function getRFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  function editButtonHandler(element){
    savesRToLocalStorage();
    getRFromLocalStorage();
  }
  function RegisterButtonHandler(element){
    savedToLocalStorage();
    getdFromLocalStorage();

  }
  function addUserButtonHandler(element){
    saveToLocalStorage();
    getFromLocalStorage();
  }