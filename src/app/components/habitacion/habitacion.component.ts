import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Room } from '../../data/room-data';
import { ReservaService } from '../../service/reserva.service';
import { CheckoutComponent } from "../checkout/checkout.component";

@Component({
  selector: 'app-habitacion',
  standalone: true,
  imports: [CommonModule, CheckoutComponent],
  templateUrl: './habitacion.component.html',
  styleUrl: './habitacion.component.css',
})
export class HabitacionComponent implements OnInit {
  hotel: Room[] = [];
  vueloId: string | null = null;
  @Output() roomSelected = new EventEmitter<void>();
  showCheckout: boolean = false; // Controlar la visibilidad del componente de checkout

  constructor(private service: ReservaService) {}

  ngOnInit(): void {
    this.hotel = this.service.getRoom();
    this.vueloId = this.service.getVueloId(); // Obtener el ID guardado del vuelo
  }
  selectedRoom(room: Room) {
    this.service.saveSelectedRoom(room);
    this.roomSelected.emit(); // Emitir evento
    this.showCheckout = true;
  }

}
