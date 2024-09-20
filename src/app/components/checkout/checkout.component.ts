import { Component } from '@angular/core';
import { ReservaService } from '../../service/reserva.service';
import { Room } from '../../data/room-data';
import { Flight } from '../../data/flight-data';
import { CommonModule, DatePipe, LowerCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [FormsModule,DatePipe,LowerCasePipe],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css',
})
export class CheckoutComponent {
  vuelo: Flight | null = null;
  habitacion: Room | null = null;
  totalAmount: number = 0;

  constructor(private service: ReservaService) {}
  prueba() {
    this.vuelo =
      this.service
        .getVuelos()
        .find((v) => v.destinationId === this.service.getVueloId()) || null;
    this.habitacion = this.service.getSelectedRoom();

    console.log(this.vuelo);
    console.log(this.habitacion);
  }

  ngOnInit(): void {
    this.prueba();
    this.habitacion = this.service.getSelectedRoom(); // Método para obtener la habitación seleccionada
    this.calculateTotal();
  }

  calculateTotal() {
    if (this.vuelo && this.habitacion) {
      this.totalAmount = this.vuelo.price + this.habitacion.price;
    }
  }

  onSubmit(form: any) {
    if (this.habitacion && this.habitacion.booked) {
      alert('La habitación no está disponible. Por favor, selecciona otra.');
      return;
    }

    if (form.valid) {
      alert(`Operación exitosa. Monto Total: ${this.totalAmount}`);
    }
  }

}
