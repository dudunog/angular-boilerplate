import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditClientComponent } from "./clients/edit/edit-client.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
	{
		path: 'clients',
		component: PagesComponent,
	},
	{
		path: 'clients/edit',
		component: EditClientComponent,
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class PagesRoutingModule { }
