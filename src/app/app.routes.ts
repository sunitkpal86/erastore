import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Services } from './components/services/services';
import { SoftwareDevelopment } from './components/software-development/software-development';
import { Careers } from './components/careers/careers';
import { Contact } from './components/contact/contact';

export const routes: Routes = [
    { path: "" , component : Home },
    { path : "about", component : About},
    { path : "services", component : Services },
    { path : "services/web" , component : SoftwareDevelopment},
    { path : "careers", component : Careers},
    { path : "contact", component : Contact}
];
