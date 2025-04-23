// components.js

class SiteHeader extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <header class="flex items-center justify-between px-6 py-4 shadow-md bg-white">
          <a href="index.html">
            <img src="images/bspeech_logo.png" alt="B's Speech Logo" style="height: 100px;">
          </a>
          <nav class="space-x-4 text-yellow-600 hidden md:block">
            <a href="index.html" class="hover:underline">Home</a>
            <a href="services.html" class="hover:underline">Services</a>
            <a href="about.html" class="hover:underline">Our Story</a>
            <a href="contact.html" class="hover:underline">Contact</a>
          </nav>
        </header>
      `;
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
  