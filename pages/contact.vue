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
                    <span>Liên hệ</span>
                </div>
                <h3 class="page_name">Liên hệ</h3>
            </div>
        </nav>

        <div class="grid text-center contact-box">
            <div class="contact">
                <div class="grid__item large--one-third">
                    <div class="inner">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" class="fa">
                            <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                        </svg><br>
                            Ngõ 15 Duy Tân, Mỹ Đình 2,<br> 
                            Từ Liêm, Hà Nội
                    </div>
                </div>

                <div class="grid__item large--one-third">
                    <div class="inner">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" class="fa">
                            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm90.7 96.7c9.7-2.6 19.9 2.3 23.7 11.6l20 48c3.4 8.2 1 17.6-5.8 23.2L168 231.7c16.6 35.2 45.1 63.7 80.3 80.3l20.2-24.7c5.6-6.8 15-9.2 23.2-5.8l48 20c9.3 3.9 14.2 14 11.6 23.7l-12 44C336.9 378 329 384 320 384C196.3 384 96 283.7 96 160c0-9 6-16.9 14.7-19.3l44-12z"/></svg><br>
                        +844 123 456 789<br> 
                        +844 123 456 789
                    </div>
                </div>

                <div class="grid__item large--one-third">
                    <div class="inner">
                        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" class="fa">
                            <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg><br>
                        contact@basic.com<br> 
                        info@basic.com
                    </div>
                </div>
            </div>
        </div>

        <div class="grid contact">
            <div class="grid__item space-30" id="contact-map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0585488467186!2d105.78133461532754!3d21.03034319309924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4cea8a52db%3A0x9cb3411f9e429e2d!2zTmfDtSAxNSBEdXkgVMOibiwgROG7i2NoIFbhu41uZyBI4bqtdSwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1469442789088" width="1903" height="450" frameborder="0" style="border:0" allowfullscreen=""></iframe>
            </div>

            <div class="grid__item">
                <h1 class="contact-title">Liên hệ</h1>
                <div class="rte">
                
                </div>

                <div class="form-vertical">
                    <form accept-charset="UTF-8" action="/contact" class="contact-form" method="post">
                        <input name="form_type" type="hidden" value="contact">
                        <input name="utf8" type="hidden" value="✓">

                        <div class="contact">
                            <div class="grid__item large--one-third">
                                <label for="ContactFormName" class="hidden-label">Tên</label>
                                <input type="text" id="ContactFormName" class="input-full" name="contact[ten]" placeholder="Tên" autocapitalize="words" value="">
                            </div>

                            <div class="grid__item large--one-third">
                                <label for="ContactFormEmail" class="hidden-label">Email </label>
                                <input type="email" id="ContactFormEmail" class="input-full" name="contact[email]" placeholder="Email " autocorrect="off" autocapitalize="off" value="">
                            </div>
                            
                            <div class="grid__item large--one-third">
                                <label for="ContactFormPhone" class="hidden-label">Điện thoại </label>
                                <input type="tel" id="ContactFormPhone" class="input-full" name="contact[dien-thoai]" placeholder="Điện thoại " pattern="[0-9\-]*" value="">
                            </div>
                        </div>

                        <label for="ContactFormMessage" class="hidden-label">Phản hồi</label>
                        <textarea rows="10" id="ContactFormMessage" class="input-full" name="contact[body]" placeholder="Phản hồi"></textarea>

                        <input type="submit" class="btn right-sub" value="Gửi">
                        
                    <!-- <input id="f25cc16528c54130ae76cfef5a44bf8c" name="g-recaptcha-response" type="hidden" value="03AFcWeA7Zt9TepofPOwK8n8HwrP2KAhhdMLePP2USogC-1BYElNmTd_1fZHq7kGtsg2Ly0KtjP5acbFpVAZ8bm_LOfnLC-iEDtM-Rj_adyC01hOqVP9_bAXTtu317T4XMvIA8BF0Bqhdne_-Kf-Je-K3jgBzUgqIGjXNoNyHr5WSlnG3Rv2VQbVADNLD3Akod7wFSeiZRo7R_N5WGfo8GAWdKvG-G8pfK0Sd6kdEUGS6Xx_9WG5X5TpAVU7vB342vF_s3mQ_d8OJV4DkKcMJ7CEjPzDBB4oYjLSuZZ__Hf_Sims-laGURU63DR_6Fl-amduYhh65r_JNbzbu-J2QMHSnEGAEcn1vmIyGkkFVKYuWY9QgfiUmGxtWN7Egr7s8Li-hcuynr3Ya1KH-xTFYH1arMXLaSg7QPGIqxZALVf8E9MK3TETAssAu6iGqOHKGVBZpERWokw9LK9cZi4tcPo_i-mI3mGRUSM7Q8-2cDGHQsbOvJGUV1w6bl07ZrCj_2I1nXSXb8lDjyM_3OdOR6KmWHNYNozhfTV9ICi5xttud7B6ZVmnC4l_pEUYs__mnvWaFHeGR5KJk8P6_BYtVDPcxNRsGRm3EbqpfgdsmcLd_qTtqf2GkmpUU"><script src="https://www.google.com/recaptcha/api.js?render=6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-"></script><script>grecaptcha.ready(function() {grecaptcha.execute('6LdD18MUAAAAAHqKl3Avv8W-tREL6LangePxQLM-', {action: 'submit'}).then(function(token) {document.getElementById('f25cc16528c54130ae76cfef5a44bf8c').value = token;});});</script> -->
                    </form>
                </div>
            </div>
        </div>

    <em> </em>

    </main>

     <!-- <Footer></Footer> -->
     
    
</template>

<script>

</script>



