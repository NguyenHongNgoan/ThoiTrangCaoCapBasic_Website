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
                    <span>Giới thiệu</span>
                </div>
                <h3 class="page_name">Giới thiệu</h3>
            </div>
        </nav>

        <div class="grid">
            <div class="two-grid">
                <div class="sidebar grid__item left">
                <div class="collection-sidebar">
                    <!-- star category siebar -->
                    
                    <div class="widget-category widget">
                        <h4 class="widget__title">Thể loại</h4>                             
                        <div class="widget__content">
                            <ul class="menu">
                                
                                <li><a href="/collections/san-pham-ban-chay" title="Sản phẩm bán chạy">Sản phẩm bán chạy <span>9</span></a></li>
                                
                                <li><a href="/collections/san-pham-moi" title="Sản phẩm mới">Sản phẩm mới <span>9</span></a></li>
                                
                                <li><a href="/collections/hot-products" title="Sản phẩm nổi bật">Sản phẩm nổi bật <span>9</span></a></li>
                                
                                <li><a href="/collections/onsale" title="Sản phẩm khuyến mãi">Sản phẩm khuyến mãi <span>5</span></a></li>
                                
                                <li><a href="/collections/frontpage" title="Trang chủ">Trang chủ <span>18</span></a></li>
                                
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
                                        <img class="product-featured-image" src="//hstatic.net/033/1000104033/1/2016/8-2/product_31_grande.jpg" alt="">
                                    </a>
                                </div>

                                <div class="product-meta">
                                    <a class="product-name" href="/products/ao-so-mi-nam-11" title="Áo sơ mi nữ">Áo sơ mi nữ</a>
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
                                        <img class="product-featured-image" src="//hstatic.net/033/1000104033/1/2016/8-2/product_13_grande.jpg" alt="">
                                    </a>
                                </div>

                                <div class="product-meta">
                                    <a class="product-name" href="/products/ao-so-mi-nam-2" title="Áo sơ mi nam">Áo sơ mi nam</a>
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
                                        <img class="product-featured-image" src="//hstatic.net/033/1000104033/1/2016/8-2/product_47_grande.jpg" alt="">
                                    </a>
                                </div>

                            <div class="product-meta">
                                <a class="product-name" href="/products/ao-so-mi-nam-6" title="Túi xách thời trang">Túi xách thời trang</a>
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
                                        <img class="product-featured-image" src="//hstatic.net/033/1000104033/1/2016/8-2/product_62_grande.jpg" alt="">
                                    </a>
                                </div>
                            <div class="product-meta">
                                <a class="product-name" href="/products/ao-so-mi-nam-7" title="Túi xách thời trang">Túi xách thời trang</a>
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
                                        <img class="product-featured-image" src="//hstatic.net/033/1000104033/1/2016/8-2/product_29_grande.jpg" alt="">
                                    </a>
                                </div>
                            <div class="product-meta">
                                <a class="product-name" href="/products/ao-so-mi-nam-17" title="Mủ len thời trang">Mủ len thời trang</a>
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
                        <a href="#"><img src="//hstatic.net/033/1000104033/1000147703/ads_block.jpg?v=55" alt=""></a>
                    </div>

                    <div class="widget-cms widget">
                        <h4 class="widget__title">CMS Hướng dẫn</h4>
                        <em>khối CMS tùy chỉnh hiển thị ở thanh bên trái trên Catalog trang. Đặt nội dung của riêng bạn ở đây:. Text, html, hình ảnh, truyền thông ... bất cứ điều gì bạn thích<br>
                            <em> Có rất nhiều tương tự như giữ chỗ nội dung mẫu trên cửa hàng. Tất cả có thể chỉnh sửa từ bảng quản trị.</em>
                        </em>
                    </div>
                    <em> </em>
                </div>
            <em> </em>
        </div>
        <!-- end advertising -->

            <em>
                <div class="grid__item right">
                    <div class="rte">
                        <p>Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa hàng, thông tin liên hệ. 
                            Điều này sẽ giúp khách hàng cảm thấy tin tưởng khi mua hàng trên website của bạn.</p>
                        <p>Một vài gợi ý cho nội dung trang Giới thiệu:</p><br>

                        <div>
                            <ul>
                                <li><span>Bạn là ai</span><br></li>
                                <li><span>Giá trị kinh doanh của bạn là gì</span><br></li>
                                <li><span>Địa chỉ cửa hàng</span><br></li>
                                <li><span>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</span><br></li>
                                <li><span>Bạn kinh doanh ngành hàng online được bao lâu</span><br></li>
                                <li><span>Đội ngũ của bạn gồm những ai</span><br></li>
                                <li><span>Thông tin liên hệ</span><br></li>
                                <li><span>Liên kết đến các trang mạng xã hội (Twitter, Facebook)</span><br></li>
                            </ul>
                        </div>
                        <p>Bạn có thể chỉnh sửa hoặc xoá bài viết này tại <a href="https://basic.myharavan.com/admin/page#/detail/1000196081"><strong>đây</strong></a> 
                            hoặc thêm những bài viết mới trong phần quản lý <a href="https://basic.myharavan.com/admin/page#/new"><strong>Trang nội dung</strong></a>.</p>
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



