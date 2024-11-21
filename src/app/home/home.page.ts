import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  text = '';
  constructor(private router: Router) {}
  submit() {
    console.log(this.text);
    this.router.navigate([`/liste`], {
      queryParams: {
        text: this.text,
      },
    });
  }
}
