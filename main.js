class MyHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <nav class="navbar navbar-expand-lg bg-primary">
        <a class="navbar-brand" href="index.html">
          <i class="fa-solid fa-computer"></i>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse p-2" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="index.html">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="form.html">Carrers</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Resources.html">Resources</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="Contact.html">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"
                >Blog
                <i class="fa-solid fa-up-right-from-square"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
        `
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
        <footer
        class="footer row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 border-top"
      >
        <div class="col-md-3 mb-3">
          <a
            href=""
            class="d-flex align-items-center mb-3 link-dark text-decoration-none"
          >
            <i class="fa-solid fa-computer fa-3x"></i>
          </a>
          <div class="d-flex">
            <div class="col"><i class="fa-brands fa-facebook fa-lg"></i></div>
            <div class="col"><i class="fa-brands fa-twitter fa-lg"></i></div>
            <div class="col"><i class="fa-brands fa-instagram fa-lg"></i></div>
            <div class="col"><i class="fa-brands fa-linkedin fa-lg"></i></div>
          </div>
        </div>
        <div class="col-md-3 mb-3">
          <h5 class="mb-3">Company</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Contact</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Careers</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">News</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Blog</a>
            </li>
          </ul>
        </div>
        <div class="col-md-3 mb-3">
          <h5 class="mb-3">About</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Our Team</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Our Works</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Brand Resources</a>
            </li>
          </ul>
        </div>

        <div class="col-md-3 mb-3">
          <h5 class="mb-3">Policies</h5>
          <ul class="nav flex-column">
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Privacy Policy</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted">Terms of Service</a>
            </li>
            <li class="nav-item mb-2">
              <a href="#" class="nav-link p-0 text-muted"
                >Third Party Services</a
              >
            </li>
          </ul>
        </div>
        
        <div class="col-md-12 d-flex align-items-center border-top mt-2">
          <a
            href="/"
            class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
          </a>
          <span class="my-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
        </div>

        <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li class="ms-3">
            <a class="text-muted" href="#"
              >
                </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#"
              >
                </a>
          </li>
          <li class="ms-3">
            <a class="text-muted" href="#"
              ></a>
          </li>
        </ul>
      </footer>
        `
    }
}
customElements.define('my-footer', MyFooter)