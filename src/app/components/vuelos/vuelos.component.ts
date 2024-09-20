import { Component, OnInit } from '@angular/core';
import { Flight } from '../../data/flight-data';
import { ReservaService } from '../../service/reserva.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HabitacionComponent } from "../habitacion/habitacion.component";
import { CheckoutComponent } from "../checkout/checkout.component";

@Component({
  selector: 'app-vuelos',
  standalone: true,
  imports: [CommonModule, FormsModule, HabitacionComponent, CheckoutComponent],
  templateUrl: './vuelos.component.html',
  styleUrl: './vuelos.component.css',
})
export class VuelosComponent implements OnInit {
  vuelos: Flight[] = [];
  idSave: string = '';
  showHabitaciones: boolean = false; // Controlar la visibilidad del componente de habitaciones

  constructor(private service: ReservaService) {}

  selectedFlight(flight: Flight) {
    this.idSave = flight.destinationId;
    this.service.saveVueloId(this.idSave); // Asegúrate de que esto se ejecute
    this.showHabitaciones = this.service.getRoom().some(room => room.destinationId === this.idSave);
  }
  

  ngOnInit(): void {
    this.vuelos = this.service.getVuelos();
  }
}
