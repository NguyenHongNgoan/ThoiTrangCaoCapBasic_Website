<template>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    </head>

        <header class="site-header">
            <div class="wrapper">
                <div class="header">
                    <div class="site-header__topbar"> 
                        <div class="dropdown inline-block ultility-item large--left">
                                <button class="black white font-semibold px-4 inline-flex items-center">
                                    <span class="mr-1">Tài khoản</span>
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </button>

                                <ul class="dropdown-menu absolute hidden text-black-700">
                                    <li>
                                        <!-- <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="fa">
                                            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                                        </svg> -->
                                        <a class="bg-black text-white hover:text-red-500 py-2.5 px-4 block whitespace-no-wrap" href="#">Đăng Nhập</a>
                                    </li>
                                    <li><a class="bg-black text-white hover:text-red-500 py-2.5 px-4 block whitespace-no-wrap" href="#">Tạo Tài Khoản</a></li>
                                    <li><a class="bg-black text-white hover:text-red-500 py-2.5 px-4 block whitespace-no-wrap" href="#">Được Yêu Thích Nhất</a></li>
                                    <li><a class="bg-black text-white hover:text-red-500 py-2.5 px-4 block whitespace-no-wrap" href="#">Sản Phẩm Yêu Thích</a></li>
                                </ul>
                        </div>                    
        
                        <!-- end account -->

                        <div class="large--right">
                            <a href="/cart" class="site-header__cart-toggle js-drawer-open-right" aria-controls="CartDrawer" aria-expanded="false">
                                <div class="cart_n">
                                    <i class="lnr lnr-cart "></i>
                                    Giỏ hàng: 
                                </div>
                                <span id="CartCount">0</span>
                                    Sản phẩm
                                <span id="CartCost">0₫</span>
                            </a>
                        </div><!--  end cart -->

                        <!-- <div class="site-header__search large--right">
                            <form action="/search" method="get" class="input-group search-bar" role="search">
                            
                                <input type="search" name="q" value="" placeholder="Nhập vào tìm kiếm" class="input-group-field" aria-label="Nhập vào tìm kiếm">
                                <span class="input-group-btn">
                                    <button type="submit" class="btn icon-fallback-text">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 36 36" stroke-width="3.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                        </svg>
                                        <span class="fallback-text">Tìm kiếm</span>
                                    </button>
                                </span>
                            </form>
                        </div>       -->
                    </div>

                    <div class="logo">
                        <h1 class="site-header__logo" itemscope itemtype="http://schema.org/Organization">
                            <a href="/" itemprop="url" class="site-header__logo-link">
                                <img src="//hstatic.net/033/1000104033/1000147703/logo.png?v=55" alt="basic" itemprop="logo">
                            </a>
                        </h1>
                    </div>

                    <nav class="nav-bar keep-this" role="navigation">
                        <div class="medium-down--hide">
       
                                <ul class="site-nav">
                                    <li>
                                        <a href="/" class="block text-black-500 md:hover:text-red-600 site-nav__link">Trang chủ</a>
                                    </li>
                                    <li>
                                        <a href="/product" class="block text-black-500 md:hover:text-red-600 site-nav__link">Sản phẩm</a>
                                    </li>
                                    <li>
                                        <a href="/news" class="block text-black-500 md:hover:text-red-600 site-nav__link">Tin tức</a>
                                    </li>
                                    <li>
                                        <a href="/about-us" class="block text-black-500 md:hover:text-red-600 site-nav__link">Giới thiệu</a>
                                    </li>
                                    <li>
                                        <a href="/contact" class="block text-black-500 md:hover:text-red-600 site-nav__link">Liên hệ</a>
                                    </li>
                                </ul>                          
                        </div>

                        <div class="large--hide medium-down--show">
                            <div class="grid">
                                <div class="grid__item one-half">
                                    <div class="site-nav--mobile">
                                        <button type="button" class="icon-fallback-text site-nav__link js-drawer-open-left" aria-controls="NavDrawer" aria-expanded="false">
                                            <span class="icon icon-hamburger" aria-hidden="true"></span>
                                            <span class="fallback-text">Menu</span>
                                        </button>
                                    </div>
                                </div>
                                <div class="grid__item one-half text-right">
                                    <div class="site-nav--mobile">
                                        <a href="/cart" class="js-drawer-open-right site-nav__link" aria-controls="CartDrawer" aria-expanded="false">
                                            <span class="icon-fallback-text">
                                                <span class="sprite sprite-cart" aria-hidden="true"></span>
                                                <span class="fallback-text">Giỏ hàng</span>
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </header>

</template>

<script>

</script>

