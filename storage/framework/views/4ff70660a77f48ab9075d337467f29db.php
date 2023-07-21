<?php $__env->startSection('content'); ?>
    </main>
    <section class="section hero has-bg-image" id="home" aria-label="home"
        style="background-image: url('<?php echo e(asset('img/hero-banner.jpg')); ?>')">
        <div class="hero-content">
            <h2 class="wow animate__animated animate__fadeInLeft animate__slow">Product Details</h2>
            <h1 class="wow animate__animated animate__fadeInRight animate__slow"></h1><br>

        </div>
    </section>




    <div class="slideshow-container">
        <div class="mySlides fade">

            <img src="<?php echo e(asset('img/toycarSlider.jpg')); ?>" style="width:100%">

        </div>

        <div class="mySlides fade">

            <img src="<?php echo e(asset('img/toycarSliderDos.jpg')); ?>" style="width:100%">

        </div>

        <div class="mySlides fade">

            <img src="<?php echo e(asset('img/toycarSlider.jpg')); ?>" style="width:100%">

        </div>

        <a class="prev" onclick="plusSlides(-1)">❮</a>
        <a class="next" onclick="plusSlides(1)">❯</a>

        <div style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
        </div>
    </div>

    <div class="contact-form">
        <h2>Contact Form</h2>
        <form action="#" method="post">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required>
            </div>

            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required>
            </div>

            <div class="form-group">
                <label for="option">Choose:</label>
                <select id="option" name="option">
                    <option value="buy">Buy</option>
                    <option value="exchange">Exchange</option>
                </select>
            </div>

            <div class="form-group">
                <label for="option">Choose an option:</label>
                <select id="option" name="option">
                    <option value="buy">Buy</option>
                    <option value="exchange">Exchange</option>
                </select>
            </div>

            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" name="message" rows="4" required></textarea>
            </div>

            <button type="submit">Send</button>
        </form>
    </div>
    </main>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH /var/www/html/resources/views/details.blade.php ENDPATH**/ ?>