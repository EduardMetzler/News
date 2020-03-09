export const USER_SAVE = "USER_SAVE";
export const USER_LOAD = "USER_LOAD";

export const userSave = (firstName: string, lastName: string) => ({
  type: USER_SAVE,
  payload: { firstName, lastName }
});

export const userLoad = () => ({
  type: USER_LOAD,
  payload: {}
});
