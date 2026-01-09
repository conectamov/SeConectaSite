<script setup>
import conectaLogo from '../../../assets/conectaLogo.png'
</script>

<template>
  <footer class="footer">
    <div class="footer-main">
      <p class="footer-description">
        Uma rede de crescimento feita por estudantes, para estudantes. Juntos, criamos pontes entre
        potencial e oportunidade.
      </p>
      <div class="socialmedia-icons">
        <i class="fa-brands fa-instagram fa-xl"></i>
        <i class="fa-brands fa-linkedin fa-xl"></i>
        <i class="fa-brands fa-facebook fa-xl"></i>
        <i class="fa-brands fa-twitter fa-xl"></i>
      </div>
    </div>
  </footer>
  <p class="copyright">Conecta © 2025 - Todos os direitos reservados.</p>
</template>

<style scoped>
.footer {
  @apply z-50 bg-gradient-to-r from-[#60b6c1] to-[#36ad90] text-white px-8 md:px-16 lg:px-20 py-12 relative flex flex-col items-center;
}

.footer-main {
  @apply mb-20 w-[100%] flex flex-col items-center justify-center;
}

.logo {
  @apply w-48 mb-6;
}

.footer-description {
  @apply text-lg mb-6 leading-relaxed text-white/90;
}

.socialmedia-icons {
  @apply flex gap-6;
}

.socialmedia-icons i {
  @apply hover:text-[#0c1b32] transition-colors duration-300 cursor-pointer;
}

.footer-links {
  @apply grid grid-cols-1 md:grid-cols-2 gap-10 mb-10 flex  w-[80%];
}

.links-group {
  @apply mb-6;
}

.links-title {
  @apply text-xl font-bold mb-4 text-white border-b border-white/30 pb-2;
}

.links-list {
  @apply space-y-2;
}

.link-item {
  @apply text-white/80 hover:text-white hover:underline transition-colors duration-300 block py-1;
}

.copyright {
  @apply bg-[#0c1b32]  w-screen text-white/80 text-center py-4 text-sm;
}

@media (max-width: 768px) {
  .footer {
    @apply px-6 py-10;
  }

  .logo {
    @apply w-36;
  }

  .back-to-top {
    @apply bottom-6 right-6 px-3 py-2 text-sm;
  }

  .back-to-top span {
    @apply hidden;
  }

  .footer-links {
    @apply grid-cols-1 gap-8;
  }
}

.link-item:hover {
  @apply transform translate-x-1;
}
</style>
