import { Component } from '@angular/core';
import { Expence, FireLoopRef } from './shared/sdk/models';
import { RealTime } from './shared/sdk/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is expence screen';
  private expence: Expence = new Expence({ name: 'Hello FireLoop Room' });
  private ExpenceReference: FireLoopRef<Expence>;


  constructor(private rt: RealTime) {
    this.rt
    .onReady()
    .subscribe(() =>
        this.ExpenceReference = this.rt.FireLoop.ref<Expence>(Expence)
    );
  }

  create(): void {
    this.ExpenceReference.upsert(this.expence).subscribe((instance: Expence) => console.log(instance));
    
  }
}
