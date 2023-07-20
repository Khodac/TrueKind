


<?php $__env->startSection('content'); ?> 

    <main>
        <section class="section hero has-bg-image" id="home" aria-label="home" style="background-image: url('<?php echo e(asset('img/bannerFavorites.jpg')); ?>')">
            <div class="hero-content">
              <h2 class="wow animate__animated animate__fadeInLeft animate__slow">Favorites products</h2>
              <h1 class="wow animate__animated animate__fadeInRight animate__slow">Go back to see the products that caught your attention</h1><br>
              <button class="btn-donar wow animate__animated animate__bounceIn animate__slower">Sign up</button>
            </div>
          </section>
        <!-- Favoritos -->
        <h2 class="h2 section-title">
            <span class="span" id="containerProductsEnlace">Favorites Products</span>
        </h2>
        <!-- Buscador y filtros -->

        <!-- Favorites PRODUCTS -->
        
        
        <div class="containerProducts">
            <section class="Carrito" id="carrito">
                <div class="carrito-container">
                    <!-- PRODUCTOS FAVORITOS -->
                </div>
    
            </section>
        </div>

        
    </main>

<?php $__env->stopSection(); ?>


<?php echo $__env->make('layout.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/favorites.blade.php ENDPATH**/ ?>