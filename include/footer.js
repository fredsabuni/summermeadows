class Footer extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){

        this.innerHTML =  ` 

        <!-- Footer Start -->
        <div class="container-fluid bg-dark text-body footer mt-5 pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
        <div class="container py-5">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4" style="font-family: 'Montserrat' sans-serif;">Address</h4>
                    <p class="mb-2"><i class="fa fa-map-marker-alt text-primary me-3"></i>Abranova Real Estate, LLC. <br/> 16 West Martin St, Suite 301<br/> Raleigh, NC 27601</p>
                    <p class="mb-2"><i class="fa fa-phone-alt text-primary me-3"></i>+1 (919) 597-0020</p>
                    <p class="mb-2"><i class="fa fa-envelope text-primary me-3"></i>abraham@abranova.com</p>
                    <div class="d-flex pt-2">
                        <a class="btn btn-square btn-outline-body me-1" href="https://twitter.com/Abranova_Real" target="_blank"><i class="fab fa-twitter"></i></a>
                        <a class="btn btn-square btn-outline-body me-1" href="https://m.facebook.com/people/Abraham-Nghwani/100008004229281/" target="_blank"><i class="fab fa-facebook-f"></i></a>
                        <a class="btn btn-square btn-outline-body me-1" href="https://www.youtube.com/channel/UCNKfi3iST64Y8Pafpwx2Kfg" target="_blank"><i class="fab fa-youtube"></i></a>
                        <a class="btn btn-square btn-outline-body me-0" href="https://www.linkedin.com/in/abranova/" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4" style="font-family: 'Montserrat' sans-serif;">Nova Summer Meadows</h4>  
                    <div class="dropdown">
                        <a class="btn btn-link dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">Valuation</a> 
                        <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <li><a class="dropdown-item" href="./assets/S&U Nova 2680 Project Value.pdf" download="S&UNova2680ProjectValue.pdf" target="_blank">Independent Valuation</a></li>
                        <li><a class="dropdown-item" href="./assets/RKW- Lease up Budget Nova RTP 2680.xlsm" download="BudgetNovaRTP2680.xlsm" target="_blank">Property Management Underwriting</a></li>
                        <li><a class="dropdown-item" href="./assets/AppraisalReport.pdf" download="AppraisalReport.pdf" target="_blank">Appraisal Report</a></li>  
                        <li><a class="dropdown-item" href="./assets/CostToComplete.pdf" download="CostToComplete.pdf" target="_blank">Cost To Complete</a></li>  
                        </ul>
                    </div> 
                </div>
                <div class="col-lg-3 col-md-6">
                    <h3 class="text-light mb-4" style="font-family: 'Montserrat' sans-serif;">Quick Links</h3>  
                    <a class="btn btn-link" href="./summary.html">Project</a>
                    <a class="btn btn-link" href="./gallery.html">Gallery</a>
                    <a class="btn btn-link" href="./location.html">Location</a> 
                    <a class="btn btn-link" href="./contact.html">Contact</a> 
                </div>
                <div class="col-lg-3 col-md-6">
                    <h4 class="text-light mb-4" style="font-family: 'Montserrat' sans-serif;">Newsletter</h4>
                    <p>Subscribe to our newsletter</p>
                    <div class="position-relative mx-auto" style="max-width: 400px;"> 
                        <script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
                        <script>
                        hbspt.forms.create({
                            region: "na1",
                            portalId: "45057484",
                            formId: "8a71a093-cd95-4390-a7d4-4ebd45936517"
                        });
                        </script>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid copyright">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a href="#">Nova at Summer Meadows</a>, All Right Reserved.
                    </div>
                    <div class="col-md-6 text-center text-md-end">
                        Designed By <a href="https://abranova.com">Abranova Creatives</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <!-- Footer End --> 

        `;
    }
}

customElements.define("footer-element", Footer);