// Home Section==================================================================================================================================

home = `<div class="container"> 
<div class="d-flex p-3 flex-column justify-content-center align-items-center text-center " style="height: 100vh;">
    <div class="heroheader mb-3 ">
        <h1 >Unlock Your Potential with <span class='text-uppercase text-primary'> Interncify </span></h1>
    </div>
    <span class="mb-3">Empowering Future Tech Leaders</span>
    <div class="heroheaderliks">
        <a href="https://forms.gle/ufnkk7KLsMSxkQZc6" target=_blank class="btn btn-primary me-4">Explore Internships</a>
        <a href="https://forms.gle/ufnkk7KLsMSxkQZc6" target=_blank class="text-decoration-none">Learn More &nbsp; <i class="fa fa-long-arrow-right" ></i></a>
    </div>
</div>
</div>`;
document.getElementById("home").innerHTML = home;

// Feature Section   ==================================================================================================================================

let features = [
    {
        featureHead: "Hands-on Experience",
        featurebody: "Gain practical knowledge through real-world projects",
    },
    {
        featureHead: "Mentorship Program",
        featurebody: "Receive guidance and support from experienced professionals",
    },
    {
        featureHead: "Skill Development",
        featurebody:
            "Enhance your technical skills and expertise in a supportive environment",
    },
    {
        featureHead: "Networking Opportunities",
        featurebody:
            "Connect with industry experts and build valuable relationships for your future career",
    },
];

let feature = "";
for (let i = 0; i < features.length; i++) {
    feature += `
<div class="featurecard">
    <div class="row">
        <div class="col-1">
            <svg viewBox="0 0 1024 1024" class="featuresIcon" style="color: aliceblue;">
                <path d="M809.003 291.328l-297.003 171.819-297.003-171.819 275.456-157.397c4.779-2.731 9.899-4.48 15.147-5.333 9.301-1.451 18.987 0.128 27.904 5.291zM491.776 979.669c6.016 3.243 12.928 5.077 20.224 5.077 7.381 0 14.336-1.877 20.395-5.163 15.189-2.475 29.909-7.68 43.392-15.36l298.709-170.709c26.368-15.232 45.269-38.315 55.424-64.597 5.675-14.592 8.619-30.165 8.747-46.251v-341.333c0-20.395-4.821-39.723-13.397-56.917-0.939-3.029-2.219-5.973-3.883-8.832-1.963-3.371-4.267-6.357-6.912-8.96-1.323-1.835-2.731-3.669-4.139-5.419-9.813-12.203-21.845-22.528-35.456-30.507l-299.051-170.88c-26.027-15.019-55.467-19.84-83.328-15.531-15.531 2.432-30.507 7.637-44.288 15.488l-298.709 170.709c-16.341 9.429-29.824 21.888-40.149 36.267-2.56 2.56-4.864 5.547-6.784 8.832-1.664 2.901-2.987 5.888-3.925 8.96-1.707 3.456-3.243 6.955-4.608 10.496-5.632 14.635-8.576 30.208-8.704 45.995v341.632c0.043 30.293 10.581 58.197 28.331 80.128 9.813 12.203 21.845 22.528 35.456 30.507l299.051 170.88c13.824 7.979 28.587 13.099 43.605 15.445zM469.333 537.045v340.949l-277.12-158.336c-4.736-2.773-8.832-6.315-12.16-10.411-5.931-7.381-9.387-16.512-9.387-26.581v-318.379zM554.667 877.995v-340.949l298.667-172.757v318.379c-0.043 5.163-1.067 10.496-2.987 15.445-3.413 8.789-9.6 16.384-18.176 21.333z"></path>
              </svg>
        </div>
        <div class="col-10">
            <div class="feature-card-text">
                <div class="featureheading">
                    <span class="fw-bold"> ${features[i].featureHead}</span>
                </div>
                <div class="featurebody">
                    <span>${features[i].featurebody}</span>
                </div>
            </div>
        </div>
    </div> 
</div>`;
}

