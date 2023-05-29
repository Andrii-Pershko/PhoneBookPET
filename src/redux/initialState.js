export const stateContacts = {
  items: [],
  isLoading: false,
  error: null,
  buttonLoading: false,
};

export const filterInitialState = '';

export const initialStateAuth = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: true,
  error: false,
  buttonLoading: false,
};