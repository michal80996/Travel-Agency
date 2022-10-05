import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { myRoutingModule } from 'src/environments/myRout';

import { AppComponent } from './app.component';
import { ClosedComponent } from './components/closed/closed.component';
import { ContactComponent } from './components/contact/contact.component';
import { DetialsComponent } from './components/detials/detials.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerialMessageComponent } from './components/managerial-message/managerial-message.component';
import { ManagerialUpdateComponent } from './components/managerial-update/managerial-update.component';
import { MenuComponent } from './components/menu/menu.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ClientService } from './servises/client.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
<<<<<<< HEAD
import { FlightService } from './servises/flight.service';
=======
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { HeaderComponent } from './components/header/header.component';
import { TodoComponent } from './components/todo/todo.component';
import { NewTodoComponent } from './components/new-todo/new-todo.component';
import { TodoContainerComponent } from './todo-container/todo-container.component';
import { CountDownComponent } from './components/count-down/count-down.component';



>>>>>>> a4ac5f09b4b135285b2286cad1dbae3176fd765e


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    MenuComponent,
    LoginComponent,
    ClosedComponent,
    ContactComponent,
    DetialsComponent,
    HomeComponent,
    ManagerialMessageComponent,
    ManagerialUpdateComponent,
    RegistrationComponent,
    
=======
    TodoListComponent,
    HeaderComponent,
    TodoComponent,
    NewTodoComponent,
    TodoContainerComponent,
    CountDownComponent
>>>>>>> a4ac5f09b4b135285b2286cad1dbae3176fd765e
  ],

  imports: [
    BrowserModule,
    myRoutingModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
   


  ],
  providers: [ClientService,FlightService],
  bootstrap: [AppComponent]
})
export class AppModule { }
