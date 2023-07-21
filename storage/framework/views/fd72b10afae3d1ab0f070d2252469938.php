<header class="header" data-header>
    <div class="container">
        <button class="nav-toggle-btn" aria-label="toggle manu" data-nav-toggler>
            <ion-icon name="menu-outline" aria-hidden="true" class="menu-icon"></ion-icon>
            <ion-icon name="close-outline" aria-label="true" class="close-icon"></ion-icon>
        </button>

        <a class="logo">
            <img src="<?php echo e(asset('img/logoTrueKind.png')); ?>" width="130" height="100" loading="lazy" alt="service icon"/>
        </a>

        <nav class="navbar" data-navbar>
            <ul class="navbar-list">
                <li class="navbar-item">
                    <a href="/" class="navbar-link" data-nav-link>Home</a>
                </li>

                <li class="navbar-item">
                    <a href="#containerProductsEnlace" class="navbar-link" data-nav-link>Products</a>
                </li>

                <li class="navbar-item">
                    <a href="/favorites" class="navbar-link" data-nav-link>Favorites</a>
                </li>

                <li class="navbar-item">
                    <a class="navbar-link" href="/aboutus" data-nav-link>About us</a>
                </li>

                <li class="navbar-item">
                    <a class="navbar-link" href="#containerContactFooter" data-nav-link>Contact</a>
                </li>

                <li class="navbar-item">
                    <a class="navbar-link" href="/register" data-nav-link>Sing Up</a>
                </li>

                <li class="navbar-item">
                    <a class="navbar-link" href="/login" data-nav-link>Login</a>
                </li>

                <?php if(auth()->guard()->check()): ?>
                    <li class="colorUser nav-item">
                        <span class="navbar-link">Hola, <?php echo e(Auth::user()->name); ?></span>
                    </li>
                <?php endif; ?>
                <li class="nav-item">
                    <a class="colorUser navbar-link" href="<?php echo e(route('logout')); ?>"
                        onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        Logout
                    </a>
                    <form id="logout-form" action="<?php echo e(route('logout')); ?>" method="POST" style="display: none;">
                        <?php echo csrf_field(); ?>
                    </form>
                </li>
                

            </ul>
        </nav>


</header>
<?php /**PATH /var/www/html/resources/views/components/navbar.blade.php ENDPATH**/ ?>