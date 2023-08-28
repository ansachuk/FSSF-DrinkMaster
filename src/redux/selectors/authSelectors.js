export const selectUser = ({ auth }) => auth.user;
export const selectAuthAccessToken = ({ auth }) => auth.accessToken;
export const selectIsLoggedIn = ({ auth }) => auth.isLoggedIn;
export const selectIsLoading = ({ auth }) => auth.loading;
export const selectAuthError = ({ auth }) => auth.error;
// export const selectAuthRefreshToken = ({ auth }) => auth.data.refreshToken;
