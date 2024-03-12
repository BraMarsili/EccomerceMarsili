const products = [
    {
        id: '1', 
        name: 'Motorola Moto E13 64gb 2gb Ram Azul Turquesa', 
        price: 156369, 
        category: 'celular', 
        img:'https://http2.mlstatic.com/D_Q_NP_998266-MLA74023596498_012024-AB.webp', 
        stock: 10, 
        description:`El celular Motorola Moto E13 cuenta con un diseño sofisticado y espectacular.
        Obtén el estilo que estabas esperando con el moto e13. Su diseño delgado te proporciona una experiencia audiovisual multidimensional con audio Dolby Atmos y una pantalla ultraamplia HD+ de 6.5".`
    },
    {
        id: '2', 
        name: 'Xiaomi Mi 11 Lite 5G NE Dual SIM 128 GB  negro trufa 8 GB RAM', 
        price: 526400, 
        category: 'celular', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_860255-MLA48698173457_122021-F.webp', 
        stock: 30, 
        envio: 'Envío Gratis',
        description:`Fotografía profesional en tu bolsillo. 
        Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.
        Con su lente macro tendrás un enfoque definido de los detalles más minúsculos y podrás usarlo para obtener nítidas vistas panorámicas. `
    },
    {
        id: '3', 
        name: 'Samsung Galaxy S23 Fe 128gb 8gb Ram Negro', 
        price: 1077399, 
        category: 'celular', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_968012-MLU74033800854_012024-F.webp', 
        stock: 50, 
        envio: 'Envío Gratis',
        description: `Fotografía profesional en tu bolsillo
        Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.`
    },
    {
        id: '4', 
        name: 'Samsung Galaxy A34 128gb 6gb Ram Awesome Lime', 
        price: 448999, 
        category: 'celular', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_885596-MLA54688652817_032023-F.webp', 
        stock: 50, 
        description: `Fotografía profesional en tu bolsillo
        Descubrí infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Poné a prueba tu creatividad y jugá con la iluminación, diferentes planos y efectos para obtener grandes resultados.`
    },
    {
        id: '5', 
        name: 'Notebook Dell Inspiron 3520 Intel Core I5 256gb Ssd 8gb Ram Color', 
        price: 825599, 
        category: 'notebook', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_796208-MLU70783337860_082023-F.webp', 
        stock: 68, 
        envio: 'Envío Gratis',
        description:`Pantalla con gran impacto visual.
        Su pantalla de 15.6" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. `
    },
    {
        id: '6', 
        name: 'Notebook Noblex N14x1000 14.1 Hd Intel Celeron 4gb/128gb', 
        price: 320681, 
        category: 'notebook', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_667643-MLU72628342894_112023-F.webp', 
        stock: 68, 
        description:`Esta notebook ofrece un rendimiento adecuado para tus tareas diarias.
        Cuenta con pantalla HD, almacenamiento rápido, conectividad inalámbrica y una variedad de puertos para conectar dispositivos externos. Es una opción conveniente y portátil para el uso personal y profesional.`
    },
    {
        id: '7', 
        name: 'Notebook Dell Inspiron 3520 Intel Core I5 1135g7 256gb', 
        price: 749999, 
        category: 'notebook', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_852151-MLU74033804522_012024-F.webp', 
        stock: 20, 
        envio: 'Envío Gratis',
        description:`Pantalla con gran impacto visual.
        Su pantalla de 15.6" y 1920x1080 px de resolución te brindará colores más vivos y definidos. Tus películas y series preferidas cobrarán vida, ya que ganarán calidad y definición en cada detalle. `
    },
    {
        id: '8', 
        name: 'Notebook Hp 15-ef2514la Ryzen 7 5700u 8gb Ram 512gb', 
        price: 1165498, 
        category: 'notebook', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_687332-MLA54387667220_032023-F.webp', 
        stock: 15, 
        envio: 'Envío Gratis',
        description:`La notebook HP 15-ef2514la es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.`
    },
    {
        id: '9', 
        name: 'Smart Tv Sansei Tds2343fichpi Led Full Hd 43 Android Tv', 
        price: 289999, 
        category: 'televisor', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_976794-MLU74089492796_012024-F.webp', 
        stock: 40, 
        description:`PANTALLA
        - TIPO DE PANTALLA: LED
        - TIPO DE TV: SMART TV
        - PULGADAS: 43"
        - RESOLUCION DE VIDEO: 1920 x 1080 (FULL HD)
        - RELACIÓN DE ASPECTO: 220
        - CONTRASTE: 3000:1
        - BRILLO: 170cd
        - TIEMPO DE RESPUESTA (ms): 8.5ms
        - FRECUENCIA DE REFRESCO (hz): 60Hz
        - NORMA DE VIDEO: Pal-N / Pal-M /NTSC`
    },
    {
        id: '10', 
        name: 'Smart Tv Samsung 50 Un50cu7000gczb Led 4k', 
        price: 499999, 
        category: 'televisor', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_712164-MLU74841568328_032024-F.webp', 
        stock: 40, 
        envio: 'Envío Gratis',
        description:`Sumérgete en la era del entretenimiento con la Smart TV Samsung 50" UN50CU7000GCZB, donde la claridad se encuentra con la inteligencia. Con una pantalla LED de 50 pulgadas y resolución 4K, cada imagen cobra vida con detalles impresionantes y colores vibrantes, gracias a la tecnología Crystal UHD. La relación de aspecto 16:9 asegura una experiencia visual inmersiva, perfecta para películas, deportes y juegos.`
    },
    {
        id: '11', 
        name: 'Smart Tv Kanji Led 75 Pulgadas 4k Uhd Kj-75st005-2', 
        price: 971399, 
        category: 'televisor', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_766541-MLU74390599045_022024-F.webp', 
        stock: 30, 
        envio: 'Envío Gratis',
        description:`Con el Smart TV TV-6XST005 vas a acceder a las aplicaciones en las que se encuentran tus contenidos favoritos. Además, podés navegar por Internet, interactuar en redes sociales y divertirte con videojuegos.`
    },
    {
        id: '12', 
        name: 'Tv Smart Led Philips 55 4K UHD 55pud7408/77 Google Tv', 
        price: 599999, 
        category: 'televisor', 
        img:'https://http2.mlstatic.com/D_NQ_NP_2X_854894-MLU72982553959_112023-F.webp', 
        stock: 68, 
        envio: 'Envío Gratis',
        description:`El Google Tv Led 4k Philips Uhd 55pud7408/77 es un televisor de alta definición con una pantalla de 55 pulgadas. Este modelo cuenta con tecnología 4K UHD, que ofrece una resolución cuatro veces superior a la de un televisor Full HD, proporcionando imágenes más nítidas y detalladas. Además, incluye el sistema operativo Google TV, que permite acceder a una amplia variedad de aplicaciones y servicios de streaming. También cuenta con conectividad WiFi y Ethernet, así como múltiples puertos HDMI y USB para conectar otros dispositivos. Su diseño elegante y moderno se adapta a cualquier decoración.`
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        },100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 100)
    })
}

export const getProductById = (itemId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === itemId))
        }, 100)
    })
}

