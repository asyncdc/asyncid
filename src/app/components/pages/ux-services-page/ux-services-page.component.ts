import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'ux-services-details-page',
    templateUrl: './ux-services-page.component.html',
    styleUrls: ['./ux-services-page.component.scss']
})
export class UXServicesPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Solutions Details');
    }

    ngOnInit(): void {
    }

}