import {
  User,
  UserSettingsAction,
  UserSettingsFunctions,
} from "../types/index";

export default function userSettingsReducer(
  state: User,
  action: UserSettingsAction
) {
  switch (action.type) {
    case UserSettingsFunctions.CHANGE_EMAIL:
      return Object.assign({}, state, {
        email: action.payload.email!,
      });
    case UserSettingsFunctions.CHANGE_FIRST_NAME:
      return Object.assign({}, state, {
        firstName: action.payload.firstName!,
      });
    default:
      return state;
  }
}
