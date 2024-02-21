const products = [
    {
        id: '1',
        name: 'Gin Flipá London Dry 750ml',
        price: 13200,
        category: 'destilados',
        subcategory: 'gin',
        img: "https://http2.mlstatic.com/D_NQ_NP_665258-MLA69771882097_062023-O.webp",
        stock: 12,
        description: 'GIN FLIPÁ LONDON DRY 750ml + LATA DE AGUA TÓNICA SCHWEPPES 310ml DE REGALO',
    },
    {
        id: '2',
        name: 'Gin Flipá Mate 750ml',
        price: 13200,
        category: 'destilados',
        subcategory: 'gin',
        img: 'https://http2.mlstatic.com/D_NQ_NP_669806-MLA69756185508_062023-O.webp',
        stock: 1,
        description: 'GIN FLIPÁ MATE 750ml + LATA DE AGUA TÓNICA SCHWEPPES 310ml DE REGALO',
    },
    {
        id: '3',
        name: 'Agua Tónica Schweppes 310ml',
        price: 700,
        category: 'gaseosas',
        subcategory: 'agua-tonica',
        img: 'https://acdn.mitiendanube.com/stores/871/106/products/img_4907-1f27b05975aff0a04d17021651376473-480-0.jpeg',
        stock: 1,
        description: 'LATA DE AGUA TÓNICA SCHWEPPES 310ml',
    },
    {
        id: '4',
        name: 'Caja 4 Botánicos Premium Para Gin Tonic 150gr - Spice Box',
        price: 5850,
        category: 'botanicos',
        subcategory: 'mix',
        img: 'https://http2.mlstatic.com/D_NQ_NP_861826-MLA69181949991_052023-O.webp',
        stock: 6,
        description: 'LOS BOTANICOS QUE NECESITAS PARA TU GIN TONIC PERFECTO',
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}