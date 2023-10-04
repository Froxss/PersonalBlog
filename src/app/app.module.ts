import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatashareService } from './datashare.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BooksModule } from './books/books.module';
import { CgiModule } from './cgi/cgi.module';
import { DesignModule } from './design/design.module';
import { GamingModule } from './gaming/gaming.module';
import { ProgrammingModule } from './programming/programming.module';
import { CardGridComponent } from './card-grid/card-grid.component';
import { NavbarcompComponent } from './navbarcomp/navbarcomp.component';

@NgModule({
  declarations: [AppComponent, CardGridComponent, NavbarcompComponent],
  imports: [
    BrowserModule,
    HomeModule,
    BooksModule,
    CgiModule,
    DesignModule,
    GamingModule,
    ProgrammingModule,

    AppRoutingModule,
  ],
  providers: [DatashareService],
  bootstrap: [AppComponent],
})
export class AppModule {}
