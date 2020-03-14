import React from "react";
import { Admin } from "../components/admin";
import { useDispatch } from "react-redux";
import { admin } from "../store/user/user.actions";

export const AdminPage: React.FC = ({}) => {
  const dispatch = useDispatch();
  // console.log("terrrrrrrrrrrrrrrrrrrrr");
  dispatch(admin());

  return <Admin />;
};
