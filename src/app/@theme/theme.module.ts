import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { ClientsComponent } from "./components/clients/clients.component";
import { AddClientComponent } from "./components/add-client/add-client.component";

@NgModule({
	declarations: [
		AddClientComponent,
		ClientsComponent
	],
	imports: [
		CommonModule,
    ReactiveFormsModule
  ],
	providers: [],
    exports: [
			AddClientComponent
    ]
})
export class ThemeModule { }
