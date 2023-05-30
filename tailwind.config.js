/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", "./index.html"
    ],
    theme: {
        extend: { 
            colors: {
                notification:'#ff3b30',
                darkGray:'#3a474f',
                bgGreen:"#14a651",
                bgColor:'#fff',
                bgOnHold:"#ff3b30",
                bgInProgress:"#ff9500",
                taskBgColor:'#F5F5F5',

                lightGray: '#d1d8dd',
                paid: '#215d38',
                darkGreen: '#215d38'
            },
            fontFamily:{
            myFont:['Rubik', 'sans-serif']
        }},
    },
    plugins: [],
}

