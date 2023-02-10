module.exports = [
    {
        method: 'get',
        path: '/', 
        resolver: {
            controller: 'WelcomeController',
            action: 'home',
        },
    },
    {
        method: 'get',
        path: '/arithmetic/sum', 
        resolver: {
            controller: 'ArithmeticController',
            action: 'sum',
        },
    },
    {
        method: 'post',
        path: '/string/search-substring', 
        resolver: {
            controller: 'StringController',
            action: 'searchSubstring',
        },
    },
    {
        method: 'post',
        path: '/string/reverse', 
        resolver: {
            controller: 'StringController',
            action: 'reverse',
        },
    },
    {
        method: 'get',
        path: '**404', 
        resolver: {
            controller: 'WelcomeController',
            action: 'notFound',
        },
    },

]