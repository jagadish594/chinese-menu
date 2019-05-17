
export const menuClick= (short_name) =>{
    const url = `https://davids-restaurant.herokuapp.com/menu_items.json?category=${short_name}`
    return dispatch => fetch(url)
    .then(response => response.json())
    .then(data => dispatch({
            type: "MENU_CLICK",
            menu_items: data.menu_items,
            short_name: short_name
    }),
    err => dispatch({ type: 'FETCH_ERROR', err })
    );
}

export const loadData = () => {
    return dispatch => fetch(`https://davids-restaurant.herokuapp.com/categories.json`) // Redux Thunk handles these
      .then(response => response.json())
      .then(
        data => dispatch({ 
            type: 'FETCH_SUCCESS',
            menus: data 
        }),
        err => dispatch({ type: 'FETCH_ERROR', err })
      );
}
