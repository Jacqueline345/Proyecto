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