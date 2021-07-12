import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ProjectDetails from './ProjectDetails';
import homePic from '../../image/home.png';
import shopPic from '../../image/shopImg.png';
import adminPic from '../../image/adminPage1.png';
import GhorAdminPic from '../../image/adminPage.png';
import GhorHomePic from '../../image/homePage.png';
import GhorAddProductPic from '../../image/addProduct.png';
import riderHomePic from '../../image/riderHome.png';
import riderDetails from '../../image/riderDetails.png';
import riderDestinations from '../../image/riderDestination.png'
import footballHome from '../../image/footballHome.png'
import footballClub from '../../image/footballClub.png'
import footballDetails from '../../image/footballDetails.png'
const Portfolio = () => {
    const PortfolioData = [
        {
            projectName: 'Sneaky Care',
            image1: homePic,
            image2: shopPic,
            image3: adminPic,
            description: "This website is basically made for rural woman. Village girls and woman can't buy sanitary napkin or pad easily. So the can buy pad and take appointment from great gynecologist of bangladesh. In the home page you can see main home banner,motive section,services,brands section, doctors,testimonial,contact,footer.",
            liveLink: 'https://sneaky-care.web.app/',
            githubLink: 'https://github.com/AbulBashar38/sneaky-care',
            features: ['Form services option you can take appointment and can buy sanitary napkin and you can also get offers but offer is currently unavailable.', 'if you click buy btn of any product in shop then you can see checkout page and confirm your order.', "You can't go any pages without authenticate so you have to authenticate with google", "In the admin panel for general users the can get access of Dashboard, Shop, Appointment, and Review", "Responsive and Animated Sidebar", "But if you are an Admin then you can see all Option.", "An admin can remove something,can add add something like services, product, offer, and can update the current state of order.", 'Its an full responsive website'],
            technology: ['React JS', 'React Router', 'html5', 'css3', 'bootstrap', 'javascript es6', 'node', 'mongodb']
        },
        {
            projectName: 'Ghor Bazar',
            image1: GhorHomePic,
            image2: GhorAdminPic,
            image3: GhorAddProductPic,
            description: "This website is basically a daily market. All kinds of products are shown on the home page of the website. Clicking on the buy now button of the product you want to buy will ask the buyer to log in and then take you to the check out page. There will be a description of the product then click on the check out button to confirm the order and take you to the next page. There you will see a list of what products the buyer has ordered. You can cancel the order from there. In the admin panel, you can delete products from Manage Products, add new products from Ad Products.",
            liveLink: 'https://ghor-bazar.web.app/',
            githubLink: 'https://github.com/AbulBashar38/ghor-bazar-client',
            features: ['All product Show in Home page','Firebase Google Authentication for every page','Before order can go in the check out page','user can see orders and can cancel order.','Admin can delete and add product from admin panel.','Data loading spinner'],
            technology: ['React JS', 'React Router', 'html5', 'css3', 'material ui', 'javascript es6', 'node', 'mongodb']
        },
        {
            projectName: 'Sohoj Rider',
            image1: riderHomePic,
            image2: riderDestinations,
            image3: riderDetails,
            description: "The name of this web site is 'SOHOJ RIDERS' that means an easy transport system. In the home page of the web side you can see some transport ride named BIKE,TRAIN,CAR,BUS. If you click any button of the ride you will see that web side wants to verified you. For that you have to create an account account. if you want to create your account by your google account it is possible in this web site. For that just click the 'login with Google' button. After verified you can choose you destination. Thank you...",
            liveLink: 'https://sohoj-riders.web.app/',
            githubLink: 'https://github.com/AbulBashar38/sohoj-rider-client',
            features: ['Bike, Train, Car, Bus 4 option in the home page.','Click any one and redirect to login page which is created by React router.','Create new user, login existence user and login by google option are available. All are developed by Firebase','Select destination place and date.','show hiring details'],
            technology: ['React JS', 'React Router', 'html5', 'css3', 'material ui', 'javascript es6']
        },
        {
            projectName: 'Football Club Informer',
            image1: footballHome,
            image2: footballClub,
            image3: footballDetails,
            description: "This react project is about some football club. You can know about all information of some Europe football club from this project. when you click button you can see a banner first fo the club. This will changes dynamically and this project is a responsive so you can use it on your mobile comfortable.",
            liveLink: 'https://frosty-poincare-bfe3fe.netlify.app/',
            githubLink: 'https://github.com/AbulBashar38/football-club-informar',
            features: ['Showing All Club name and logo in a card element of React JS.','Showing All details of an club by clicking Explore button.','Use API for showing Data.','Use Fontawesome.'],
            technology: ['React JS', 'API', 'html5', 'css3', 'Bootstrap', 'javascript es6']
        }
    ]
    return (
        <main>
            <div className="row">
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-8">
                    <p className='mt-5'><span className='badge bg-secondary'>PORTFOLIO</span></p>
                    <h4>My Portfolio</h4>
                    <div>
                        {
                            PortfolioData.map(portfolio => <ProjectDetails data={portfolio}></ProjectDetails>)
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Portfolio;