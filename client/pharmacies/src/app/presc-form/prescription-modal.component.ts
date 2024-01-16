// prescription-modal.component.ts

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-prescription-modal',
  templateUrl: './prescription-modal.component.html',
  styleUrls: ['./prescription-modal.component.css']
})
export class PrescriptionModalComponent {
closePrescriptionModal() {
throw new Error('Method not implemented.');
}
  pharmacyName: string = '';

  @Output() sendPrescriptionEvent = new EventEmitter<string>();

  sendPrescription() {
    // Emit an event with the pharmacy name
    this.sendPrescriptionEvent.emit(this.pharmacyName);
  }
}
