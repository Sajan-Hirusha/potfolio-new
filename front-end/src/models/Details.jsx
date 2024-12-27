import taildwin from '../assets/images/tailwindCsss.png'
import mysql from '../assets/images/mySql.png'
import java from '../assets/images/java.png'
import node from '../assets/images/node.png'

const Details = {
    name: 'Sabari Holdings',
    email: 'info@sabariholdings.com',
    mobile: '+94 77 551 7474',
    social: {
        faceBook: 'https://www.facebook.com/masimpex1?mibextid=ZbWKwL'
    },
    sliderTopicsPart1 : [
        "Hi, I’m ",
        "Discover ",
        "Discover "
    ],
    sliderTopicsPart2 : [
        "Sajan Hirusha",
        "My Projects",
        "My Skills"
    ],
    sliderPara : [
        "Hello, I am Sajan Hirusha from Sri Lanka. I am a professional Web designer and\n" +
        "developer with 2 years of experience. My main target is to provide a good service to my buyers.\n" +
        "Please message me with your requests.",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer\n" +
        "took a galley of type",
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem\n" +
        "Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer\n" +
        "took a galley of type",
    ],
    sliderButton1 : [
       "Contact Me",
        "View Profile",
        "View Profile",
    ],
    sliderButton2 : [
        "View Profile",
        "",
        "",
    ],
    about: [
        {
            title:"Visit My Portfolio And Hire Me",
            para: "Hello, I am Sajan Hirusha from Sri Lanka. I am a professional Web designer and developer with 2 years " +
                "of experience. My main target is to provide a good service to my buyers. Please message me with your requests.",

        }


    ],
    skills: [
        {
            coverImageLink:mysql ,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },{
            coverImageLink:node ,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },{
            coverImageLink:java ,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },{
            coverImageLink:taildwin,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        }
    ],
    contact: [
        {
            backgroundImage: 'images/contactUsBackground.jpg',
            heading: 'Contact Us',
            para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        }
    ],
    footer: [
        {
            heading: 'Get In Touch',
            para1: 'sabariholdings, No: 11-1/11, gold plaza complex, Sea St, Colombo 01100',
            para2: 'info@sabariholdings.com',
            para3: '+94 77 551 7474',
            para4: '',
            para5: '',
            path: {
                path1: "https://maps.app.goo.gl/1JhvN1jASiD2XCDt5",
                path2: "mailto:info@sabariholdings.com",
                path3: "tel:+94 77 551 7474"
            },
            image: {
                url1: 'images/locationIcon.png',
                url2: 'images/emailIcon.png',
                url3: 'images/phoneIcon.png'
            }
        },
        {
            heading: 'Categories',
            para1: 'Tea & Coffee',
            para2: 'Vegetables',
            para3: 'Rice & Grains',
            para4: 'Spices',
            para5: 'Nuts & Fruits',
            image: {}
        },
        {
            heading: 'Services',
            para1: 'Global Shipping',
            para2: 'Customs Clearance',
            para3: 'International Trade',
            para4: 'Logistics Solutions',
            para5: 'FAQs',
            image: {}
        },
        {
            heading: 'Useful links',
            para1: 'Store',
            para2: 'About Us',
            para3: 'Contact Us',
            para4: '',
            para5: '',
            path: {
                path1: "/shop",
                path2: "/about",
                path3: "/contact",
                path4: "/"
            },
            image: {
                url4: 'blackwhitelogo.png'
            }
        }
    ],
};

export default Details;
