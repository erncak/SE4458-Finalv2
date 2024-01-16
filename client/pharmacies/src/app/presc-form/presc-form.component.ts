import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-presc-form',
  templateUrl: './presc-form.component.html',
  styleUrls: ['./presc-form.component.css']
})
export class PrescFormComponent {
  pharmacyName: string = '';
  tcId: string = '';
  patientFullName: string = '';
  medicines: { ID: number, Name: string, Price: number }[] = [];
  prescriptionMedicines: { ID: number, Name: string, Price: number }[] = []; // New array for prescription
  searchQuery: string = '';
  openModal: boolean = false;
  openPrescriptionModal() {
    this.openModal = true;
  }
  closePrescriptionModal() {
    this.openModal = false;
  }
  onSendPrescription(pharmacyName: string) {
    // Check if pharmacyName is provided
    if (!pharmacyName) {
      console.error('Pharmacy name is required.');
      return;
    }
  
    const prescriptionData = {
      pharmacyName: pharmacyName,
      medicines: this.prescriptionMedicines,
      // Add other prescription data as needed
    };
  
    // Send prescription data to the NestJS API
    const apiUrl = 'http://localhost:3000/prescription';
    this.httpClient.post(apiUrl, prescriptionData).subscribe(
      (response) => {
        console.log('Prescription sent successfully:', response);
        // Additional logic if needed
      },
      (error) => {
        console.error('Error sending prescription:', error);
      }
    );
  
    // Close the modal
    this.closePrescriptionModal();
    // Clear pharmacyNameInput for the next time
    this.pharmacyName = '';
  }


  constructor(private httpClient: HttpClient) {}

  searchPatient() {
    // Implement the logic to fetch patient details based on the TC ID
    // For now, let's assume a dummy patient name
    this.patientFullName = 'John Doe';
  }

  addMedicine(medicine: { ID: number, Name: string, Price: number }) {
    // Add medicine to the general medicines array
    this.addToPrescription(medicine);
  }

  addToPrescription(medicine: { ID: number, Name: string, Price: number }) {
    // Add medicine to the prescription array
    this.prescriptionMedicines.push(medicine);
  }
  
  deleteMedicine(medicine: { ID: number, Name: string, Price: number }) {
    // Delete medicine from the general medicines array
    this.medicines = this.medicines.filter(m => m.ID !== medicine.ID);
  }

  deleteFromPrescription(medicine: { ID: number, Name: string, Price: number }) {
    // Delete medicine from the prescription array
    this.prescriptionMedicines = this.prescriptionMedicines.filter(m => m.ID !== medicine.ID);
  }

  createPrescription() {
    // Implement the logic to create a prescription
    // For now, let's just log the prescription details
    console.log('Pharmacy:', this.pharmacyName);
    console.log('TC ID:', this.tcId);
    console.log('Patient:', this.patientFullName);
    console.log('Medicines:', this.prescriptionMedicines);
  }

  searchFromApi(){
    const apiUrl = `http://localhost:3000/search/medicine?query=${this.searchQuery}`;
    this.httpClient.get(apiUrl).subscribe(
      (response: any) => {
        // Handle the response, e.g., update the medicines array
        console.log('API response', response);
        this.medicines = response || [];
        console.log('Medicine', this.medicines);
      },
      (error) => {
        console.error('Error searching from API:', error);
      }
    );
  }
}
