<template>

    <head>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    </head>

    <Header></Header>

    <main class="wrapper main-content w-full mx-auto h-[500px] white">

        <nav class="breadcrumb" role="navigation" aria-label="breadcrumbs">
            <img src="//hstatic.net/033/1000104033/1000147703/bg-breadcrumb.jpg?v=55" alt="">
            <div class="inner">
                <div class="breadcrumb-list">
                    <a href="/" title="Quay lại trang chủ">Trang chủ</a>
                    <span aria-hidden="true">/</span>
                    <span>Danh sách sản phẩm</span>
                </div>
                <h3 class="page_name">Bộ sưu tập</h3>
            </div>
        </nav>

        <div class="grid">
            <div class="two-grid ">
                <div class="sidebar grid__item left">
                    <div class="collection-sidebar">
                        <div class="widget-category widget">
                            <h4 class="widget__title">Thể loại</h4>
                            <div class="widget__content">
                                <ul class="menu">

                                    <li><a href="/collections/san-pham-ban-chay" title="Sản phẩm bán chạy">Sản phẩm bán
                                            chạy <span>9</span></a></li>

                                    <li><a href="/collections/san-pham-moi" title="Sản phẩm mới">Sản phẩm mới
                                            <span>9</span></a></li>

                                    <li><a href="/collections/hot-products" title="Sản phẩm nổi bật">Sản phẩm nổi bật
                                            <span>9</span></a></li>

                                    <li><a href="/collections/onsale" title="Sản phẩm khuyến mãi">Sản phẩm khuyến mãi
                                            <span>5</span></a></li>

                                    <li><a href="/collections/frontpage" title="Trang chủ">Trang chủ <span>18</span></a>
                                    </li>

                                </ul>
                            </div>
                        </div><!-- end category sidebar -->

                        <!-- star product sidebar -->

                        <div class="widget-product widget">
                            <h4 class="widget__title">Sản phẩm nổi bật</h4>

                            <div class="widget__content">
                                <div class="item">
                                    <div class="product-image">
                                        <a href="/products/ao-so-mi-nam-11" title="">
                                            <img class="product-featured-image"
                                                src="//hstatic.net/033/1000104033/1/2016/8-2/product_31_grande.jpg"
                                                alt="">
                                        </a>
                                    </div>

                                    <div class="product-meta">
                                        <a class="product-name" href="/products/ao-so-mi-nam-11" title="Áo sơ mi nữ">Áo
                                            sơ mi nữ</a>
                                        <div class="product-price">
                                            <span class="amout">
                                                <span>
                                                    240,000₫
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div class="product-image">
                                        <a href="/products/ao-so-mi-nam-2" title="">
                                            <img class="product-featured-image"
                                                src="//hstatic.net/033/1000104033/1/2016/8-2/product_13_grande.jpg"
                                                alt="">
                                        </a>
                                    </div>

                                    <div class="product-meta">
                                        <a class="product-name" href="/products/ao-so-mi-nam-2" title="Áo sơ mi nam">Áo
                                            sơ mi nam</a>
                                        <div class="product-price">
                                            <span class="amout">
                                                <span>
                                                    180,000₫
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div class="product-image">
                                        <a href="/products/ao-so-mi-nam-6" title="">
                                            <img class="product-featured-image"
                                                src="//hstatic.net/033/1000104033/1/2016/8-2/product_47_grande.jpg"
                                                alt="">
                                        </a>
                                    </div>

                                    <div class="product-meta">
                                        <a class="product-name" href="/products/ao-so-mi-nam-6"
                                            title="Túi xách thời trang">Túi xách thời trang</a>
                                        <div class="product-price">
                                            <span class="amout">
                                                <span>
                                                    420,000₫
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div class="product-image">
                                        <a href="/products/ao-so-mi-nam-7" title="">
                                            <img class="product-featured-image"
                                                src="//hstatic.net/033/1000104033/1/2016/8-2/product_62_grande.jpg"
                                                alt="">
                                        </a>
                                    </div>
                                    <div class="product-meta">
                                        <a class="product-name" href="/products/ao-so-mi-nam-7"
                                            title="Túi xách thời trang">Túi xách thời trang</a>
                                        <div class="product-price">
                                            <span class="amout">
                                                <span>
                                                    420,000₫
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div class="item">
                                    <div class="product-image">
                                        <a href="/products/ao-so-mi-nam-17" title="">
                                            <img class="product-featured-image"
                                                src="//hstatic.net/033/1000104033/1/2016/8-2/product_29_grande.jpg"
                                                alt="">
                                        </a>
                                    </div>
                                    <div class="product-meta">
                                        <a class="product-name" href="/products/ao-so-mi-nam-17"
                                            title="Mủ len thời trang">Mủ len thời trang</a>
                                        <div class="product-price">
                                            <span class="amout">
                                                <span>
                                                    120,000₫
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end product siebar -->


                        <div class="widget-ads widget">
                            <a href="#"><img src="//hstatic.net/033/1000104033/1000147703/ads_block.jpg?v=55"
                                    alt=""></a>
                        </div>

                        <div class="widget-cms widget">
                            <h4 class="widget__title">CMS Hướng dẫn</h4>
                            <em>khối CMS tùy chỉnh hiển thị ở thanh bên trái trên Catalog trang. Đặt nội dung của riêng
                                bạn ở đây:. Text, html, hình ảnh, truyền thông ... bất cứ điều gì bạn thích<br>
                                <em> Có rất nhiều tương tự như giữ chỗ nội dung mẫu trên cửa hàng. Tất cả có thể chỉnh
                                    sửa từ bảng quản trị.</em>
                            </em>
                        </div>
                        <em> </em>
                    </div>
                    <em> </em>
                </div>
                <!-- end advertising -->

                <em>
                    <div class="grid__item right">
                        <header class="collection__info section-header">
                            <div class="rte rte--header space-10">

                            </div>
                        </header>

                        <div class="collection__sort section-header">
                            <div class="section-header__right">

                                <div class="form-horizontal">
                                    <label for="SortBy">Sắp xếp bởi</label>
                                    <select name="SortBy" id="SortBy">
                                        <option value="manual">Đặc tính</option>
                                        <option value="best-selling">Bán chạy nhất</option>
                                        <option value="title-ascending">Theo thứ tự, A-Z</option>
                                        <option value="title-descending">Theo thứ tự, Z-A</option>
                                        <option value="price-ascending">Giá, từ thấp đến cao</option>
                                        <option value="price-descending">Giá, Từ cao đến thấp</option>
                                        <option value="created-descending">Ngày, mới đến cũ</option>
                                        <option value="created-ascending">Ngày, cũ đến mới</option>
                                    </select>
                                </div>


                                <div class="collection-view left">
                                    <button type="button" title="Lưới xem" class="change-view change-view--active"
                                        data-view="grid">
                                        <span class="icon-fallback-text">
                                            <span class="icon icon-grid-view" aria-hidden="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                    fill="currentColor" class="w-6 h-4">
                                                    <path fill-rule="evenodd"
                                                        d="M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z"
                                                        clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                            <!-- <span class="fallback-text">Lưới xem</span> -->
                                        </span>
                                    </button>

                                    <button type="button" title="Danh sách xem" class="change-view" data-view="list">
                                        <span class="icon-fallback-text">
                                            <span class="icon icon-list-view" aria-hidden="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="2.5" stroke="currentColor" class="w-5 h-5">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                                </svg>

                                            </span>
                                            <!-- <span class="fallback-text">Danh sách xem</span> -->
                                        </span>
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div class="grid-uniform">
                            <div class="grid__item  large--one-third medium--one-third ">
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
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-8 h-8">
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
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Xem nhanh
                                            </a>
                                            
                                            <a href="/products/ao-so-mi-nam-17"
                                                class="btn product-quick-view btn-detail" title="Chi tiết">

                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                </svg>

                                                Chi tiết
                                            </a>
                                        </div>

                                    </div>
                                </div> <!-- product-container -->

                            </div>


                            <div class="grid__item  large--one-third medium--one-third ">
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
                                            <a href="/products/ao-so-mi-nam-16" title="Găng tay da">Găng tay da</a>
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
                                            <input type="hidden" name="id" value="1007973502">
                                            <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                            <button type="submit" name="add" class="btn">
                                                <span class="lnr lnr-cart ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-8 h-8">
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

                                            <a href="/products/ao-so-mi-nam-16" data-id="ao-so-mi-nam-16"
                                                class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Xem nhanh
                                            </a>
                                            <a href="/products/ao-so-mi-nam-16"
                                                class="btn product-quick-view btn-detail" title="Chi tiết">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                </svg>
                                                Chi tiết
                                            </a>
                                        </div>

                                    </div>
                                </div> <!-- product-container -->

                            </div>


                            <div class="grid__item  large--one-third medium--one-third ">

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
                                            <input type="hidden" name="id" value="1007973387">
                                            <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                            <button type="submit" name="add" class="btn">
                                                <span class="lnr lnr-cart ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-8 h-8">
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

                                            <a href="/products/ao-so-mi-nam-15" data-id="ao-so-mi-nam-15"
                                                class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Xem nhanh
                                            </a>
                                            <a href="/products/ao-so-mi-nam-15"
                                                class="btn product-quick-view btn-detail" title="Chi tiết">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                </svg>
                                                Chi tiết
                                            </a>
                                        </div>

                                    </div>
                                </div> <!-- product-container -->

                            </div>

                            <div class="grid__item  large--one-third medium--one-third ">

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
                                            <input type="hidden" name="id" value="1007973295">
                                            <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                            <button type="submit" name="add" class="btn">
                                                <span class="lnr lnr-cart ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-8 h-8">
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

                                            <a href="/products/ao-so-mi-nam-14" data-id="ao-so-mi-nam-14"
                                                class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Xem nhanh
                                            </a>
                                            <a href="/products/ao-so-mi-nam-14"
                                                class="btn product-quick-view btn-detail" title="Chi tiết">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                </svg>
                                                Chi tiết
                                            </a>
                                        </div>

                                    </div>
                                </div> <!-- product-container -->

                            </div>


                            <div class="grid__item  large--one-third medium--one-third ">


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
                                            <input type="hidden" name="id" value="1007973200">
                                            <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                            <button type="submit" name="add" class="btn">
                                                <span class="lnr lnr-cart ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-8 h-8">
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

                                            <a href="/products/ao-so-mi-nam-13" data-id="ao-so-mi-nam-13"
                                                class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Xem nhanh
                                            </a>
                                            <a href="/products/ao-so-mi-nam-13"
                                                class="btn product-quick-view btn-detail" title="Chi tiết">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                </svg>
                                                Chi tiết
                                            </a>
                                        </div>

                                    </div>
                                </div> <!-- product-container -->

                            </div>


                            <div class="grid__item  large--one-third medium--one-third ">


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
                                            <input type="hidden" name="id" value="1007973193">
                                            <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                            <button type="submit" name="add" class="btn">
                                                <span class="lnr lnr-cart ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-8 h-8">
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

                                            <a href="/products/ao-so-mi-nam-12" data-id="ao-so-mi-nam-12"
                                                class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Xem nhanh
                                            </a>
                                            <a href="/products/ao-so-mi-nam-12"
                                                class="btn product-quick-view btn-detail" title="Chi tiết">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                </svg>
                                                Chi tiết
                                            </a>
                                        </div>

                                    </div>
                                </div> <!-- product-container -->

                            </div>


                            <div class="grid__item  large--one-third medium--one-third ">

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
                                            <input type="hidden" name="id" value="1007973188">
                                            <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                            <button type="submit" name="add" class="btn">
                                                <span class="lnr lnr-cart ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-8 h-8">
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

                                            <a href="/products/ao-so-mi-nam-11" data-id="ao-so-mi-nam-11"
                                                class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Xem nhanh
                                            </a>
                                            <a href="/products/ao-so-mi-nam-11"
                                                class="btn product-quick-view btn-detail" title="Chi tiết">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                </svg>
                                                Chi tiết
                                            </a>
                                        </div>

                                    </div>
                                </div> <!-- product-container -->

                            </div>


                            <div class="grid__item  large--one-third medium--one-third ">


                                <div class="product-container" data-publish-date="">
                                    <div class="product-image ">
                                        <div class="product-thumbnail">
                                            <a href="/products/ao-so-mi-nam-10" title="">
                                                <img class="product-featured-image"
                                                    src="//hstatic.net/033/1000104033/1/2016/8-2/product_21_grande.jpg"
                                                    alt="">

                                                <img class="back-img"
                                                    src="//hstatic.net/033/1000104033/1/2016/8-2/product_23_grande.jpg"
                                                    alt="">

                                            </a>
                                        </div><!-- /.product-thumbnail -->

                                        <span class="label on-sale">Giảm</span>

                                    </div><!-- /.product-image -->

                                    <div class="product-meta">
                                        <h4 class="product-name">
                                            <a href="/products/ao-so-mi-nam-10" title="Áo sơ mi nữ">Áo sơ mi
                                                nữ</a>
                                        </h4><!-- /.product-product -->

                                        <div class="product-price">
                                            <span class="amout">

                                                <del class="sale-price">320,000₫</del>
                                                <span>260,000₫</span>
                                            </span>

                                        </div><!-- /.product-price -->
                                        <span class="haravan-product-reviews-badge" data-id="1002812785"></span>
                                        <!-- end rating -->
                                    </div><!-- /.product-meta -->


                                    <div class="product-actions">
                                        <form method="post" action="/cart/add" class="add-to-cart">
                                            <input type="hidden" name="id" value="1007973177">
                                            <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                            <button type="submit" name="add" class="btn">
                                                <span class="lnr lnr-cart ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-8 h-8">
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

                                            <a href="/products/ao-so-mi-nam-10" data-id="ao-so-mi-nam-10"
                                                class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Xem nhanh
                                            </a>
                                            <a href="/products/ao-so-mi-nam-10"
                                                class="btn product-quick-view btn-detail" title="Chi tiết">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                </svg>
                                                Chi tiết
                                            </a>
                                        </div>

                                    </div>
                                </div> <!-- product-container -->

                            </div>

                            <div class="grid__item  large--one-third medium--one-third ">


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
                                            <input type="hidden" name="id" value="1007973006">
                                            <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                            <button type="submit" name="add" class="btn">
                                                <span class="lnr lnr-cart ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-8 h-8">
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

                                            <a href="/products/ao-so-mi-nam-9" data-id="ao-so-mi-nam-9"
                                                class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Xem nhanh
                                            </a>
                                            <a href="/products/ao-so-mi-nam-9" class="btn product-quick-view btn-detail"
                                                title="Chi tiết">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                </svg>
                                                Chi tiết
                                            </a>
                                        </div>

                                    </div>
                                </div> <!-- product-container -->

                            </div>

                            <div class="grid__item  large--one-third medium--one-third ">

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
                                            <input type="hidden" name="id" value="1007972937">
                                            <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                            <button type="submit" name="add" class="btn">
                                                <span class="lnr lnr-cart ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-8 h-8">
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

                                            <a href="/products/ao-so-mi-nam-8" data-id="ao-so-mi-nam-8"
                                                class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Xem nhanh
                                            </a>
                                            <a href="/products/ao-so-mi-nam-8" class="btn product-quick-view btn-detail"
                                                title="Chi tiết">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                </svg>
                                                Chi tiết
                                            </a>
                                        </div>

                                    </div>
                                </div> <!-- product-container -->
                            </div>

                            <div class="grid__item  large--one-third medium--one-third ">

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
                                            <input type="hidden" name="id" value="1007972930">
                                            <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                            <button type="submit" name="add" class="btn">
                                                <span class="lnr lnr-cart ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-8 h-8">
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

                                            <a href="/products/ao-so-mi-nam-7" data-id="ao-so-mi-nam-7"
                                                class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Xem nhanh
                                            </a>
                                            <a href="/products/ao-so-mi-nam-7" class="btn product-quick-view btn-detail"
                                                title="Chi tiết">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa" aria-hidden="true">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                                </svg>
                                                Chi tiết
                                            </a>
                                        </div>

                                    </div>
                                </div> <!-- product-container -->

                            </div>

                            <div class="grid__item  large--one-third medium--one-third ">

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
                                            <input type="hidden" name="id" value="1007972919">
                                            <!-- <input type="submit" value="Buy now" class="btn" /> -->
                                            <button type="submit" name="add" class="btn">
                                                <span class="lnr lnr-cart ">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                                                        class="w-8 h-8">
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

                                            <a href="/products/ao-so-mi-nam-6" data-id="ao-so-mi-nam-6"
                                                class="btn product-quick-view btn-quickview" title="Xem nhanh">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa">
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round"
                                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                                Xem nhanh
                                            </a>
                                            <a href="/products/ao-so-mi-nam-6" class="btn product-quick-view btn-detail"
                                                title="Chi tiết">
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                    stroke-width="1.5" stroke="currentColor" class="w-3 h-3 fa" aria-hidden="true">
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
                </em>
            </div>
        </div>
        <em> </em>

    </main>

    <!-- <Footer></Footer> -->



</template>

<script>

</script>