featuresection = `<div class="container justify-content-center align-items-center">
<div class="row">
    <div class="col-lg-12 col-sm-12 p-3">
        <div class="d-flex flex-column justify-content-center text-center ">
            <p class="text-uppercase" style="font-size: 35px; font-weight: 600;">Features</p>
            <p>Discover the benefits of our internship program and kickstart your career in the tech industry</p>
        </div>
    </div>
</div>
<div class="featurecards" id="featurecards"> 
${feature}
</div>
</div>
</div>`;

document.getElementById("feature").innerHTML = featuresection;

// About Section  ==================================================================================================================================

about = ` <div class="container">
<div class="d-flex p-3 flex-column justify-content-center align-items-center text-center " style="height: 50vh;">
    <div class="hero-aboutheader mb-3 ">
        <h1 class="fw-bold" >Welcome to Interncify - Your Gateway to Success</h1>
    </div>
    <span class="mb-3 ">Interncify offers unpaid internships to college students and recent graduates, providing them with valuable hands-on experience in the technical field. Our carefully curated programs are designed to help you grow, learn, and thrive in the ever-evolving world of technology. Join us on this journey towards a brighter future!</span>
    <div class="heroheaderliks">
        <a href="https://forms.gle/ufnkk7KLsMSxkQZc6" target=_blank class="btn btn-primary me-4">Learn More</a>
    </div>
</div>
</div>`;
document.getElementById("about").innerHTML = about;

// FAQ Section  ==================================================================================================================================

let faqs = [
    {
        faqQns: "What is Interncify?",
        faqAns:
            "Interncify is a software company that provides unpaid internships to college students and recent graduates to help them gain experience and knowledge in the technical field.",
    },
    {
        faqQns: "Who can apply for internships at Interncify?",
        faqAns:
            "College students and recent graduates who are looking to gain practical experience in the technical field can apply for internships at Interncify.",
    },
    {
        faqQns: "Are Interncify internships paid?",
        faqAns:
            "No, Interncify internships are unpaid. However, they provide valuable hands-on experience and learning opportunities.",
    },
    {
        faqQns: "How long do Interncify internships last?",
        faqAns:
            "The duration of Interncify internships varies depending on the specific program. Typically, internships last for a few months.",
    },
    {
        faqQns: "How can I apply for an internship at Interncify?",
        faqAns:
            "To apply for an internship at Interncify, you can visit our website and fill out the online application form. Make sure to submit all required documents and information.",
    },
];

let faqstr = ``;
for (let i = 0; i < faqs.length; i++) {
    faqstr += `
    <div class="row ">
        <div class="col-lg-11 border-bottom faqqnns">
            <span class="faqqns" style="font-size: 25px; font-weight: 500; width: 100vw;">${faqs[i].faqQns}</span>
            <p class="faqans" id="faqans">${faqs[i].faqAns}</p>
        </div>
       
    </div>
    `;
}

faqsectionstr = `
<div class="container d-flex justify-content-center align-items-center">
    <div class="row w-100 ">
            <div class="col-lg-4 col-sm-6 p-3">
                <div class="d-flex flex-column justify-content-center text-start ">
                    <p class="text-uppercase">FAQ</p>
                    <span class="faq" style="font-size: 35px; font-weight: 600;">Common questions</span>
                    <p>Here are some of the most common questions that we get.</p>
                </div>
                <!-- <p>Your Query not listed here</p>
                <a href="./404.html" target=_blank class="btn btn-light text-primary fw-bold">ASk Your Question</a> -->
            </div>
            <div class="col-lg-8 col-sm-6 p-3 ">
                <div class="d-flex flex-column justify-content-center text-start ">
                    <div class="faqqns" id="faqqns">
                        ${faqstr}
                    </div>
                </div>
            </div>
        <div class="mt-3 w-100">
        <p>Your Query not listed here ??</p>
        <a href="forms.html" class="btn btn-light text-primary fw-bold w-100">Ask Your Question</a>
        </div>
    </div>
</div>
`;
document.getElementById("faqs").innerHTML = faqsectionstr;
