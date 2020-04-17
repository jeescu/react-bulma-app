import React, { createContext, useContext, useEffect } from "react";
import { Router as RouterOriginal, withRouter } from "react-router-dom";
import queryString from "query-string";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

// @ts-ignore
const RouterContext = createContext();
const RouterContextProvider = withRouter(({ children, ...routerProps }) => {
  return (
    <RouterContext.Provider history={history} value={routerProps}>
      {children}
    </RouterContext.Provider>
  );
});

export function Router({ children }: any) {
  return (
    <RouterOriginal history={history}>
      <RouterContextProvider>
        <ScrollToTop />
        {children}
      </RouterContextProvider>
    </RouterOriginal>
  );
}

export function useRouter() {
  // routerProps from context
  const routerProps: any = useContext(RouterContext);

  if (!routerProps) {
    throw new Error("useRouter may only be called within <Router />");
  }

  return {
    push: routerProps.history.push,
    replace: routerProps.history.replace,
    pathname: routerProps.location.pathname,
    query: {
      ...queryString.parse(routerProps.location.search),
      ...routerProps.match.params,
    },
    ...routerProps,
  };
}

function ScrollToTop() {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);
  return null;
}

export { Route, Switch, Link, NavLink } from "react-router-dom";
