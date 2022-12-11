import { ofType } from "redux-observable";
import { exhaustMap, from, map } from "rxjs";

import { sessionApi, viewerModel } from "..";

import { actions } from "./session";

const authEpic = (action$: any) =>
  action$.pipe(
    ofType(viewerModel.actions.startAuth),
    exhaustMap(({ payload }) =>
      from(sessionApi.api.createAccount(payload.email, payload.password)).pipe(
        map((response) => {
          const user = response.user;
          const data = {
            avatar: null,
            email: user.email,
            mobile: null,
            name: payload.fullName,
            address: "",
            basket: [],
            uid: user.uid,
            joinedData: user.metadata.creationTime,
          };
          sessionApi.api.addUser(data, user.uid);
          return actions.setProfile(data);
        })
      )
    )
  );
export const epics = {
  authEpic,
};
