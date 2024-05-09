import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StatusComponent } from './status/status.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Facebook';

  constructor(private http: HttpClient) {}

  enviarDatos(e:any) {
    e.preventDefault();
    // Obtener los valores de los campos de entrada por su ID
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const passwordInput = document.getElementById('password') as HTMLInputElement;

    const datos = {
      email: emailInput.value,
      password: passwordInput.value
    };

    // Enviar los datos utilizando HttpClient
    this.http.post<any>('http://localhost:3000/api/data', datos).subscribe(
      (response) => {
        // Manejar la respuesta del servidor aquí
        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        // Manejar errores aquí
        console.error('Error al enviar datos:', error);
      }
    );
  }
}
