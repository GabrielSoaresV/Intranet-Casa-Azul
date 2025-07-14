import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Navbar } from './componentes/navbar/navbar';
import { MainContainer } from './pages/main-container/main-container';
import { Form } from './pages/form/form';
import { Register } from './pages/register/register';
import { SearchBar } from './componentes/search-bar/search-bar';
import { PageLogin } from './pages/page-login/page-login';
import { PageHome } from './pages/page-home/page-home';
import { ButtonRegister } from './componentes/button-register/button-register';
import { ButtonForm } from './componentes/button-form/button-form';
import { ButtonSettings } from './componentes/button-settings/button-settings';
import { ButtonLogout } from './componentes/button-logout/button-logout';

@NgModule({
  declarations: [
    App,
    Navbar,
    MainContainer,
    Form,
    Register,
    SearchBar,
    PageLogin,
    PageHome,
    ButtonRegister,
    ButtonForm,
    ButtonSettings,
    ButtonLogout
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection()
  ],
  bootstrap: [App]
})
export class AppModule { }
