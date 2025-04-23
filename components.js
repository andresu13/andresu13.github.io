// components.js

class SiteHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="bg-white shadow-md">
        <div class="flex items-center justify-between px-6 py-4">
          <a href="index.html">
            <img src="images/bspeech_logo.png" alt="B's Speech Logo" style="height: 100px;" />
          </a>
          <button id="menu-toggle" class="md:hidden text-yellow-600 focus:outline-none" aria-label="Toggle navigation">
            &#9776;
          </button>
          <nav id="menu" class="hidden md:block space-x-4 text-yellow-600">
            <a href="index.html" class="hover:underline block md:inline">Home</a>
            <a href="services.html" class="hover:underline block md:inline">Services</a>
            <a href="about.html" class="hover:underline block md:inline">Our Story</a>
            <a href="contact.html" class="hover:underline block md:inline">Contact</a>
          </nav>
        </div>
        <div id="mobile-menu" class="md:hidden hidden flex-col px-6 pb-4 space-y-2 text-yellow-600">
          <a href="index.html" class="hover:underline">Home</a>
          <a href="services.html" class="hover:underline">Services</a>
          <a href="about.html" class="hover:underline">Our Story</a>
          <a href="contact.html" class="hover:underline">Contact</a>
        </div>
      </header>
    `;

    const toggleButton = this.querySelector('#menu-toggle');
    const mobileMenu = this.querySelector('#mobile-menu');

    toggleButton?.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      mobileMenu.classList.toggle('flex');
    });
  }
}
customElements.define('site-header', SiteHeader);

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="bg-yellow-50 py-8 px-6 text-center text-sm text-gray-600">
        <p>&copy; 2025 B's Speech Therapy. All rights reserved.</p>
        <nav class="mt-4 space-x-4 text-yellow-600">
          <a href="services.html" class="hover:underline">Services</a>
          <a href="about.html" class="hover:underline">About</a>
          <a href="contact.html" class="hover:underline">Contact</a>
        </nav>
      </footer>
    `;
  }
}
customElements.define('site-footer', SiteFooter);