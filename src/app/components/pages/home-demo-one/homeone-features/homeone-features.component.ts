import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-features',
    templateUrl: './homeone-features.component.html',
    styleUrls: ['./homeone-features.component.scss']
})
export class HomeoneFeaturesComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    singleFeaturesBox = [
        {
            icon: `flaticon-video-conference`,
            title: `IDENTITY CLOUD`,
            paragraph: `Identity Cloud provides an enterprise-grade, mature Software-as-a-Service offering with a full set of identity governance and access management functionality.`,
            link: `services-details`,
            linkText: `READ MORE`
        },
        {
            icon: `flaticon-call-center-agent`,
            title: `IDENTITY`,
            paragraph: `Identity is a flexible and future-proof choice that delivers scalable and configurable identity and access management processes with essential identity governance and access management capabilities.`,
            link: `services-details`,
            linkText: `READ MORE`
        },
        {
            icon: `flaticon-cyber-security`,
            title: `Efficiency and Enablement`,
            paragraph: `Enable the business through improved provisioning, seamless workflows, and optimized helpdesk capacity.`,
            link: `services-details`,
            linkText: `READ MORE`
        },
        {
            icon: `flaticon-innovation`,
            title: `UI/UX Design`,
            paragraph: `A user interface is essentially the features of a device or an application that allow a user to interact with it smoothly and intuitively.`,
            link: `services-details`,
            linkText: `READ MORE`
        }
    ]

}