export const refreshUsersFulfilled = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = false;
};
export const refreshUsersReject = state => {
  state.error = true;
  state.isRefreshing = false;
};

export const registerFulfilled = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.error = false;
};

export const loginFulfilled = (state, action) => {
  state.isLoggedIn = true;
  state.isRefreshing = false;
  state.user = action.payload.user;
  state.token = action.payload.token;
};

export const loginPending = state => {
  state.isLoggedIn = false;
};

export const logOutPending = state => {
  state.isLoggedIn = false;
  state.isRefreshing = false;
};

export const logOutFulfilled = state => {
  state.isLoggedIn = false;
  state.isRefreshing = false;
  state.token = null;
  state.user = { name: null, email: null };
};
