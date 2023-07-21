<?php $__env->startSection('content'); ?>
    <main>
        <article>

            <!-- HERO -->
            <section class="section hero has-bg-image" id="home" aria-label="home"
                style="background-image: url('<?php echo e(asset('img/hero-banner.jpg')); ?>')">
                <div class="hero-content">
                    <h2 class="wow animate__animated animate__fadeInLeft animate__slow">Second Life, New Smile</h2>
                    <h1 class="wow animate__animated animate__fadeInRight animate__slow">Donate, sell or exchange what your
                        children no longer need</h1><br>
                    <a href="/register"><button class="btn-donar wow animate__animated animate__bounceIn animate__slower">Sign
                            up</button></a>
                </div>
            </section>

            <!-- CATEGORY -->
            <section class="section category" aria-label="category">
                <div class="container">
                    <h2 class="h2 section-title wow animate__animated animate__fadeIn">
                        <span class="span">Top</span> categories
                    </h2>

                    <ul class="has-scrollbar">
                        <li class="scrollbar-item wow animate__animated animate__fadeInLeft">
                            <div class="category-card">
                                <figure class="card-banner img-holder" style="--width: 330; --height: 300">
                                    <img src="<?php echo e(asset('img/toys.jpg')); ?>" width="330" height="300" loading="lazy"
                                        alt="toys" class="img-cover" />
                                </figure>
                                <h3 class="h3">
                                    <a class="card-title">Toys</a>
                                </h3>
                            </div>
                        </li>

                        <li class="scrollbar-item wow animate__animated animate__fadeInLeft">
                            <div class="category-card">
                                <figure class="card-banner img-holder" style="--width: 330; --height: 300">
                                    <img src="<?php echo e(asset('img/clothes.jpg')); ?>" width="330" height="300" loading="lazy"
                                        alt="clothes" class="img-cover" />
                                </figure>
                                <h3 class="h3">
                                    <a class="card-title">Clothes</a>
                                </h3>
                            </div>
                        </li>

                        <li class="scrollbar-item wow animate__animated animate__fadeInLeft">
                            <div class="category-card">
                                <figure class="card-banner img-holder" style="--width: 330; --height: 300">
                                    <img src="<?php echo e(asset('img/furniture.jpg')); ?>" width="330" height="300" loading="lazy"
                                        alt="furniture" class="img-cover" />
                                </figure>
                                <h3 class="h3">
                                    <a class="card-title">Furniture</a>
                                </h3>
                            </div>
                        </li>




                    </ul>
                </div>
            </section>

            <!-- DONATE -->
            <section id="donate" class="section offer" aria-label="offer">
                <h2 class="h2 section-title">
                    <span class="span">Donate </span> and promote yourself
                </h2>
                <div class="background-image">
                    <div id="containerDonate">
                        <p class="section-text">
                            Donating children's items helps provide joy and support to those in need, fostering a brighter
                            future for young hearts. Your contribution can make a lasting difference in a child's life. Join
                            us in spreading smiles through the gift of childhood essentials.
                        </p>
                        <a href="/donate"><button  class="btn-donar">Donate</button></a>
                    </div>
                </div>
            </section>

            <!-- PRODUCTOS -->
            <h2 class="h2 section-title">
                <span class="span" id="containerProductsEnlace">Products</span>
            </h2>
            <!-- Buscador y filtros -->

            <!-- PRODUCTS -->

            <section class="containerSearch">
                <div class="containerInsideSearch">
                    <input type="text" id="searchInput" placeholder="Search product...">
                    <select id="estadoFilter">
                        <option value="">All the states</option>
                        <option value="new">New</option>
                        <option value="used">Used</option>
                    </select>
                    <select id="edadFilter">
                        <option value="">All ages</option>
                        <option value="3">3+</option>
                        <option value="5">5+</option>
                        <option value="8">8+</option>
                    </select>
                    <button type="button" id="buscarBtn">Search</button>
                </div>
            </section>
            <div class="containerProducts">
                <section class="Productos" id="productos">
                    <div class="products">
                        <!-- PRODUCTS -->
                    </div>
                </section>
            </div>
            
            

            <section id="donate" class="section offer" aria-label="offer">
                <h2 class="h2 section-title">
                    <span class="span">Publish your</span> product here
                </h2>
                <div class="background-image-publish">
                    <div id="containerDonate">


                        <button class="btn-donar"
                            onclick="document.getElementById('form-submit-product').style.display='block'">Send product
                            to
                            change
                            it!</button>

                        <div id="form-submit-product" class="modal">

                            <form class="modal-content animate" action="/action_page.php" method="post">
                                <div class="imgcontainer">
                                    <span onclick="document.getElementById('form-submit-product').style.display='none'"
                                        class="close" title="Close Modal">&times;</span>
                                        
                                          <img src="<?php echo e(asset('img/logoTrueKind.png')); ?>" width="130" height="100" loading="lazy" alt="service icon"/>
                                     

                                    <div>
                                        <br><br>
                                        <h3>Image previews</h3>
                                        <br>
                                        <input type="file" id="fileSelector" accept="image/*" multiple>
                                        <br><br>
                                        <img id="previewImage">
                                    </div>
                                </div>

                                <div class="container-category">
                                    <label for="name"><b>Product Name</b></label>
                                    <input type="text" placeholder="Type your name here" name="uname" required>

                                    <label for="category" class="form-label">Type</label>
                                    <select required class="category" name="category">
                                        <option value="" selected disabled>category</option>
                                        <option value="toy">Toy</option>
                                        <option value="accesories">Accesories</option>
                                        <option value="clothes">Clothes</option>
                                    </select>

                                    <label for="category" class="form-label">I change it for</label>
                                    <select required class="category" name="category">
                                        <option value="" selected disabled>category</option>
                                        <option value="surprise">Surprise me!</option>
                                        <option value="toy">Toy</option>
                                        <option value="accesories">Accesories</option>
                                        <option value="clothes">Clothes</option>
                                    </select>

                                    <label for="price"><b>Price</b></label>
                                    <input type="price" name="uname">


                                    <label for="uname"><b>Description</b></label>
                                    <textarea name="textarea" rows="10" cols="50" placeholder="Type a great description of your product"
                                        required></textarea>

                                    <button class="button-submit" type="submit">Send Product</button>
                                    <label>
                                        <input required type="checkbox" checked="checked" name="lopd"
                                            pattern="[A-Za-z0-9_-]{1,15}">
                                        Read and accept the data privacy statement
                                    </label>
                                </div>

                                <div class="container-category">
                                    <button type="button"
                                        onclick="document.getElementById('form-submit-product').style.display='none'"
                                        class="cancelbtn">Cancel</button>
                                    <span class="psw">Privacy <a href="#">Terms</a></span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            </section>

            <!-- SERVICIOS -->

            <section class="section service" aria-label="service">
                <div class="container">
                    <h2 class="h2 section-title wow animate__animated animate__bounceInUp" data-wow-duration="1s"
                        data-wow-delay="0s">
                        <span class="span">Trade or buy</span> whenever you want
                    </h2>

                    <ul class="grid-list">
                        <li class="scrollbar-item wow animate__animated animate__fadeInLeft" data-wow-duration="1s"
                            data-wow-delay="0.2s">
                            <div class="service-card">
                                <figure class="card-icon">
                                    <img src="<?php echo e(asset('img/service-icon-1.png')); ?>" width="70" height="70"
                                        loading="lazy" alt="service icon" />
                                </figure>
                                <h3 class="h3 card-title">Free Shipping</h3>
                                <p class="card-text">
                                    Free shipping if you donate or on orders over €35.
                                </p>
                            </div>
                        </li>

                        <li class="scrollbar-item wow animate__animated animate__fadeInLeft" data-wow-duration="1s"
                            data-wow-delay="0.4s">
                            <div class="service-card">
                                <figure class="card-icon">
                                    <img src="<?php echo e(asset('img/service-icon-2.png')); ?>" width="70" height="70"
                                        loading="lazy" alt="service icon" />
                                </figure>
                                <h3 class="h3 card-title">30-Day Returns</h3>
                                <p class="card-text">
                                    5% discount on all future orders.
                                </p>
                            </div>
                        </li>

                        <li class="scrollbar-item wow animate__animated animate__fadeInLeft" data-wow-duration="1s"
                            data-wow-delay="0.6s">
                            <div class="service-card">
                                <figure class="card-icon">
                                    <img src="<?php echo e(asset('img/service-icon-3.png')); ?>" width="70" height="70"
                                        loading="lazy" alt="service icon" />
                                </figure>
                                <h3 class="h3 card-title">Secure Payments</h3>
                                <p class="card-text">
                                    Completely secure online payment, adhering to security standards.
                                </p>
                            </div>
                        </li>

                        <li class="scrollbar-item wow animate__animated animate__fadeInLeft" data-wow-duration="1s"
                            data-wow-delay="0.8s">
                            <div class="service-card">
                                <figure class="card-icon">
                                    <img src="<?php echo e(asset('img/service-icon-4.png')); ?>" width="70" height="70"
                                        loading="lazy" alt="service icon" />
                                </figure>
                                <h3 class="h3 card-title">24/7 Support</h3>
                                <p class="card-text">
                                    We assist you at all times and with any incident.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>

            <!-- CTA -->
            <section class="cta has-bg-image" aria-label="cta"
                style="background-image: url('<?php echo e(asset('img/cta-bg.jpg')); ?>')">
                <div class="container">
                    <figure class="cta-banner">
                        <img src="<?php echo e(asset('img/envíoGirlRedimension.png')); ?>" width="900" height="660"
                            loading="lazy" alt="shippinggirl" class="w-100 wow animate__animated animate__fadeInLeft" />
                    </figure>

                    <div class="cta-content">
                        <div class="containerGuarantee">
                            <img src="<?php echo e(asset('img/iconoGarantia.png')); ?>" width="120" height="35"
                                loading="lazy" alt="taste guarantee" class="img" id="iconoGarantia" />
                            <h2>GUARANTEE</h2>
                        </div>

                        <h2 class="h2 section-title wow animate__animated animate__bounceInUp" data-wow-duration="1s"
                            data-wow-delay="1s">
                            Try it, love it, or we'll replace it... Guaranteed!
                        </h2>

                        <p class="section-text wow animate__animated animate__fadeInLeft" data-wow-duration="1s"
                            data-wow-delay="1.2s">
                            Try what you purchased or exchanged with someone else for a period of 30 days. If it doesn't
                            meet your expectations, you can donate it and cover the shipping costs.
                        </p>

                        <a class="btn wow animate__animated animate__fadeInLeft" data-wow-duration="1s"
                            data-wow-delay="1.4s">Return Policies</a>
                    </div>
                </div>
            </section>


            
            <section id="containerContactFooter">
                <h2 class="h2 section-title">
                  <br>
                    <span class="span">Contact </span>Us
                </h2>
                <div id="id02">
                    <form class="formFooter  modal-content animate" action="/action_page.php" method="post">
                        <div class="container-category">
                            <label for="name"><b>Name</b></label>
                            <input type="text" placeholder="Type your name here" name="uname" required>
                            <label for="uname"><b>Email</b></label>
                            <input type="email" placeholder="email@email.com" name="uname" required>
                            <label for="uname"><b>Message</b></label>
                            <textarea name="textarea" rows="05" cols="50" required></textarea>
                            <button class="button-submit" type="submit">Send Message</button>
                            <label>
                                <input required type="checkbox" checked="checked" name="lopd"
                                    pattern="[A-Za-z0-9_-]{1,15}">
                                Read and accept the data privacy Terms
                            </label>
                        </div>
                    </form>
                </div>
            </section>




            <!-- FORMULARIO -->



            <!-- fin de Formulario-->

            <!-- FOOTER -->


            <!-- INICIO -->
        <?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/principal.blade.php ENDPATH**/ ?>