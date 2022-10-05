import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "src/app/app.component";
import { ClosedComponent } from "src/app/components/closed/closed.component";
import { ContactComponent } from "src/app/components/contact/contact.component";
import { DetialsComponent } from "src/app/components/detials/detials.component";
import { HomeComponent } from "src/app/components/home/home.component";
import { LoginComponent } from "src/app/components/login/login.component";
import { ManagerialMessageComponent } from "src/app/components/managerial-message/managerial-message.component";
import { ManagerialUpdateComponent } from "src/app/components/managerial-update/managerial-update.component";
import { MenuComponent } from "src/app/components/menu/menu.component";
import { RegistrationComponent } from "src/app/components/registration/registration.component";
// Home/Login      

const appRoutes: Routes = [
    {path:"",component:AppComponent},
    {path:"Login",component:LoginComponent},
    { path: "Home", component: HomeComponent},
        
    { path: "Registration", component: RegistrationComponent },
    { path: "Contact", component: ContactComponent,
        children:[
        { path: "Detials", component: DetialsComponent }
    ] },
    { path: "Message", component: ManagerialMessageComponent },
    { path: "Update", component: ManagerialUpdateComponent },
    { path: "Menu", component: MenuComponent },
    { path: "Login", component: LoginComponent},
        
    { path: "Closed", component: ClosedComponent }
                
]




@NgModule({
    imports: [RouterModule.forRoot(appRoutes), CommonModule],
    declarations: []
})
export class myRoutingModule { }