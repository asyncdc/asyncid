import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-why-choose-us',
    templateUrl: './why-choose-us.component.html',
    styleUrls: ['./why-choose-us.component.scss']
})
export class WhyChooseUsComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    whyChooseUsImage = [
        {
            img: `assets/img/why-choose-us.jpg`
        }
    ]
    whyChooseUsContent = [
        {
            subTitle: `WHY CHOOSE US`,
            title: `We Different From Others Should Choose Us`,
            featuresList: [
                {
                    icon: `flaticon-computer`,
                    title: `Scalable cloud environment`,
                    paragraph: `Three-tier deployment environment included for Integration, Staging and Production ,Unlimited number of connected systems, Unlimited data storage and unlimited traffic `
                },
                {
                    icon: `flaticon-call-center-agent`,
                    title: `Continuous performance monitoring and enhancement `,
                    paragraph: `Continuous reporting, health check, and log handling.Ongoing automated deployment of releases and patches. Flexible upgrade windows that fit your business needs `
                },
                {
                    icon: `flaticon-hacker`,
                    title: `High-availability and business continuity`,
                    paragraph: `High-availability service with 99.9% availability,Service continuity management, Disaster recovery and backup services `
                }
            ]
        }
    ]

}