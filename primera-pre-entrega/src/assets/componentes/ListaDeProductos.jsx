const productos = [
    {
        id: 'SW',
        nombre: "Nintendo Switch",
        imagen: "../img/Switch.webp",
        descripcion: "Consigue la consola que te permite jugar donde quieras y como quieras. Lleva la experiencia de juego a cualquier lugar, ya sea al parque, en un avión, en un automóvil o en casa de un amigo.",
        precio: "USD$48",
        categoria: "consola"
    },
    {
        id: 'PS5',
        nombre: "Playstation 5",
        imagen: "../img/play5.webp",
        descripcion: "Experimenta la velocidad de carga sorprendente y la inmersión intensa con la SSD de alta velocidad. Disfruta de funciones como retrolimentación háptica y audio 3D, con la nueva generación.",
        precio: "USD$500",
        categoria: "consola"
    },
    {
        id: 'XSX',
        nombre: "Xbox Series X",
        imagen: "../img/xbox-series-x.webp",
        descripcion: "La consola más rápida y potente hasta la fecha, con 12 teraflops de potencia gráfica, ray tracing, SSD personalizado, juegos en 4K y tiempos de carga ultrarrápidos. Con Xbox Game Pass Ultimate.",
        precio: "USD$500",
        categoria: "consola"
    },
    {
        id: 'SL',
        nombre: "Switch Lite",
        imagen: "../img/switch-lite.webp",
        descripcion: "La consola para los jugadores en continuo movimiento. La Nintendo Switch Lite está diseñada específicamente para el juego portátil, disfruta de tus juegos favoritos desde donde quiera que estés.",
        precio: "$USD200",
        categoria: "consola"
    },
    {
        id: 'XSS',
        nombre: "Xbox Series S",
        imagen: "../img/xbox-series-s.webp",
        descripcion: "Experimenta la velocidad de la Serie S, una consola digital de próxima generación a precio accesible. Accede a una amplia biblioteca de juegos. Y disfruta de tiempos de carga reducidos.",
        precio: "USD$350",
        categoria: "consola"
    },
    {
        id: 'NSO',
        nombre: "Nintendo Switch Oled",
        imagen: "../img/SwitchOled.webp",
        descripcion: "La nueva consola Nintendo Switch presenta una pantalla OLED vibrante de 7 pulgadas, un soporte amplio y ajustable, una base con puerto LAN y audio mejorado.",
        precio: "USD$350",
        categoria: "consola"
    },
    {
        id: 'SS24',
        nombre: "Samsung S24",
        imagen: "./img/S24.webp",
        descripcion: "El Galaxy S24 más pequeño tiene una pantalla más grande en un chasis similar al del año pasado. Aunque Samsung lo mantiene algo limitado en comparación con sus modelos más grandes.",
        precio: "USD$800",
        categoria: "muestra"
    },
    {
        id: 'CP5',
        nombre: "Consola Play 5",
        imagen: "./img/play5.webp",
        descripcion: "Experimenta la velocidad de carga sorprendente y la inmersión intensa con la SSD de alta velocidad. Disfruta de funciones como retrolimentación háptica y audio 3D, con la nueva generación.",
        precio: "USD$500",
        categoria: "muestra"
    },
    {
        id: 'MJW',
        nombre: "Juego Mario Wonder",
        imagen: "./img/Mario-Wonder.webp",
        descripcion: "Mario y sus amigos visitan el Reino Flor, cercano al Reino Champiñón. Bowser se convierte en un castillo volador y causa caos. Nuestros héroes deben salvar el día y al Reino Flor.",
        precio: "USD$60",
        categoria: "muestra"
    },
    {
        id: 'RPG8',
        nombre: "Teléfono Rog Phone 8",
        imagen: "./img/Rog-phone-8.webp",
        descripcion: "Adéntrate en el futuro del mundo gaming para móviles con el revolucionario y rediseñado ROG Phone 8, una mezcla sin precedentes de pura destreza gaming y elegancia para el día a día.",
        precio: "$USD975",
        categoria: "muestra"
    },
    {
        id: 'P3R',
        nombre: "Juego Persona 3 Relaod",
        imagen: "./img/persona-3-Reload.webp",
        descripcion: "Vive la aventura como un estudiante nuevo en la hora 'escondida'. Despierta un poder increíble, explora los misterios de la Hora Oscura y lucha con a tus amigos para dejar una huella en sus memorias.",
        precio: "USD$70",
        categoria: "muestra"
    },
    {
        id: 'RDR2',
        nombre: "Red Dead Redemption 2",
        imagen: "../img/RDR2.webp",
        descripcion: "América, 1899. Arthur Morgan y la banda de Van der Linde huyen de la ley. En su viaje, enfrentan atracos y luchan por sobrevivir, mientras Arthur se debate entre sus ideales y su lealtad a la banda.",
        precio: "USD$60",
        categoria: "juego"
    },
    {
        id: 'HI',
        nombre: "Halo Infinite",
        imagen: "../img/Halo.webp",
        descripcion: "En un mundo al borde de la perdición, el Jefe Maestro se prepara para enfrentar a su enemigo más temible. Únete a él en una aventura de mundo abierto para explorar el vasto anillo de Halo.",
        precio: "USD$60",
        categoria: "juego"
    },
    {
        id: 'ZLA',
        nombre: "Zelda Link's Awakening",
        imagen: "../img/TLOZSS.webp",
        descripcion: "Explora mazmorras llenas de rompecabezas y descubre secretos mientras desciendes al mundo peligroso de la superficie en Zelda Skyward Sword. Domina la espada para forjar tu propio destino.",
        precio: "USD$60",
        categoria: "juego"
    },
    {
        id: 'GOWR',
        nombre: "God Of War Ragnarok",
        imagen: "../img/God-Of-War.webp",
        descripcion: "Embárcate en un viaje épico donde Kratos y Atreus luchan por respuestas y se enfrentan al destino en God of War: Ragnarök. Explora los nueve reinos, enfrentándote a dioses nórdicos y monstruos.",
        precio: "USD$60",
        categoria: "juego"
    },
    {
        id: 'ER',
        nombre: "Elden Ring",
        imagen: "../img/elden-ring.webp",
        descripcion: "EL NUEVO RPG DE ACCIÓN DE FANTASÍA. Levántate, tiznado, y déjate guiar por la gracia para esgrimir el poder del Anillo de Elden y convertirte en un Señor de Elden en las Tierras Intermedias.",
        precio: "USD$60",
        categoria: "juego"
    },
    {
        id: 'PP',
        nombre: "Pokemon Purpura",
        imagen: "../img/Pokemon-Purpura.webp",
        descripcion: "Explora la región de Paldea, llena de lagos, montañas y ciudades, en Pokémon Escarlata y Purpura. Viaja a lomos de Koraidon o Miraidon y elige entre Sprigatito, Fuecoco o Quaxly.",
        precio: "USD$60",
        categoria: "juego"
    },
    {
        id: 'SMM',
        nombre: "Spider-Man miles morales",
        imagen: "../img/spider-man-miles-morales.webp",
        descripcion: "El adolescente Miles Morales intenta ajustarse a su nuevo hogar mientras que sigue los pasos de su mentor, Peter Parker, para convertirse en el nuevo Spider-Man.",
        precio: "USD$52.80",
        categoria: "oferta"
    },
    {
        id: 'ZLAO',
        nombre: "Zelda Link's Awakening",
        imagen: "../img/TLOZ-Link-Awakening.webp",
        descripcion: "Despierta como Link en una tierra lejana a Hyrule, donde animales hablan y monstruos acechan. Explora la isla Koholint y sus mazmorras llenas de trampas y descubre la verdad de tu paradero.",
        precio: "USD$48",
        categoria: "oferta"
    },
    {
        id: 'CP5H',
        nombre: "Consola Play 5",
        imagen: "../img/PS5-Horizon.webp",
        descripcion: "Consigue el paquete PlayStation®5: Horizon Forbidden West™ y únete a Aloy en su aventura en PS5™. Disfruta de las innovaciones como imágenes 4K y HDR*, DualSense™ y comentarios hápticos..",
        precio: "USD$415",
        categoria: "oferta"
    },
    {
        id: 'MD',
        nombre: "Mario Brous U Deluxe",
        imagen: "../img/Mario-Deluxe.webp",
        descripcion: "Disfruta de más de 160 niveles en 2D en New Super Mario Bros. U Deluxe para Nintendo Switch. Revive el estilo clásico de Super Mario con saltos, carreras y pisotones de campeonato",
        precio: "USD$54",
        categoria: "oferta"
    },
    {
        id: 'RPG7',
        nombre: "Rog Phone 7",
        imagen: "../img/Rog-phone-7.webp",
        descripcion: "¡El ROG Phone 7 es el teléfono gaming de tus sueños! Con el Snapdragon® 8 Gen 2 y ray tracing, diseño futurista de dos tonos, GameCool 7 para mantenerlo fresco y una batería de 6000 mAh.",
        precio: "$USD560",
        categoria: "oferta"
    },
    {
        id: 'NSW',
        nombre: "Nintendo Switch Wildcat",
        imagen: "../img/switch-fortnite.webp",
        descripcion: "Incluye un Nintendo Switch con un diseño único con arte especial en la consola y la base de la consola, un Joy-Con amarillo (L) y un Joy-Con azul (R) y un código de para el paquete Wildcat.",
        precio: "USD$285",
        categoria: "oferta"
    },
    {
        id: 'RPG8',
        nombre: "Teléfono Rog Phone 8",
        imagen: "./img/Rog-phone-8.webp",
        descripcion: "Adéntrate en el futuro del mundo gaming para móviles con el revolucionario y rediseñado ROG Phone 8, una mezcla sin precedentes de pura destreza gaming y elegancia para el día a día.",
        precio: "$USD975",
        categoria: "muestra"
    },
    {
        id: 'P3R',
        nombre: "Juego Persona 3 Relaod",
        imagen: "./img/persona-3-Reload.webp",
        descripcion: "Vive la aventura como un estudiante nuevo en la hora 'escondida'. Despierta un poder increíble, explora los misterios de la Hora Oscura y lucha con a tus amigos para dejar una huella en sus memorias.",
        precio: "USD$70",
        categoria: "muestra"
    },
    {
        id: '13TP',
        nombre: "13T Pro",
        imagen: "../img/13T-Pro.webp",
        descripcion: "La pantalla AMOLED CrystalRes 1,5K de 144 Hz ofrece imágenes vividas. Equipado con el potente procesador Mediatek Dimensity 9200+. Ofrece carga rápida de 120W y batería de 5000mAh.",
        precio: "USD$795",
        categoria: "telefono"
    },
    {
        id: 'PX3NFC',
        nombre: "Pocophone X3 NFC",
        imagen: "../img/Pocco.webp",
        descripcion: "EL Poco X3 NFC viene con Android 10 para respuestas inteligentes y acciones sugeridas. Navegación por gestos, con 4 cámaras principales y una batería de 5160 mAh para mayor duración.",
        precio: "USD$270",
        categoria: "telefono"
    },
    {
        id: 'P60P',
        nombre: "P60 Pro",
        imagen: "../img/P60-Pro.webp",
        descripcion: "Pantalla OLED de 6.67' a 120Hz, Snapdragon 8+ Gen 1, hasta 12GB de RAM y 1TB de ROM. Cámara trasera triple, sensor principal de 48MP, lente telefoto de 48MP y lente ultrawide de 13MP, cámara frontal es de 13MP. batería de 4815 mAh.",
        precio: "USD$1200",
        categoria: "telefono"
    },
    {
        id: '60SE',
        nombre: "60 SE",
        imagen: "../img/H60SE.webp",
        descripcion: "Pantalla OLED FHD+ de 6.67' y un procesador Snapdragon 778G Plus. 8GB de RAM y 128GBde ROM. Cámara trasera triple de 50MP + 8MP + 2MP y frontal de 32MP. Y batería de 4800 mAh.",
        precio: "USD$300",
        categoria: "telefono"
}
];
    export default Productos;