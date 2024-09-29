import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
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
        if (response.status) {
          // Redirigir a la página de inicio
          window.location.href = '/error'; // Cambia 'inicio' por la URL de la página de inicio
        }
      },
      (error) => {
        // Manejar errores aquí
        console.error('Error al enviar datos:', error);
      }
    );
  }
}
