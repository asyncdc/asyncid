import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-identity-cloud-page',
    templateUrl: './cloud-identity-page.component.html',
    styleUrls: ['./cloud-identity-page.component.scss']
})
export class IdentityCloudPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Services Details');
    }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            pageTitle: `Naxai Identity`
        }
    ]
    servicesDetailsContent = [
        {
            title: `Empower business agility while staying in control of identities and access`,
            paragraphList: [
                {
                    paragraph: `Identity enables and secures digital identities for all users, applications, and data. It allows your business to onboard applications and provide automated access while managing potential security and compliance risks.`
                },
                {
                    paragraph: `Identity helps you to define and decide who has access to what, when, and why. `
                }
            ]
        }
    ]
    servicesDetailsVideo = [
        {
            buttonText: `CONTACT US`,
            buttonLink: `contact`
        }
    ]

}