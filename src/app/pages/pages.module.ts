import { NgModule } from "@angular/core";
import { ThemeModule } from "../@theme/theme.module";
import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { EditClientComponent } from "./clients/edit/edit-client.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
	imports: [
		PagesRoutingModule,
		ThemeModule,
		CommonModule,
		ReactiveFormsModule
	],
	declarations: [
		PagesComponent,
		EditClientComponent
	],
	providers: []
})
export class PagesModule { }
