export const USER_SAVE = "USER_SAVE";
export const USER_DELETE = " USER_DELETE";
export const ADMIN = " ADMIN";

export const USER_LOAD = "USER_LOAD";
export const USER_LISTE = "USER_LISTE";

export const userSave = (
  firstName: string,
  lastName: string,
  admin: boolean
) => ({
  type: USER_SAVE,
  payload: { firstName, lastName, admin }
});

export const userDelete = () => ({
  type: USER_DELETE,
  payload: {}
});

export const userLoad = () => ({
  type: USER_LOAD,
  payload: {}
});

export const admin = () => ({
  type: ADMIN,
  payload: {}
});

export const userListe = (liste: any) => ({
  type: USER_LISTE,
  payload: { liste }
});
