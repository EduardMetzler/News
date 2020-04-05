import React, { useEffect } from "react";
import { AppState } from "../store/model";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { login } from "../store/auth/auth.actions";
import { News } from "../components/News";
import { Article } from "../store/news/news.model";

interface ConnectedState {}

const mapStateToProps = (state: AppState) => ({});
export const NewsPage: React.FC<ConnectedState> = ({}) => {
  const dispatch = useDispatch();

  return <News />;
};
