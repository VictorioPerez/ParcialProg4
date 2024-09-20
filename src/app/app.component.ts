import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VuelosComponent } from "./components/vuelos/vuelos.component";
import { HabitacionComponent } from "./components/habitacion/habitacion.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VuelosComponent, HabitacionComponent, CheckoutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practica';
}
