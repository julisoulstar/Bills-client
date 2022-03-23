import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBillComponent } from './components/create-bill/create-bill.component';

// components
import { ReadingBillComponent } from './components/reading-bill/reading-bill.component';

const routes: Routes = [
  { path: '', component: ReadingBillComponent },
  { path: 'create-bill', component: CreateBillComponent },
  { path: 'edit-bill/:id', component: CreateBillComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
