import { Component } from '@angular/core';
import { Client } from 'src/Models/client.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Status, transformStringInEnum } from 'src/Models/status.enum';
import { ClientServiceService } from 'src/app/Services/client-service.service';
import { LocalStorageService } from 'src/app/Services/local-storage.service';

@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})

export class AddClientComponent {
  public form: FormGroup;
  public status: Status[] = Object.values(Status);

  constructor(
    private fb: FormBuilder,
    private clientService: ClientServiceService,
    public localStorageService: LocalStorageService) {
    this.form = this.fb.group({
      id: [''],
      name: ['', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(100),
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.email,
        Validators.required
      ])],
      phoneNumber: ['', Validators.compose([
        Validators.minLength(11),
        Validators.maxLength(11)
      ])],
      status: ['', Validators.compose([
        Validators.required,
      ])]
    });
  }

  /**
  * The method responsible for adding a new client to localStorage.
  *
  * @returns void
  */
  add(): void {
    const name: string = this.form.controls['name'].value;
    const email: string = this.form.controls['email'].value;
    const phoneNumber: string = this.form.controls['phoneNumber'].value;
    const statusOptions: string = this.form.controls['status'].value;

    const id: number = this.clientService.getClients().length + 1;
    this.clientService.push(new Client(id, name, email, phoneNumber, transformStringInEnum(statusOptions)));
    this.clientService.save();
    this.clear();
  }

  /**
  * The method responsible for clear form fields.
  *
  * @returns void
  */
  clear(): void {
    this.form.reset();
  }
}
