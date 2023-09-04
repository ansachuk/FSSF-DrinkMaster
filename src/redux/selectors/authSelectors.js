export const selectUser = ({ auth }) => auth.user;
export const selectAccessToken = ({ auth }) => auth.accessToken;
export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectAuthIsLoading = ({ auth }) => auth.isLoading;
export const selectAuthError = ({ auth }) => auth.error;
// export const selectAuthRefreshToken = ({ auth }) => auth.data.refreshToken;
