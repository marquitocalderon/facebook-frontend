import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { InicioComponent } from './inicio/inicio.component';
import { StatusComponent } from './status/status.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                component: InicioComponent,
                title: 'Facebook - Inicia sesión o regístrate',
            }
            ,
            {
                path: 'error',
                component: StatusComponent,
                title: 'Error',
            }
        ]
       
        
    },



];
