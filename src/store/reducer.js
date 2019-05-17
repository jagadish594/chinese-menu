const initialState = {
    menus: [],
    bool: false,
    catBool: false,
    menu_items: [],
    short_name: '',
    loadData: ""
  }
  
  const reducer = (state=initialState, action) =>{
    const newState = {...state}
    if(action.type === 'MENU_CLICK'){
        newState.menu_items = action.menu_items
        newState.catBool = true
        newState.short_name = action.short_name
    }
    
    if(action.type === 'FETCH_SUCCESS'){
        newState.menus = action.menus
        newState.bool = true
    }

    if(action.type === 'MENU_ERROR'){
        console.log("Menu items error")
    }

    if(action.type === "FETCH_ERROR"){
        console.log("Fetch error, connection error.")
    }
    return newState
  }
  
  export default reducer;