import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientServiceService } from 'src/app/Services/client-service.service';
import { Client } from 'src/Models/client.model';
import { Status, transformStringInEnum } from 'src/Models/status.enum';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {
  public form: FormGroup;
  public clients: Client[];
  public status: Status[] = Object.values(Status);

  constructor(
    private router: Router,
    private fb: FormBuilder,
    public clientService: ClientServiceService,
    private activatedRoute: ActivatedRoute) {
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

  ngOnInit(): void {
    const clientId: string = this.activatedRoute.snapshot.paramMap.get('id');
    const clientName: string = this.activatedRoute.snapshot.paramMap.get('name');
    const clientEmail: string = this.activatedRoute.snapshot.paramMap.get('email');
    const clientPhoneNumber: string = this.activatedRoute.snapshot.paramMap.get('phoneNumber');
    const clientstatus: string = this.activatedRoute.snapshot.paramMap.get('status');
    
    this.setClientInForm(new Client(Number.parseInt(clientId), clientName, clientEmail, clientPhoneNumber, transformStringInEnum(clientstatus)));
  }

  /**
  * The method responsible for set the data in the edit form.
  *
  * @param client - the client
  * @returns void
  */
  setClientInForm(client: Client): void {
    this.form.controls['id'].setValue(client.id);
    this.form.controls['name'].setValue(client.name);
    this.form.controls['email'].setValue(client.email);
    this.form.controls['phoneNumber'].setValue(client.phoneNumber);
    this.form.controls['status'].setValue(client.status);
  }

  /**
  * The method responsible for updating a client's data.
  *
  * @returns void
  */
  editPost(): void {
    const id: number = this.form.controls['id'].value;
    const name: string = this.form.controls['name'].value;
    const email: string = this.form.controls['email'].value;
    const phoneNumber: string = this.form.controls['phoneNumber'].value;
    const statusOptions: string = this.form.controls['status'].value;

    const clientUpdated = new Client(id, name, email, phoneNumber, transformStringInEnum(statusOptions));
    this.clientService.update(clientUpdated);

    this.clientService.save();

    this.router.navigate(['/pages/clients']);
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
