<template>

    <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    </head>

    <Header></Header>

    <main class="w-full mx-auto h-[500px] white">
        <section>
            <div class="owl-carousel">
                <div class="owl-wrapper-outer">
                    <div class="owl-item">
                        <div class="text-center">
                            <a href="/collections/all" title="">
                                <picture>
                                    <img :src="imageUrls[currentIndex]" alt="Slideshow Image"
                                        class="md:max-lg:flex w-full" />
                                </picture>
                            </a>

                            <div class="navigation-buttons">
                                <div class="owl-controls">
                                    <div class="owl-buttons">
                                        <div class="owl-prev" @click="previousImage">
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15.75 19.5L8.25 12l7.5-7.5" />
                                                </svg>
                                            </button>
                                        </div>

                                        <div class="owl-next" @click="nextImage">
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>

        <section>
            <div class="wrapper">
                <div class="inner space-30 space-top-60 section-intro">
                    <div class="grid">
                        <div class="grid__item large--one-half">
                            <div class="intro">
                                <h2 class="title">
                                    Basic Shop
                                </h2>
                                <p class="tes text-center">
                                    Chào mừng bạn đến với cửa hàng của chúng tôi.<br>
                                    Basic Shop cung cấp cho bạn những mẫu thời trang<br>
                                    mới và hot nhất trên thị trường hiện nay. Đến với cửa <br>
                                    hàng chúng tôi là lựa chọn tốt nhất chủa bạn.
                                </p>
                            </div>
                        </div>

                        <!-- <div class="grid__item large--one-half">
                            <a href="/collections/all" title="">
                                <picture>
                                    <img :src="imageUrls2[currentIndex]" alt="Slideshow Image"/>
                                </picture>
                            </a>
                            
                            <div class="navigation-buttons">
                                <div class="owl-controls">
                                    <div class="owl-buttons">
                                        <div class="owl-prev" @click="previousImage">
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15.75 19.5L8.25 12l7.5-7.5" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div class="owl-next" @click="nextImage">
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </section>


        <section>
            <div class="wrapper">
                <div class="inner space-30 section-product-tab">
                    <!-- /templates/snippets/section-product-tab.liquid -->
                    <div class="tab-products ">
                        <h2 class="title">
                            Sản phẩm
                        </h2>
                        <ul class="nav nav-tabs" role="tablist">
                            <li role="presentation" class="active"><a href="#tab1" aria-controls="tab1" role="tab"
                                    data-toggle="tab">Sản phẩm mới</a></li>

                            <li role="presentation"><a href="#tab2" aria-controls="tab2" role="tab"
                                    data-toggle="tab">Sản phẩm nổi bật</a></li>

                            <li role="presentation"><a href="#tab3" aria-controls="tab3" role="tab"
                                    data-toggle="tab">Sản phẩm bán chạy</a></li>

                        </ul>

                        <div class="tab-content">
                            <div role="tabpanel" class="tab-pane active" id="tab1">
                                <div class="grid-uniform">
                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-1" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_11_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_12_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                                <span class="label on-sale">Giảm</span>
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-1" title="Áo sơ mi nam">Áo sơ mi
                                                        nam</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">

                                                        <del class="sale-price">280,000₫</del>
                                                        <span>220,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812496"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->

                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-15" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_25_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_26_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->

                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-15" title="Găng tay da">Găng tay
                                                        da</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>120,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812982"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>

                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-13" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_57_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_58_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-13" title="Áo phông họa tiết nữ">Áo
                                                        phông họa tiết nữ</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>430,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812808"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-17" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_29_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_30_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-17" title="Mủ len thời trang">Mủ len
                                                        thời trang</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>120,000₫</span>
                                                    </span>
                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002813186"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-16" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_27_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_28_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-16" title="Găng tay da">Găng tay
                                                        da</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>120,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002813092"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->

                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-12" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_55_grande.jpg"
                                                            alt="">
                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_56_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-12" title="Áo sơ mi nữ">Áo sơ mi
                                                        nữ</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>320,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812801"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-11" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_31_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_32_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-11" title="Áo sơ mi nữ">Áo sơ mi
                                                        nữ</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>240,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812796"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-8" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_68_grande.jpg"
                                                            alt="">
                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_68_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-8" title="Túi xách thời trang">Túi
                                                        xách thời trang</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>320,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812671"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>
                                </div>
                            </div>

                            <div role="tabpanel" class="tab-pane" id="tab2">
                                <div class="grid-uniform">
                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-11" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_31_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_32_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-11" title="Áo sơ mi nữ">Áo sơ mi
                                                        nữ</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>240,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812796"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-2" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_13_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_14_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->

                                                <span class="label on-sale">Giảm</span>
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-2" title="Áo sơ mi nam">Áo sơ mi
                                                        nam</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">

                                                        <del class="sale-price">230,000₫</del>
                                                        <span>180,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812541"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-6" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_47_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_48_grande.jpg"
                                                            alt="">

                                                    </a>
                                                </div><!-- /.product-thumbnail -->

                                                <span class="label on-sale">Giảm</span>
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-6" title="Túi xách thời trang">Túi
                                                        xách thời trang</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <del class="sale-price">510,000₫</del>
                                                        <span>420,000₫</span>
                                                    </span>
                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812659"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-7" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_62_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_63_grande.jpg"
                                                            alt="">

                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-7" title="Túi xách thời trang">Túi
                                                        xách thời trang</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>420,000₫</span>
                                                    </span>
                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812665"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-17" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_29_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_30_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-17" title="Mủ len thời trang">Mủ len
                                                        thời trang</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>120,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002813186"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-1" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_11_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_12_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->

                                                <span class="label on-sale">Giảm</span>
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-1" title="Áo sơ mi nam">Áo sơ mi
                                                        nam</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <del class="sale-price">280,000₫</del>
                                                        <span>220,000₫</span>
                                                    </span>
                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812496"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-14" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_65_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_66_grande.jpg"
                                                            alt="">

                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                                <span class="label on-sale">Giảm</span>
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-14" title="Quần jean nữ">Quần jean
                                                        nữ</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <del class="sale-price">520,000₫</del>
                                                        <span>460,000₫</span>
                                                    </span>
                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812892"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->

                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-9" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_18_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_19_grande.jpg"
                                                            alt="">

                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-9" title="Váy xòe công sở">Váy xòe
                                                        công sở</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>320,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812715"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>
                                </div>
                            </div>

                            <div role="tabpanel" class="tab-pane" id="tab3">
                                <div class="grid-uniform">
                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_09_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_10_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam" title="Áo sơ mi nam">Áo sơ mi
                                                        nam</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>320,000₫</span>
                                                    </span>
                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812302"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-7" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_62_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_63_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->

                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-7" title="Túi xách thời trang">Túi
                                                        xách thời trang</a>
                                                </h4><!-- /.product-product -->
                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>420,000₫</span>
                                                    </span>
                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812665"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-2" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_13_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_14_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->

                                                <span class="label on-sale">Giảm</span>
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-2" title="Áo sơ mi nam">Áo sơ mi
                                                        nam</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <del class="sale-price">230,000₫</del>
                                                        <span>180,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812541"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-15" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_25_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_26_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-15" title="Găng tay da">Găng tay
                                                        da</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>120,000₫</span>
                                                    </span>
                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812982"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-17" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_29_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_30_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-17" title="Mủ len thời trang">Mủ len
                                                        thời trang</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>120,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002813186"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-16" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_27_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_28_grande.jpg"
                                                            alt="">

                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-16" title="Găng tay da">Găng tay
                                                        da</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>120,000₫</span>
                                                    </span>
                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002813092"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-13" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_57_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_58_grande.jpg"
                                                            alt="">
                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-13" title="Áo phông họa tiết nữ">Áo
                                                        phông họa tiết nữ</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>430,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812808"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>

                                    <div class="grid__item  large--one-four medium--one-third">
                                        <div class="product-container" data-publish-date="">
                                            <div class="product-image ">
                                                <div class="product-thumbnail">
                                                    <a href="/products/ao-so-mi-nam-9" title="">
                                                        <img class="product-featured-image"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_18_grande.jpg"
                                                            alt="">

                                                        <img class="back-img"
                                                            src="//hstatic.net/033/1000104033/1/2016/8-2/product_19_grande.jpg"
                                                            alt="">

                                                    </a>
                                                </div><!-- /.product-thumbnail -->
                                            </div><!-- /.product-image -->

                                            <div class="product-meta">
                                                <h4 class="product-name">
                                                    <a href="/products/ao-so-mi-nam-9" title="Váy xòe công sở">Váy xòe
                                                        công sở</a>
                                                </h4><!-- /.product-product -->

                                                <div class="product-price">
                                                    <span class="amout">
                                                        <span>320,000₫</span>
                                                    </span>

                                                </div><!-- /.product-price -->
                                                <span class="haravan-product-reviews-badge" data-id="1002812715"></span>
                                                <!-- end rating -->
                                            </div><!-- /.product-meta -->

                                            <div class="product-actions">
                                                <form method="post" action="/cart/add" class="add-to-cart">
                                                    <input type="hidden" name="id" value="1007973596">
                                                    <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                                    <button type="submit" name="add" class="btn">
                                                        <span class="lnr lnr-cart">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 24 24" stroke-width="1.5"
                                                                stroke="currentColor" class="w-8 h-8">
                                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                                                            </svg>
                                                        </span>
                                                        Thêm vào giỏ

                                                    </button>
                                                </form>

                                                <div class="add-links">

                                                    <a class="btn wishlist  awe-button product-quick-whistlist"
                                                        href="/account/login" data-toggle="tooltip" title="Yêu thích">
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                            fill="currentColor" class="w-3 h-3 fa">
                                                            <path
                                                                d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                                                        </svg>
                                                        Yêu thích
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17" data-id="ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                        Xem nhanh
                                                    </a>

                                                    <a href="/products/ao-so-mi-nam-17"
                                                        class="btn product-quick-view btn-detail" title="Chi tiết">

                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                            class="w-3 h-3 fa" aria-hidden="true">
                                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                                d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                        </svg>

                                                        Chi tiết
                                                    </a>
                                                </div>

                                            </div>
                                        </div> <!-- product-container -->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>


        <section>
            <div class="grid text-center contact-box">
                <div class="contact">
                    <h2 class="title section-header">Tin tức</h2>
                    <div class="grid__item large--one-half">
                        <div class="latest-posts-body">
                            <div class="post-thumbnail">
                                <a href="/blogs/news/phong-cach-thoi-trang-hot-nhat-hien-nay" title="">
                                    <div><img src="//hstatic.net/033/1000104033/10/2016/8-2/blog-29.jpg"
                                            data-mce-src="//hstatic.net/033/1000104033/10/2016/8-2/blog-29.jpg">
                                    </div>
                                </a>
                            </div>

                            <div class="entry-meta">
                                <em>Tháng 8 02, 2016</em>
                                <div class="entry-content">
                                    <h4 class="entry-title">
                                        <a href="/blogs/news/phong-cach-thoi-trang-hot-nhat-hien-nay"
                                            title="Phong cách thời trang hót nhất hiện nay">Phong cách thời
                                            trang hót nhất hiện nay</a>
                                    </h4>
                                    <p>Basic shop&nbsp;là sáng lập viên kiêm CEO của hãng mỹ phẩm Glossier dành
                                        cho phái đẹp. 8X là nhân vật có ảnh hưởng trong ngành...</p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div class="grid__item large--one-half">
                        <div class="latest-posts-body">
                            <div class="post-thumbnail">
                                <a href="/blogs/news/sang-trong-ca-tinh-voi-bo-suu-tap-he-2016" title="">
                                    <div><img src="//hstatic.net/033/1000104033/10/2016/8-2/blog-31.jpg"
                                            data-mce-src="//hstatic.net/033/1000104033/10/2016/8-2/blog-31.jpg">
                                    </div>
                                </a>
                            </div>
                            <div class="entry-meta">
                                <em>Tháng 8 02, 2016</em>
                                
                                <div class="entry-content">
                                    <h4 class="entry-title">
                                        <a href="/blogs/news/sang-trong-ca-tinh-voi-bo-suu-tap-he-2016"
                                            title="Sang trọng, cá tính với bộ sưu tập hè 2016">Sang trọng, cá
                                            tính với bộ sưu tập hè 2016</a>
                                    </h4>
                                    <p>Basic shop&nbsp;là sáng lập viên kiêm CEO của hãng mỹ phẩm Glossier dành
                                        cho phái đẹp. 8X là nhân vật có ảnh hưởng trong ngành...</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </section>

        <section>
            <div class="inner  section-brand">
                <!-- /templates/snippets/section-brand.liquid -->

                <div class="brands-carousel owl-carousel owl-theme " id="brands-carousel" data-items="6"
                    data-pagination="false" data-navigation="true" data-autoplay="false"
                    style="display: block; opacity: 1;">

                    <div class="owl-wrapper-outer autoHeight" style="height: 58px;">
                        <div class="owl-wrapper"
                            style="width: 3900px; left: 0px; display: block; transition: all 1000ms ease 0s; transform: translate3d(-780px, 0px, 0px);">
                            <div class="owl-item" style="width: 195px;">
                                <div class="text-center">
                                    <a class="brand" href="#" title=""><img
                                            src="//hstatic.net/033/1000104033/1000147703/brand_logo_1.png?v=55"
                                            alt=""></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 195px;">
                                <div class="text-center">
                                    <a class="brand" href="#" title=""><img
                                            src="//hstatic.net/033/1000104033/1000147703/brand_logo_2.png?v=55"
                                            alt=""></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 195px;">
                                <div class="text-center">
                                    <a class="brand" href="#" title=""><img
                                            src="//hstatic.net/033/1000104033/1000147703/brand_logo_3.png?v=55"
                                            alt=""></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 195px;">
                                <div class="text-center">
                                    <a class="brand" href="#" title=""><img
                                            src="//hstatic.net/033/1000104033/1000147703/brand_logo_4.png?v=55"
                                            alt=""></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 195px;">
                                <div class="text-center">
                                    <a class="brand" href="#" title=""><img
                                            src="//hstatic.net/033/1000104033/1000147703/brand_logo_5.png?v=55"
                                            alt=""></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 195px;">
                                <div class="text-center">
                                    <a class="brand" href="#" title=""><img
                                            src="//hstatic.net/033/1000104033/1000147703/brand_logo_6.png?v=55"
                                            alt=""></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 195px;">
                                <div class="text-center">
                                    <a class="brand" href="#" title=""><img
                                            src="//hstatic.net/033/1000104033/1000147703/brand_logo_7.png?v=55"
                                            alt=""></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 195px;">
                                <div class="text-center">
                                    <a class="brand" href="#" title=""><img
                                            src="//hstatic.net/033/1000104033/1000147703/brand_logo_8.png?v=55"
                                            alt=""></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 195px;">
                                <div class="text-center">
                                    <a class="brand" href="#" title=""><img
                                            src="//hstatic.net/033/1000104033/1000147703/brand_logo_9.png?v=55"
                                            alt=""></a>
                                </div>
                            </div>
                            <div class="owl-item" style="width: 195px;">
                                <div class="text-center">
                                    <a class="brand" href="#" title=""><img
                                            src="//hstatic.net/033/1000104033/1000147703/brand_logo_10.png?v=55"
                                            alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="owl-controls clickable">
                        <div class="owl-buttons">
                            <div class="owl-prev"></div>
                            <div class="owl-next"></div>
                        </div>
                    </div>
                </div>

            </div>

        </section>

    </main>

    <!-- <Footer></Footer> -->

