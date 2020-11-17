const applicationData = {
  selected: {
    city: "",
    version: "",
    price: "",
  },
  list: {
    city: [],
    version: [],
  },
  showToolTip: false,
  priceVersionCityList: [],
};

function SelectionReducer(state = applicationData, action) {
  const newState = {
    ...state,
  };
  switch (action.type) {
    case "CHANGE_SELECTED_CITY":
      newState.selected.city = action.data;
      return newState;
    case "CHANGE_SELECTED_VERSION":
      newState.selected.version = action.data;
      return newState;
    case "CHANGE_SELECTED_PRICE":
      newState.priceVersionCityList.forEach((element) => {
        if (
          element.version === action.selectedVersion &&
          element.city === action.selectedCity
        ) {
          newState.selected.price = element.price;
          return newState;
        }
      });
      return newState;
    case "CHANGE_SHOW_TOOLTIP":
      newState.showToolTip = action.data;
      return newState;
    case "CHANGE_CITY_LIST":
      newState.list.city = action.data;
      return newState;
    case "CHANGE_VERSION_LIST":
      newState.list.version = action.data;
      return newState;
    case "CHANGE_PRICE_VERSION_CITY_LIST":
      newState.priceVersionCityList = action.data;
      return newState;

    default:
      return state;
  }
}

export default SelectionReducer;
