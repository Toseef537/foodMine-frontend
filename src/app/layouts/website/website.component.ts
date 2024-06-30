import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from 'src/app/modules/website/pages/home/home.component';

@Component({
  selector: 'website-layout',
  standalone: true,
  imports: [CommonModule,HeaderComponent,FooterComponent,RouterOutlet,HomeComponent],
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss']
})
export class WebsiteLayoutComponent {

}
