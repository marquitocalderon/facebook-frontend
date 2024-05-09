import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
    // Espera 5 segundos antes de redirigir
    setTimeout(() => {
      // Cambia la URL
      window.location.href = 'https://www.facebook.com/'; // Reemplaza 'nueva-url' con la URL a la que deseas redirigir
    }, 4000); // 5000 milisegundos = 5 segundos
  }
}