</template>

<style>
    .tab-products h2.title,
    .tab-products .title.h2,
    .tab-products h4.widget__title,
    .tab-products .widget__title.h4 {
        margin-bottom: 57px;
    }

    .tab-products .nav-tabs {
        text-align: center;
    }

    .tab-products .nav-tabs {
        text-align: center;
    }

    .tab-products .nav-tabs>li.active>a,
    .tab-products .nav-tabs>li.active>a:hover,
    .tab-products .nav-tabs>li.active>a:focus {
        border-width: 0 0 1px 0;
        border-style: solid;
        border-color: #e42234;
    }

    .tab-products .nav-tabs>li>a {
        padding: 0;
        line-height: 32px;
        margin: 0 15px;
    }

    .tab-products .tab-content {
        margin-top: 20px;
        border: none;
    }

    .nav-tabs {
        border-bottom: 1px solid transparent;
        margin: 0;
    }

    .nav-tabs>li {
        display: inline-block;
        margin-bottom: -3px;
    }

    .nav-tabs>li>a {
        text-transform: uppercase;
        margin-right: 2px;
        line-height: inherit;
        font-weight: bold;
        color: #999;
        border: 1px solid transparent;
        font-size: 14px;
        border-radius: 0 0 0 0;
    }

    .nav-tabs>li>a:hover {
        border-color: transparent transparent transparent;
    }

    .nav-tabs>li.active>a,
    .nav-tabs>li.active>a:hover,
    .nav-tabs>li.active>a:focus {
        color: #000;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-bottom-color: transparent;
        cursor: default;
    }

    .tab-content {
        padding: 20px;
    }

    .tab-content>.tab-pane {
        display: none;
    }

    .tab-content>.active {
        display: block;
    }

    .tab-products .tab-content {
        margin-top: 20px;
        border: none;
        margin-left: 14rem;
    }

    .product-container {
        text-align: center;
        margin-bottom: 20px !important;
        position: relative;
        min-height: 400px;
    }

    .large--one-four {
        width: 21%;
    }

    .large--one-half {
        width: 40%;
    }

    .section-brand {
        background: #ffffff;
        padding: 47px 0;
        border-bottom: 1px solid #e5e5e5;
    }

    .entry-title{
        color: black;
        display: block;
        font-family: Roboto, serif;
        font-weight: 500;
        margin: 0 0 0.5em;
        line-height: 1.4;
        font-size: 1.28571em;
        font-style: normal;
        text-decoration: none;
    }
 
</style>

<script>
    export default {
        data() {
            return {
                imageUrls: [
                    "//hstatic.net/033/1000104033/1000147703/slide_logo_1.jpg?v=55",
                    "//hstatic.net/033/1000104033/1000147703/slide_logo_2.jpg?v=55",
                ],
                currentIndex: 0,
            };
        },
        methods: {
            previousImage() {
                this.currentIndex = (this.currentIndex - 1 + this.imageUrls.length) % this.imageUrls.length;
            },
            nextImage() {
                this.currentIndex = (this.currentIndex + 1) % this.imageUrls.length;
            },
        },
    };
</script>