import { SegundoComponent } from './segundo/segundo.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";
import { NgifNgforComponent } from './ngif-ngfor/ngif-ngfor.component';

const routes: Routes = [
    { path: 'first-component', component: DataBindingComponent },
    { path: 'second-component', component: SegundoComponent },
    { path: 'ngfor', component: NgifNgforComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}