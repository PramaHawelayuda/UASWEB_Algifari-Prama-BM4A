import React from "react"
import "./homepage.css"

const Homepage = ({setLoginUser}) => {
    return (
        <div className="homepage">
            <header className="l-header" id="header">
                <nav className="nav bd-container">
                    <div className="nav__toggle" id="nav-toggle">
                    <i className="bx bx-menu" />
                    </div>
                    <a href="#" className="nav__logo">
                    Garonk's Food
                    </a>
                    <div className="nav__menu" id="nav-menu">
                    <ul className="nav__list">
                        <li className="nav__item">
                        <a href="#home" className="nav__link">
                            HOME
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="#about" className="nav__link">
                            ABOUT
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="#services" className="nav__link">
                            TYPE OF FOOD
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="#products" className="nav__link">
                            PRODUCT
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="#size" className="nav__link">
                            CATEGORY
                        </a>
                        </li>
                        <li className="nav__item">
                        <a href="#contact" className="nav__link">
                            CONTACT US
                        </a>
                        </li>
                        <i className="bx bx-toggle-left change-theme" id="theme-button" />
                    </ul>
                    </div>
                    <div className="nav__shop">
                    <a href="#" className="nav__icon">
                        <i className="bx bx-shopping-bag" />
                        <span>2</span>
                    </a>
                    <div className="nav__shop-content">
                        <div className="title_shop">
                        <span>Keranjang Belanja</span>
                        </div>
                        <div className="item">
                        <div className="image_cart">
                            <div className="image_c">
                            <img src="Assets/img/meo.jpg" alt="" />
                            </div>
                        </div>
                        <div className="description">
                            <span>Meo</span>
                            <span>1KG</span>
                        </div>
                        <div className="total-price">Rp.300.000</div>
                        <a href="#" className="delete-item">
                            <i className="bx bx-x" />
                        </a>
                        </div>
                        <div className="item">
                        <div className="image_cart">
                            <div className="image_c">
                            <img src="Assets/img/meo.jpg" alt="" />
                            </div>
                        </div>
                        <div className="description">
                            <span>Meo</span>
                            <span>1KG</span>
                        </div>
                        <div className="total-price">Rp.300.000</div>
                        <a href="#" className="delete-item">
                            <i className="bx bx-x" />
                        </a>
                        </div>
                        <div className="total-all">
                        <span>Total</span>
                        <span>Rp.600.000</span>
                        </div>
                        <div className="btn-viewcard">
                        <a href="#" className="button-top">
                            View Cart
                        </a>
                        </div>
                        <div className="btn-checkout">
                        <a href="#" className="button-top2">
                            Check Out
                        </a>
                        </div>
                    </div>
                    </div>
                </nav>
            </header>
           
            <main className="l-main">
                {/*-========================HOME=============================-*/}
                <section className="home" id="home">
                    <div className="slideshow-container">
                    <div className="mySlides fade">
                        <div className="home__container bd-container bd-grid">
                        <div className="home__data">
                            <h1 className="home__title">Garonk's Food</h1>
                            <h2 className="home__subtitle">
                            Kebutuhan untuk kucing kesayangan anda{" "}
                            </h2>
                            <a href="#" className="button">
                            Explore Now
                            </a>
                        </div>
                        <img
                            src="Assets/img/american shorthair.png"
                            alt=""
                            className="home__img"
                        />
                        </div>
                    </div>
                    </div>
                    <div className="mySlides fade">
                    <div className="home__container bd-container bd-grid">
                        <div className="home__data">
                        <h1 className="home__title">Garonk's Food</h1>
                        <h2 className="home__subtitle">
                            Kebutuhan untuk kucing kesayangan anda{" "}
                        </h2>
                        <a href="#" className="button">
                            Explore Now
                        </a>
                        </div>
                        <img
                        src="Assets/img/British shorthair.png"
                        alt=""
                        className="home__img"
                        />
                    </div>
                    </div>
                    <div className="mySlides fade">
                    <div className="home__container bd-container bd-grid">
                        <div className="home__data">
                        <h1 className="home__title">Garonk's Food</h1>
                        <h2 className="home__subtitle">
                            Kebutuhan untuk kucing kesayangan anda{" "}
                        </h2>
                        <a href="#" className="button">
                            Explore Now
                        </a>
                        </div>
                        <img src="Assets/img/persia cat.png" alt="" className="home__img" />
                    </div>
                    </div>
                    <div className="mySlides fade">
                    <div className="home__container bd-container bd-grid">
                        <div className="home__data">
                        <h1 className="home__title">Garonk's Food</h1>
                        <h2 className="home__subtitle">
                            Kebutuhan untuk kucing kesayangan anda{" "}
                        </h2>
                        <a href="#" className="button">
                            Explore Now
                        </a>
                        </div>
                        <img src="Assets/img/Scottish fold.png" alt="" className="home__img" />
                    </div>
                    </div>
                    <div className="mySlides fade">
                    <div className="home__container bd-container bd-grid">
                        <div className="home__data">
                        <h1 className="home__title">Garonk's Food</h1>
                        <h2 className="home__subtitle">
                            Kebutuhan untuk kucing kesayangan anda
                        </h2>
                        <a href="#" className="button">
                            Explore Now
                        </a>
                        </div>
                        <img src="Assets/img/Maine coon.png" alt="" className="home__img" />
                    </div>
                    </div>
                    <br />
                </section>
                {/*Next and Previous buttons*/}
                <a className="prev" onclick="plusSlides(-1)">
                    ❮
                </a>
                <a className="next" onclick="plusSlides(1)">
                    ❯
                </a>
                {/*The dots/circles*/}
                <div style={{ textAlign: "center" }}>
                    <span className="dot" onclick="currentSlide(1)" />
                    <span className="dot" onclick="currentSlide(2)" />
                    <span className="dot" onclick="currentSlide(3)" />
                    <span className="dot" onclick="currentSlide(4)" />
                    <span className="dot" onclick="currentSlide(5)" />
                    <span className="dot" />
                </div>
                {/*-========================ABOUT============================-*/}
                <section className="about section bd-conttainer" id="about">
                    <div className="about__container bd-grid">
                    <div className="about__data">
                        <span className="section-subtitle about__initial">Tentang Kami</span>
                        <h2 className="section-title about__initial">Garonk's Food </h2>
                        <p className="about__description">
                        Garonk's Food merupakan sebuah toko penyedia makanan kucing yang
                        dibutuhkan untuk merawat kucing anda. Toko ini berdiri sejak 2022 dan
                        kami selalu meningkatkan kualitas pelayanan terbaik untuk perjalanan
                        sejarah toko ini. Kami tidak hanya berkomitmen untuk terus
                        mengembangkan toko makanan kucing yang terbaik dan berkualitas, kami
                        juga peduli dan memperhatikan kelangsungan hidup setiap kucing untuk
                        terus sehat dan bahagia. Kami memahami bagaimana orang-orang mencintai
                        kucing mereka, kita pun sama, kita mencintai mereka dari sisi perilaku
                        dan kepribadian yang unik, serta memahami nutrisi dan kasih sayang
                        yang mereka butuhkan. Kami percaya cara terbaik untuk membantu anda
                        dalam merawat kucing dengan cara selalu hadir setiap kali anda
                        butuhkan kapanpun dan dimanapun kita dapat dengan leluasa untuk
                        memberikan kasih sayang dan perawatan yang tepat dan terbaik untuk
                        mereka.
                        </p>
                        <a href="#" className="button">
                        Explore history
                        </a>
                    </div>
                    <img src="Assets/img/800x800.jpg" alt="" className="about__img" />
                    </div>
                </section>
                {/*-=======================SERVICE===========================-*/}
                <section className="services section bd-container" id="services">
                    <span className="section-subtitle">Menawarkan</span>
                    <h2 className="section-title">Jenis-jenis Makanan</h2>
                    <p className="section-description">
                    Makanan kucing yang dijual di pasaran terdiri dari makanan kering (dry
                    food), semi basah (semi-moist), dan kalengan atau makanan basah.
                    Perbedaannya adalah berdasarkan kandungan air, tingkat protein, kepadatan
                    kalori, palatabilitas, dan kemudahan dicerna.
                    </p>
                    <div className="services__container bd-grid">
                    <div className="services__content">
                        <img src="Assets/img/keringg.png" alt="" className="services__img" />
                        <h3 className="services__title">Makanan Kering</h3>
                        <p className="services__description">
                        Makanan kering mengandung 6 - 10% air. Bergantung pada formulasinya,
                        bahan-bahan dicampurkan, diekstrusi, dan dikeringkan menjadi potongan
                        kecil-kecil agar mudah digigit oleh kucing. Adapun bahan-bahan yang
                        terkandung didalamnya seperti daging, biji-bijian, makanan ikan, dll.
                        </p>
                    </div>
                    <div className="services__content">
                        <img
                        src="Assets/img/semi-basahh.png"
                        alt=""
                        className="services__img"
                        />
                        <h3 className="services__title">Makanan Semi-Basah</h3>
                        <p className="services__description">
                        Makanan jenis ini mengandung setidaknya 35% air. Komposisi utamanya
                        biasanya adalah produk daging dan produk sampingannya. Bahan lain yang
                        kerap dijadikan komposisi makanan semi basah antara lain produk olahan
                        kedelai, sereal, produk sampingan biji-bijian, dan pengawet.
                        </p>
                    </div>
                    <div className="services__content">
                        <img src="Assets/img/basah.png" alt="" className="services__img" />
                        <h3 className="services__title">Makanan Basah</h3>
                        <p className="services__description">
                        Makanan basah memiliki kadar air sampai 75%, menjadikannya sumber
                        nutrisi dan air yang baik untuk kucing. Makanan basah adalah jenis
                        makanan kucing yang paling mahal dan juga sangat cocok untuk
                        kebanyakan kucing. Makanan kucing kalengan atau basah umumnya
                        mengandung daging, seperti ginjal atau hati.
                        </p>
                    </div>
                    </div>
                </section>
                {/*-=======================PRODUCT===========================-*/}
                <section className="product section bd-container" id="products">
                    <span className="section-subtitle">Produk yang tersedia</span>
                    <h2 className="section-title">PRODUCTS of the week</h2>
                    <div className="products__container bd-grid logo-slider slick_two">
                    <div className="products__content">
                        <img
                        src="Assets/img/produkdijual.jpg"
                        alt=""
                        className="products__img"
                        />
                        <h3 className="products__name">Whiskas</h3>
                        <span className="products__detail">Kitten</span>
                        <br />
                        <span className="products__price">Rp.400.000</span>
                        <a href="#" className="button products__button_detail">
                        Detail Prodcut
                        </a>
                        <a href="#" className="button products__button">
                        <i className="bx bx-cart-alt" />
                        </a>
                    </div>
                    <div className="products__content">
                        <img src="Assets/img/Proplan.jpg" alt="" className="products__img" />
                        <h3 className="products__name">Proplan</h3>
                        <span className="products__detail">Kitten</span>
                        <br />
                        <span className="products__price">Rp.450.000</span>
                        <a href="#" className="button products__button_detail">
                        Detail Prodcut
                        </a>
                        <a href="#" className="button products__button">
                        <i className="bx bx-cart-alt" />
                        </a>
                    </div>
                    <div className="products__content">
                        <img src="Assets/img/meo.jpg" alt="" className="products__img" />
                        <h3 className="products__name">Meo</h3>
                        <span className="products__detail">Kitten</span>
                        <br />
                        <span className="products__price">Rp.300.000</span>
                        <a href="#" className="button products__button_detail">
                        Detail Prodcut
                        </a>
                        <a href="#" className="button products__button">
                        <i className="bx bx-cart-alt" />
                        </a>
                    </div>
                    <div className="products__content">
                        <img src="Assets/img/maxi.jpg" alt="" className="products__img" />
                        <h3 className="products__name">Maxi</h3>
                        <span className="products__detail">Kitten</span>
                        <br />
                        <span className="products__price">Rp.330.000</span>
                        <a href="#" className="button products__button_detail">
                        Detail Prodcut
                        </a>
                        <a href="#" className="button products__button">
                        <i className="bx bx-cart-alt" />
                        </a>
                    </div>
                    </div>
                </section>
                {/*-======================SIZE CHART=========================-*/}
                <section className="size section bd-container" id="size">
                    <div className="size__container bd-grid">
                    <div className="size__data">
                        <span className="section-subtitle size__initial">Kategori Makanan</span>
                        <h2 className="section-title size__initial">Tersedia</h2>
                        <p className="size__description">
                        Tersedia makanan kucing untuk : <br />
                        - Anak kucing (kitten) <br />
                        - 1+ Tahun (Young Cat) <br />- 7+ Tahun (Old Cat)
                        </p>
                    </div>
                    <img
                        src="Assets/img/kategorimakanan.png"
                        alt=""
                        className="size__img"
                    />
                    </div>
                </section>
                {/*-======================CONTACT US=========================-*/}
                <section className="contact section bd-container" id="contact">
                    <div className="contact__container bd-grid">
                    <div className="contact__data">
                        <span className="section-subtitle contact__initial">Let's Talk</span>
                        <h2 className="section-title contact__initial">Hubungi kami</h2>
                        <p className="contact__description">
                        Silahkan hubungi kami dengan cara mengirimkan melalui formulir yang
                        tersedia dan formulir ini hanya digunakan untuk menjawab pertanyaan
                        atau masalah anda dan tidak akan digunakan untuk tujuan pemasaran.{" "}
                        <br /> <br />
                        Anda harus berusia dewasa sesuai peraturan negara Anda untuk
                        mengirimkan formulir.
                        </p>
                    </div>
                    <div className="contact__button">
                        <a href="#" className="button">
                        Contact us now
                        </a>
                    </div>
                    </div>
                </section>
            </main>
        
            <footer className="footer section bd-container">
                <div className="footer__container bd-grid">
                    <div className="footer__content">
                    <a href="#" className="footer__logo">
                        Garonks
                    </a>
                    <span className="footer__decription">Food</span>
                    </div>
                    <div>
                    <a href="#" className="footer__social">
                        <i className="bx bxl-whatsapp" />
                    </a>{" "}
                    {/* Untuk link ke whatsapp*/}
                    <a href="#" className="footer__social">
                        <i className="bx bxl-instagram-alt" />
                    </a>{" "}
                    {/* Untuk link ke Instagram*/}
                    <a href="#" className="footer__social">
                        <i className="bx bxl-facebook-square" />
                    </a>{" "}
                    {/* Untuk link ke Facebook*/}
                    </div>
                    <div className="footer__content">
                    <h3 className="footer__title">Service</h3>
                    <ul>
                        <li>
                        <a href="#" className="footer__link">
                            Shipping and Return
                        </a>
                        </li>
                        <li>
                        <a href="#" className="footer__link">
                            Masurement Guide
                        </a>
                        </li>
                        <li>
                        <a href="#" className="footer__link">
                            Ukuran
                        </a>
                        </li>
                    </ul>
                    </div>
                    <div className="footer__contenct">
                    <h3 className="footer__title">Information</h3>
                    <ul>
                        <li>
                        <a href="#" className="footer__link" />
                        Event
                        </li>
                        <li>
                        <a href="#" className="footer__link" />
                        Contact us
                        </li>
                        <li>
                        <a href="#" className="footer__link" />
                        Privacy policy
                        </li>
                        <li>
                        <a href="#" className="footer__link" />
                        Terms of service
                        </li>
                    </ul>
                    </div>
                    <div className="footer__contenct">
                    <h3 className="footer__title">Address</h3>
                    <ul>
                        <li>Alamat toko</li>
                        <li>Depok, Jawa Barat - Indonesia</li>
                        <li>Phone : -</li>
                        <li>Email : -</li>
                    </ul>
                    </div>
                </div>
                <p className="footer__copy">
                    © 2022 Algifri Prayudha Diwiryo and Prama Hawelayuda{" "}
                </p>
            </footer>
        </div>
    )
}

export default Homepage