import { Status } from "./status.enum";

export class Client {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public phoneNumber: string,
    public status: Status) {
  }

  static updateClient(clientToUpdate: Client, updatedClient: Client): void {
    clientToUpdate.name = updatedClient.name;
    clientToUpdate.email = updatedClient.email;
    clientToUpdate.phoneNumber = updatedClient.phoneNumber;
    clientToUpdate.status = updatedClient.status;
  }
}