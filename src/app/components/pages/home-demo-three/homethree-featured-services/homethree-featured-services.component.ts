import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homethree-featured-services',
    templateUrl: './homethree-featured-services.component.html',
    styleUrls: ['./homethree-featured-services.component.scss']
})
export class HomethreeFeaturedServicesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle = [
        {
            subTitle: `TECHNOLOGY`,
            title: `Data Protection Technology`,
            paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
        }
    ]
    singleServicesItem = [
        {
            icon: `flaticon-security`,
            title: `Prioritization`,
            paragraph: `Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-antivirus`,
            title: `Threat Prediction`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        },
        {
            icon: `flaticon-automation`,
            title: `Automated Remediation`,
            paragraph: `Lorem ipsum dolor sit amet,  adipiscing elit, sed do eiusmod tempor incididunt ut labore. Quis ipsum suspendisse.`,
            detailsLink: `services-details`,
            btnText: `READ MORE`
        }
    ]

}