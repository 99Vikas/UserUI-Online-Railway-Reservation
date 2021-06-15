
export const bookingReducer = (state = null, action) => {
  switch (action.type) {
    case "BOOK_NOW":
      return action.payload;
    default:
      return state;
  }
};
