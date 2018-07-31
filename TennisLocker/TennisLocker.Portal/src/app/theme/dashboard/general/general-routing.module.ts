import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralBoardComponent } from './general.component';


const routes: Routes = [
    {
        path: '',
        component: GeneralBoardComponent,
        data: {
            title: 'General Dashboard',
            icon: 'icon-home',
            caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit',
            status: true
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GeneralBoardRoutingModule { }
