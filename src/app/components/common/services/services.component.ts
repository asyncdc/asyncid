import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            subTitle: `OUR SERVICES AREA`,
            title: `We Offer Professional Security Solutions For Business`,
            paragraph: `Full-featured IGA with a Cloud Native Architecture.`
        }
    ]
    singleServicesBox = [
        {
            icon: `flaticon-bank`,
            title: `Comprehensive and responsive support`,
            paragraph: `Critical incident response times are guaranteed within maximum 1 hour. Critical incident updates every 30 minutes `,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-manufacturing`,
            title: `Access to support and training resources `,
            paragraph: `Access to Omada Service Desk.Access to Omada’s online community and knowledge sharing HUB `,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-oil-1`,
            title: `Access to dedicated Customer Success Team`,
            paragraph: `Dedicated Customer Success team.Application of best practice project execution. Standardized packages for improved time-to-value `,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        // {
        //     icon: `flaticon-antivirus`,
        //     title: `Network Assessment`,
        //     paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
        //     detailsLink: `services-details`,
        //     btnText: `READ MORE`
        // },
        // {
        //     icon: `flaticon-keywords`,
        //     title: `Host & End Point`,
        //     paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
        //     detailsLink: `services-details`,
        //     btnText: `READ MORE`
        // },
        // {
        //     icon: `flaticon-protection`,
        //     title: `Cloud & Virtualization`,
        //     paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
        //     detailsLink: `services-details`,
        //     btnText: `READ MORE`
        // }
    ]

    servicesSlides: OwlOptions = {
        loop: true,
		nav: false,
		dots: true,
		margin: 30,
        autoplay: true,
        autoplayTimeout: 4000,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 1
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			}
		}
    }

}