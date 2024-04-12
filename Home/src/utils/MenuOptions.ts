export type MenuOptionsType = {
    name: string,
    route: string,
}

export const MenuOptions = (): MenuOptionsType[] => { 
    return [
        {
            name: "Login",
            route: "login",
        },
        {
            name: "Registro",
            route: "register",
        },
        {
            name: "Weather App",
            route: "weather-app",
        },
        {
            name: "Pokedex App",
            route: "pokedex-app",
        },
        {
            name: "TansTack App",
            route: "tanstack-query",
        },
        {
            name: "Fake Data App",
            route: "fake-data",
        },
        {
            name: "FrontendGuide",
            route: "frontend",
        },
        {
            name: "ErrorPage",
            route: "404",
        },
    ];
}
