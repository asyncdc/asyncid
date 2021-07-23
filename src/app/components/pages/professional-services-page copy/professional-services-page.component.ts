import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-professional-services-page',
    templateUrl: './professional-services-page.component.html',
    styleUrls: ['./professional-services-page.component.scss']
})
export class ProfessionalServicesPageComponent implements OnInit {

    constructor( private titleService: Title ) {
        this.titleService.setTitle('Naxai - Solutions Details');
    }

    ngOnInit(): void {
    }

}