<script setup>
    import { useMobileMenuStore } from '@/stores/useMobileMenu.js'

    const navbar = useMobileMenuStore()
    
</script>

<template>
    <div class="mobile-menu" :class="navbar.isShow && 'show'">
        <div class="d-flex justify-content-between align-items-center p-3">
            <a class="navbar-brand" href="#">
                <img src="@/assets/images/logo.png" class="img-fluid" alt="Zapkad Logo" />
            </a>
            <div class="icon" @click="navbar.hide()">
                <span>&#x2715;</span>
            </div>
        </div>
        <div class="nav-area">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Zapkad Features</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Success Stories</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Shop</a>
                </li>
            </ul>

            <div class="text-center mt-4">
                <a href="#" class="btn btn-primary rounded-pill px-4 py-2 fw-bold text-light">Sign Up</a>
            </div>
        </div>
    </div>
    <div :class="navbar.isShow && 'nav-overlay'"></div>
</template>