import { Navigate, useLocation } from "react-router-dom";

import BASE_ROUTES from "./base-routes";
import { IObject } from "@artemis/utils";
import { useMemo } from "react";

interface IAuthenticatorProps {
  children: JSX.Element;
  isAuthenticated?: boolean;
  extendRoutes?: IObject<string>;
  routeToGoWhenUnauthenticated?: string;
  routeToGoWhenAuthenticated?: string;
}

/**
 * A wrapper around the element which checks if the user is authenticated
 * If authenticated, renders the passed element
 * If not authenticated, redirects the user to Login page.
 */
const Authenticator = ({
  children,
  isAuthenticated = false,
  extendRoutes,
  routeToGoWhenUnauthenticated,
  routeToGoWhenAuthenticated,
}: IAuthenticatorProps) => {
  const location = useLocation();

  const routes = useMemo(() => {
    return {
      ...BASE_ROUTES,
      ...extendRoutes,
    };
  }, [extendRoutes]);

  /**
   * Handle case when user is authenticated but attemp to access Login page
   * -> redirect to Homepage
   */
  if (isAuthenticated && location.pathname === routes.LOGIN) {
    if (routeToGoWhenAuthenticated) {
      return <Navigate to={routeToGoWhenAuthenticated} />;
    }
    return <Navigate to={routes.HOME} />;
  }

  /**
   * Handle case when user is NOT authenticated but attemp to access Privated page
   * -> redirect to Login page
   */
  if (!isAuthenticated && location.pathname !== routes.LOGIN) {
    if (routeToGoWhenUnauthenticated) {
      return <Navigate to={routeToGoWhenUnauthenticated} />;
    }
    return <Navigate to={routes.LOGIN} />;
  }

  /**
   * Otherwise access Page as normal
   */
  return children;
};

export default Authenticator;
