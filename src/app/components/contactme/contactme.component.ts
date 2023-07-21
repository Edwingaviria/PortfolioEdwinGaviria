import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactme',
  templateUrl: './contactme.component.html',
  styleUrls: ['./contactme.component.css']
})
export class ContactmeComponent implements OnInit{
  contactForm!: FormGroup;
  isButtonDisabled = true;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log(this.contactForm);

    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      const name = this.contactForm.get('name')!.value;
      const email = this.contactForm.get('email')!.value;
      const message = this.contactForm.get('message')!.value;

      const mailtoLink = `mailto:edwingaviria96@gmail.com?subject=Formulario%20de%20contacto&body=Nombre:%20${name}%0D%0AEmail:%20${email}%0D%0AMensaje:%20${message}`;
      window.location.href = mailtoLink;
    }else{
      
      this.contactForm.markAllAsTouched()
    }
  }
}
