import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-exam',
  templateUrl: './create-exam.component.html',
  styleUrls: ['./create-exam.component.css']
})
export class CreateExamComponent implements OnInit {
  startDate!: Date;
  endDate!: Date;
  examName : any='';
  eligibilityCriteriaFile!: File;
  otherDetails!: string;

  pdfFile!: File;
  pdfBase64!: string;

  constructor() { }

  ngOnInit(): void {
  }

  submitForm() {

    console.log("submitting...............the form.............");

    // Prepare form data
    const form = {
      startDate: this.startDate,
      endDate: this.endDate,
      eligibilityCriteriaFile: this.eligibilityCriteriaFile,
      otherDetails: this.otherDetails,
      examName : this.examName
    };
  
    // Send POST request to the server
    fetch('/exam', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
      .then(response => {
        if (response.ok) {
          console.log('Form data submitted successfully');
          // Handle success case here
        } else {
          console.error('Error submitting form data. Status:', response.status);
          // Handle error case here
        }
      })
      .catch(error => {
        console.error('Error submitting form data:', error);
        // Handle error case here
      });
  }
  

  handleFileInput(event: any) {
    this.eligibilityCriteriaFile = event.target.files[0];
  }


  // handleFileInput(event: any) {
  //   this.pdfFile = event.target.files[0];
  
  //   // Convert the selected file to base64
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     this.pdfBase64 = reader.result as string;
  //   };
  //   reader.readAsDataURL(this.pdfFile);
  // }
  
  // openPDF() {
  //   if (this.pdfBase64) {
  //     const pdfWindow = window.open();
  //     if (pdfWindow) {
  //       pdfWindow.document.write('<iframe width="100%" height="100%" src="' + this.pdfBase64 + '"></iframe>');
  //     } else {
  //       console.error('Failed to open PDF window.');
  //     }
  //   }
  // }
  
}
