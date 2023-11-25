const ROUTES = {
    signUp: "/sign-up",
    signIn: "/sign-in",
    dashboard: "/dashboard",
    customers: "/customers",
    settings: "/settings"
}

const proctectedRoutes = [
    ROUTES.dashboard,
    ROUTES.customers,
    ROUTES.signIn
]

export {ROUTES, proctectedRoutes}
