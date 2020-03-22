import React, { useEffect } from "react";
import { AppState } from "../store/model";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/auth.actions";
import { useParams } from "react-router-dom";
import { OneNew } from "../components/OneNew";

interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({});
export const OneNewsPage: React.FC<ConnectedState> = ({}) => {
  const dispatch = useDispatch();
  let { id } = useParams();
  console.log(id);

  //   return <OneNewComponent />;
  return <OneNew />;
};
