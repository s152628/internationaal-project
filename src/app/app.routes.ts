import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AgendaComponent } from './agenda/agenda.component';
import { HomeComponent } from './home/home.component';
import { AfspraakComponent } from './afspraak/afspraak.component';
import { AfspraakGuideComponent } from './afspraak-guide/afspraak-guide.component';
import { RegistratieComponent } from './registratie/registratie.component';
export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'agenda', component: AgendaComponent },
    { path: 'afspraak', component: AfspraakComponent },
    { path: 'afspraak-guide', component: AfspraakGuideComponent },
    { path: 'registratie', component: RegistratieComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full'},
];
