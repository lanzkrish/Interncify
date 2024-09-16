// Home Section==================================================================================================================================

let home = `<div class="container"> 
<div class="d-flex p-3 flex-column justify-content-center align-items-center text-center " style="height: 100vh;">
    <div class="heroheader ">
        <h2 >Unlock Your Future with <span class=' text-primary ' > Real-World Experience </span></h2>
    </div>
    <span class="mb-3">Bridge the gap between Education and the workforce. Discover oppertunities that shape your career</span>
    <div class="heroheaderliks">
        <a href="#cta"  class="btn btn-primary me-4">Get Started</a>
        <a href="./contact.html" target=_blank class="text-decoration-none">Learn More &nbsp; <i class="fa fa-long-arrow-right" ></i></a>
    </div>
</div>
</div>`;
document.getElementById("home").innerHTML = home;
// Why Interncify   ===================================================================================================================================




// Feature Section   ==================================================================================================================================

let features = [
    {
        featureHead: "Gain the Edge",
        featurebody: "Training programs tailored to your passion. Build skills, grow your network, and unlock doors to your dream career.",
    },
    {
        featureHead: "Real-World Experience",
        featurebody: "Hands-on projects that go beyond the classroom. Prepare for the challenges of tomorrow with every opportunity.",
    },
    {
        featureHead: "Tailored to you",
        featurebody:
            "Programs that match your ambitions, weather you're in tech, business, design, or the arts.",
    },
    {
        featureHead: "White Papers",
        featurebody:
            "White Papers amplifies credibility, fosters breakthroughs, sparks innovation, and unlocks limitless opportunities for growth and recognition.",
    },
];

let feature = "";
for (let i = 0; i < features.length; i++) {
    feature += `
<div class="featurecard card rounded-4">
    <div class="row">
        <div class="col-12">
            
        </div>
        <div class="col-12">
            <div class="feature-card-text">
                <div class="featureheading">
                    <span class="fw-bold">${features[i].featureHead}</span>
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
            <p class="text-capitalise" style="font-size: 35px; font-weight: 600;">Key Benifits</p>
            <p>Discover the benefits of our training program and kickstart your career in the tech industry</p>
        </div>
    </div>
</div>
<div class="featurecards" id="featurecards"> 
${feature}
</div>
</div>

</div>
<div class="section-key-images" style="height: 70vh; overflow: hidden;">
<img class="img1" src="./assets/images/img6.jpg" width="300px" alt="">
<img class="img2" src="./assets/images/img4.jpg" height="300px" alt="">
</div>`;

document.getElementById("feature").innerHTML = featuresection;

// About Section  ==================================================================================================================================

about = ` <div class="container">
<div class="d-flex p-3 flex-column justify-content-center align-items-center text-center " style="height: 60vh;">
    <div class="hero-aboutheader mb-3 ">
        <h1 class="fw-bold" >Welcome to Interncify - Your Gateway to Success</h1>
    </div>
    <span class="mb-3 ">Interncify offers opportunities for research paper publishing and skill development to college students and recent graduates, providing them with valuable hands-on experience in the technical field. Our carefully curated programs are designed to help you enhance your skills, gain exposure to research, and thrive in the ever-evolving world of technology. Join us on this journey towards a brighter future!</span>
    <div class="heroheaderliks">
        <a href="#cta" class="btn btn-primary me-4">Learn More</a>
    </div>
</div>
</div>`;
document.getElementById("about").innerHTML = about;

// FAQ Section  ==================================================================================================================================

let faqs = [
    {
        faqQns: "What is Interncify?",
        faqAns:
            "Interncify is a software company that provides training to college students and recent graduates to help them gain experience and knowledge in the technical field.",
    },
    {
        faqQns: "Who can apply for training at Interncify?",
        faqAns:
            "College students and recent graduates who are looking to gain practical experience in the technical field can apply for training at Interncify.",
    },
    {
        faqQns: "Are training at Internchify paid?",
        faqAns:
            "Yes, training at Interncify can be paid, depending on the type of training program offered. ",
    },
    {
        faqQns: "How long do Interncify training last?",
        faqAns:
            "The duration of Interncify training varies depending on the specific program. Typically, training last for a few months.",
    },
    {
        faqQns: "How can I apply for an training at Interncify?",
        faqAns:
            "To apply for a training at Interncify, you can visit our website and fill out the online application form. Make sure to submit all required documents and information.",
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
        <a href="contact.html" class="btn btn-light text-primary fw-bold w-100">Ask Your Question</a>
        </div>
    </div>
</div>
`;
document.getElementById("faqs").innerHTML = faqsectionstr;

