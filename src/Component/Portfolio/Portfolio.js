import React from "react";
import GhorAddProductPic from "../../image/addProduct.png";
import GhorAdminPic from "../../image/adminPage.png";
import adminPic from "../../image/adminPage1.png";
import footballClub from "../../image/footballClub.png";
import footballDetails from "../../image/footballDetails.png";
import footballHome from "../../image/footballHome.png";
import homePic from "../../image/home.png";
import GhorHomePic from "../../image/homePage.png";
import profile from "../../image/profile.png";
import riderDestinations from "../../image/riderDestination.png";
import riderDetails from "../../image/riderDetails.png";
import riderHomePic from "../../image/riderHome.png";
import schedule1 from "../../image/schedule1.png";
import schedule2 from "../../image/schedule2.png";
import schedule3 from "../../image/schedule3.png";
import seaHome from "../../image/seaHome.png";
import seaTeam from "../../image/seaTeam.png";
import shopPic from "../../image/shopImg.png";
import ProjectDetails from "./ProjectDetails";
const Portfolio = () => {
  const PortfolioData = [
    {
      projectName: "Seaclub",
      image1: seaHome,
      image2: profile,
      image3: seaTeam,
      description:
        "As a Frontend Team Leader at Seaclub®, I had the privilege of leading a talented team in building a revolutionary platform that is transforming the way Web3 companies partner with each other. Our platform, built using Next.js, Redux, Redux Async Thunk, RTK Query, and Tailwind CSS, provides a decentralized, non-custodial, and message-encrypted environment for outsourcing services.",
      liveLink: "https://seaclub.io/",
      githubLink: "",
      features: [
        `Engaging Landing Page: An immersive landing page that encapsulates the essence of our company.`,
        "Streamlined Onboarding: A seamless onboarding process for both service providers and clients.",
        "Personalized Profile Pages: Customizable profile pages for service providers and clients to showcase their unique offerings.",
        "Project Posting: A platform for service providers and clients to post and manage their projects effectively.",
        "Interactive Chat System: A robust chat system facilitating clear and efficient communication.",
        "Project Display: A comprehensive display of all projects from service providers and clients.",
      ],
      technology: [
        "Next.js",
        "Redux Toolkit",
        "Redux Async Thunk",
        "RTK Query",
        "Framer Motion",
        "Tailwind CSS",
        "html5",
        "css3",
        "javascript es6",
      ],
    },
    {
      projectName: "Schedule Buddy",
      image1: schedule1,
      image2: schedule2,
      image3: schedule3,
      description:
        "Schedule Buddy is a booking platform that allows users to schedule appointments with each other, manage their bookings, and track appointment requests. Built with React, Redux, and Firebase, the platform ensures a seamless and responsive user experience.",
      liveLink: "https://schedule-buddy-app.web.app/sign-up",
      githubLink: "https://github.com/AbulBashar38/schedule-buddy",
      features: [
        `User Authentication: Secure login and registration using Firebase Auth.`,
        "User Directory & Search: View all registered users and search by name or email.",
        "Booking System: Users can request and manage appointments with others.",
        "Personal Booking Requests: View, cancel, and filter bookings by status, upcoming, and past appointments.",
        "Incoming Booking Requests: Track and manage appointment requests received from other users.",
      ],
      technology: [
        "React.js",
        "Tailwind CSS",
        "DaisyUI",
        "Redux Toolkit",
        "RTK Query",
        "Material UI",
        "Firebase (Auth & Storage)",
        "Docker",
      ],
    },
    {
      projectName: "Sneaky Care",
      image1: homePic,
      image2: shopPic,
      image3: adminPic,
      description:
        "This website is basically made for rural woman. Village girls and woman can't buy sanitary napkin or pad easily. So the can buy pad and take appointment from great gynecologist of bangladesh. In the home page you can see main home banner,motive section,services,brands section, doctors,testimonial,contact,footer.",
      liveLink: "https://sneaky-care.web.app/",
      githubLink: "https://github.com/AbulBashar38/sneaky-care",
      features: [
        "Form services option you can take appointment and can buy sanitary napkin and you can also get offers but offer is currently unavailable.",
        "if you click buy btn of any product in shop then you can see checkout page and confirm your order.",
        "You can't go any pages without authenticate so you have to authenticate with google",
        "In the admin panel for general users the can get access of Dashboard, Shop, Appointment, and Review",
        "Responsive and Animated Sidebar",
        "But if you are an Admin then you can see all Option.",
        "An admin can remove something,can add add something like services, product, offer, and can update the current state of order.",
        "Its an full responsive website",
      ],
      technology: [
        "React JS",
        "React Router",
        "html5",
        "css3",
        "bootstrap",
        "javascript es6",
        "node",
        "mongodb",
      ],
    },
    {
      projectName: "Ghor Bazar",
      image1: GhorHomePic,
      image2: GhorAdminPic,
      image3: GhorAddProductPic,
      description:
        "This website is basically a daily market. All kinds of products are shown on the home page of the website. Clicking on the buy now button of the product you want to buy will ask the buyer to log in and then take you to the check out page. There will be a description of the product then click on the check out button to confirm the order and take you to the next page. There you will see a list of what products the buyer has ordered. You can cancel the order from there. In the admin panel, you can delete products from Manage Products, add new products from Ad Products.",
      liveLink: "https://ghor-bazar.web.app/",
      githubLink: "https://github.com/AbulBashar38/ghor-bazar-client",
      features: [
        "All product Show in Home page",
        "Firebase Google Authentication for every page",
        "Before order can go in the check out page",
        "user can see orders and can cancel order.",
        "Admin can delete and add product from admin panel.",
        "Data loading spinner",
      ],
      technology: [
        "React JS",
        "React Router",
        "html5",
        "css3",
        "material ui",
        "javascript es6",
        "node",
        "mongodb",
      ],
    },
    {
      projectName: "Sohoj Rider",
      image1: riderHomePic,
      image2: riderDestinations,
      image3: riderDetails,
      description:
        "The name of this web site is 'SOHOJ RIDERS' that means an easy transport system. In the home page of the web side you can see some transport ride named BIKE,TRAIN,CAR,BUS. If you click any button of the ride you will see that web side wants to verified you. For that you have to create an account account. if you want to create your account by your google account it is possible in this web site. For that just click the 'login with Google' button. After verified you can choose you destination. Thank you...",
      liveLink: "https://sohoj-riders.web.app/",
      githubLink: "https://github.com/AbulBashar38/sohoj-rider-client",
      features: [
        "Bike, Train, Car, Bus 4 option in the home page.",
        "Click any one and redirect to login page which is created by React router.",
        "Create new user, login existence user and login by google option are available. All are developed by Firebase",
        "Select destination place and date.",
        "show hiring details",
      ],
      technology: [
        "React JS",
        "React Router",
        "html5",
        "css3",
        "material ui",
        "javascript es6",
      ],
    },
    {
      projectName: "Football Club Informer",
      image1: footballHome,
      image2: footballClub,
      image3: footballDetails,
      description:
        "This react project is about some football club. You can know about all information of some Europe football club from this project. when you click button you can see a banner first fo the club. This will changes dynamically and this project is a responsive so you can use it on your mobile comfortable.",
      liveLink: "https://frosty-poincare-bfe3fe.netlify.app/",
      githubLink: "https://github.com/AbulBashar38/football-club-informar",
      features: [
        "Showing All Club name and logo in a card element of React JS.",
        "Showing All details of an club by clicking Explore button.",
        "Use API for showing Data.",
        "Use Fontawesome.",
      ],
      technology: [
        "React JS",
        "API",
        "html5",
        "css3",
        "Bootstrap",
        "javascript es6",
      ],
    },
  ];
  return (
    <main className="container-fluid" id="portfolio">
      <div className="main-part" style={{ height: "auto" }}>
        <div
          data-aos="fade-right"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <p className="mt-5">
            <span className="badge bg-secondary">PORTFOLIO</span>
          </p>
          <h4>My Portfolio</h4>
          <div>
            {PortfolioData.map((portfolio) => (
              <ProjectDetails data={portfolio}></ProjectDetails>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Portfolio;
