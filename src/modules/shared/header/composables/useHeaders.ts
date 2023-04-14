

const useHeaders = () => {


    return {
        navbar: [
            {
                url: '/',
                name:'Home',
            },
            {
                url: '/products' ,
                name:'Productos',
            },
            {
                url: '/contacts',
                name:'Contactos',
            },
            {
                url: '/about',
                name:'Nosotros',
            },
            {
                url: '/prices',
                name:'Cotizador',
            },
        ]
    }
}

export default useHeaders;