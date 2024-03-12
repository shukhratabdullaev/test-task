const config = {
    IS_MOBILE: 1024,
    routes: {
        welcome: "/",

        app: "/app",
        board: `/app/boards/board`,
    },

    privateRoutes: ["/app", "/app/generation", "/app/user-page", "/app/boards", "/app/boards/board"],
    publicRoutes: [
        "/",
        "/auth/login/facebook/callback",
    ],
};

export default config;
