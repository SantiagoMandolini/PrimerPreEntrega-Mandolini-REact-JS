import React from 'react';

const Footer = () => {
    return (
        <footer>
            {/* Marcas disponibles en la tienda */}
            <div className="logos">
                <h2>Encuentra las mejores marcas:</h2>
                <div className="logos-marcas">
                    <img src="./img/Nintendo-Logo.webp" alt="Logo Nintendo" />
                    <img src="./img/Xbox-Logo.webp" alt="Logo Xbox" />
                    <img src="./img/PlayStation-Logo.webp" alt="Logo Playstation" />
                    <img src="./img/Asus-Logo.webp" alt="Logo Asus" />
                    <img src="./img/Samsung-Logo.webp" alt="Logo Samsung" />
                    <img src="./img/Xiaomi-Logo.webp" alt="Logo Xiaomi" />
                    <img src="./img/Honor-Logo.webp" alt="Logo Honor" />
                    <img src="./img/Huawei-Logo.webp" alt="Logo Huawei" />
                </div>
                {/* Misma imagenes para ilusion de bucle */}
                <div className="logos-marcas-segundo">
                    <img src="./img/Nintendo-Logo.webp" alt="Logo Nintendo" />
                    <img src="./img/Xbox-Logo.webp" alt="Logo Xbox" />
                    <img src="./img/PlayStation-Logo.webp" alt="Logo Playstation" />
                    <img src="./img/Asus-Logo.webp" alt="Logo Asus" />
                    <img src="./img/Samsung-Logo.webp" alt="Logo Samsung" />
                    <img src="./img/Xiaomi-Logo.webp" alt="Logo Xiaomi" />
                    <img src="./img/Honor-Logo.webp" alt="Logo Honor" />
                    <img src="./img/Huawei-Logo.webp" alt="Logo Huawei" />
                </div>
            </div>
            {/* Redes sociales al final de la pagina */}
            <div className="footer-content">
                <img src="./img/twitter.webp" alt="Logo Twitter" className="footer-image" />
                <p>@TechPLayCentral</p>
            </div>
        </footer>
    );
};

export default Footer;
