import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/Services/local-storage.service';
import { ClientServiceService } from 'src/app/Services/client-service.service';
import { Client } from 'src/Models/client.model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent{
  constructor(
    private router: Router,
    public clientService: ClientServiceService,
    public localStorageService: LocalStorageService) {
      // do nothing.
    }

  /**
  * The method responsible for sending the user to the customer edit page.
  *
  * @param client - the client
  * @returns void
  */
  edit(client: Client): void {
    this.router.navigate(['/pages/clients/edit', client]);
  }

  /**
  * The method responsible for removing a client.
  *
  * @param client - the client
  * @returns void
  */
  remove(client: Client): void {
    const index: number = this.clientService.getClients().indexOf(client);

    if (index != -1) {
      this.clientService.getClients().splice(index, 1);
    }

    this.clientService.save();
  }
}
