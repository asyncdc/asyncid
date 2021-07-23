import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-services-details-page',
    templateUrl: './services-details-page.component.html',
    styleUrls: ['./services-details-page.component.scss']
})
export class ServicesDetailsPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Services Details');
    }

    ngOnInit(): void {
    }

    pageTitle = [
        {
            pageTitle: `Naxai Identity Cloud`
        }
    ]
    servicesDetailsContent = [
        {
            title: `Full-featured IGA with a Cloud Native Architecture`,
            paragraphList: [
                {
                    paragraph: `Identity Cloud is the leading Software-as-a-Service (SaaS) identity governance and administration solution on the market  providing comprehensive IGA capabilities. Delivering IGA as a cloud-based solution provides efficiency and security benefits that immediately provide value.`
                },
                {
                    paragraph: `Identity Cloud meets the security, compliance, and efficiency needs of business leaders, removing cost and uncertainty from managing identities and access. `
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