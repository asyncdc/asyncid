import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-homeone-banner',
    templateUrl: './homeone-banner.component.html',
    styleUrls: ['./homeone-banner.component.scss']
})
export class HomeoneBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    mainBannerContent = [
        {
            bgImage: `assets/img/main-banner1.jpg`,
            title: `We Protect The World's Most Sensitive Data`,
            paragraph: `Naxai provides solution that adapts to your organization out of the box, while keeping you secure and compliant. .`,
            buttonBox: [
                {
                    buttonText: `GET STARTED`,
                    buttonIcon: `bx bxs-chevron-right`,
                    buttonLink: `contact`
                },
                {
                    buttonText: `SCHEDULE A DEMO`,
                    buttonIcon: `bx bxs-chevron-right`,
                    buttonLink: `contact`
                }
            ]
        }
    ]

}