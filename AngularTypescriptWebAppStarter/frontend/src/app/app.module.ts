// External imports here
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Internal imports here
// Internal Components
import { AppComponent } from './components/app/app.component';

// Internal Directives
import { SampleDirective } from './directives/sample.directive';

// Internal Modules
import { SampleModule } from './modules/sample/sample.module';

// Internal Pipes
import { SamplePipe } from './pipes/sample.pipe';

// Internal Services
import { SampleService } from './services/sample.service';




@NgModule({
  declarations: [
    AppComponent,
    SampleDirective,
    SamplePipe
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule
  ],
  providers: [SampleModule, SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
