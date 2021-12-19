import { Injectable } from '@angular/core';
import { Client } from 'src/Models/client.model';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  private clients: Client[];

  constructor(public localStorageService: LocalStorageService) {
    this.loadAll();
  }

  /**
  * The method responsible for fetching all registered clients.
  *
  * @returns void
  */
  loadAll(): void {
    const data: string | null = this.localStorageService.getItem('riott-web:clients');
    
    if (data) {
      this.clients = JSON.parse(data);
    } else {
      this.clients = [];
    }
  }

  /**
  * The method responsible for returning all clients.
  *
  * @returns Client[]
  */
  getClients(): Client[] {
    return this.clients;
  }

  /**
  * The method responsible for returning a client by its identifier.
  *
  * @param id - the identifier of client
  * @returns Client
  */
  loadById(id: number): Client {
    return this.clients.find(client => client.id == id);
  }

  /**
  * The method responsible for adding a client to the clients array.
  *
  * @param client - the client
  * @returns void
  */
  push (client: Client): void {
    this.clients.push(client);
  }

  /**
  * The method responsible for updating a client's data.
  *
  * @param client - the updated client
  * @returns void
  */
  update(clientUpdated: Client): void {
    const clientToUpdate: Client = this.loadById(clientUpdated.id);

    Client.updateClient(clientToUpdate, clientUpdated);
  }

  /**
  * The method responsible for saving the array of clients in localStorage.
  *
  * @returns void
  */
  save(): void {
    const data = JSON.stringify(this.clients);
    this.localStorageService.setItem('riott-web:clients', data);
  }

  /**
  * The method responsible for updating a client's data.
  *
  * @param clients - the clients array
  * @returns void
  */
  setClients(clients: Client[]): void {
    this.clients = clients;
  }
}
