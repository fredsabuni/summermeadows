class Header extends HTMLElement{
    constructor(){
        super();
    }

    connectedCallback(){
        this.innerHTML = ` 

        <!-- Topbar Start -->
        <div class="container-fluid bg-dark p-0 wow fadeIn" data-wow-delay="0.1s">
            <div class="row gx-0 d-none d-lg-flex">
                <div class="col-lg-7 px-5 text-start">
                    <div class="h-100 d-inline-flex align-items-center py-3 me-3">
                        <a class="text-body px-2" href="tel:+0123456789"><i class="fa fa-phone-alt text-primary me-2"></i>+1 (919) 597-0020</a>
                        <a class="text-body px-2" href="mailto:info@example.com"><i class="fa fa-envelope-open text-primary me-2"></i>abraham@abranova.com</a>
                    </div>
                </div>
                <div class="col-lg-5 px-5 text-end">
                    <!-- <div class="h-100 d-inline-flex align-items-center py-3 me-2">
                        <a class="text-body px-2" href="">Terms</a>
                        <a class="text-body px-2" href="">Privacy</a>
                    </div> -->
                    <div class="h-100 d-inline-flex align-items-center"> 
                        <a class="btn btn-sm-square btn-outline-body me-1" href="https://twitter.com/Abranova_Real" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-sm-square btn-outline-body me-1" href="https://m.facebook.com/people/Abraham-Nghwani/100008004229281/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-sm-square btn-outline-body me-1" href="https://www.youtube.com/channel/UCNKfi3iST64Y8Pafpwx2Kfg" target="_blank"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-sm-square btn-outline-body me-0" href="https://www.linkedin.com/in/abranova/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    </div> 
                </div>
            </div>
        </div>
        <!-- Topbar End -->
    
    
        <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
            <a href="index.html" class="navbar-brand ms-4 ms-lg-0">
                <img class="me-3" src="img/icons/logo.png" style="max-width: 150px; max-height: 150px;" alt="Icon">
            </a>
            <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" class="nav-item nav-link active" style="font-size: 14px;">Home</a>  
                    <a href="summary.html" class="nav-link nav-link" style="font-size: 14px;">Project</a>
                    <a href="location.html" class="nav-item nav-link" style="font-size: 14px;">Location</a> 
                    <a href="gallery.html" class="nav-item nav-link" style="font-size: 14px;">Gallery</a> 
                    <a href="contact.html" class="nav-item nav-link" style="font-size: 14px;">Contact</a>
                </div> 
                <a href="https://drive.google.com/drive/folders/1YAT0iEScW9bE8_EBcKMN3_qyS3QkkRhH?usp=sharing" class="btn btn-primary py-2 px-4 d-none d-lg-block" target="_blank"><i class="fas fa-folder"></i> Project Resources</a>
            </div>
        </nav>
        <!-- Navbar End -->
    
        `;
    }
}


customElements.define('header-component', Header);