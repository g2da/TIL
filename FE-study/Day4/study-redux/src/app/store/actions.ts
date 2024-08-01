/* 액션 타입 */
export const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

export const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

export const CREATE_USER_REQUEST = "CREATE_USER_REQUEST";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";

export const EDIT_USER_REQUEST = "EDIT_USER_REQUEST";
export const EDIT_USER_SUCCESS = "EDIT_USER_SUCCESS";
export const EDIT_USER_FAILURE = "EDIT_USER_FAILURE";

export const DELETE_USER_REQUEST = "DELETE_USER_REQUEST";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

/* 액션 생성함수 */
export const fetchUsersRequest = () => ({ type: FETCH_USERS_REQUEST });
export const fetchUsersSuccess = (users: any) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});
export const fetchUsersFailure = (error: string) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
export const fetchUserSuccess = (user: any) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});
export const fetchUserFailure = (error: string) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const createUserRequest = () => ({ type: CREATE_USER_REQUEST });
export const createUserSuccess = (user: any) => ({
  type: CREATE_USER_SUCCESS,
  payload: user,
});
export const createUserFailure = (error: string) => ({
  type: CREATE_USER_FAILURE,
  payload: error,
});

export const editUserRequest = () => ({ type: EDIT_USER_REQUEST });
export const editUserSuccess = (user: any) => ({
  type: EDIT_USER_SUCCESS,
  payload: user,
});
export const editUserFailure = (error: string) => ({
  type: EDIT_USER_FAILURE,
  payload: error,
});

export const deleteUserRequest = () => ({ type: DELETE_USER_REQUEST });
export const deleteUserSuccess = (userId: string) => ({
  type: DELETE_USER_SUCCESS,
  payload: userId,
});
export const deleteUserFailure = (error: string) => ({
  type: DELETE_USER_FAILURE,
  payload: error,
});
