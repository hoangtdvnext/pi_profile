import {AfterViewInit, Component} from '@angular/core';

declare let Circles: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'app';

  ngAfterViewInit(): void {
    var colors = [
      ['#fff', '#2980b9'], ['#fff', '#2980b9'], ['#fff', '#2980b9'], ['#fff', '#2980b9'],['#fff', '#2980b9']
    ];
    for (var i = 1; i <= 6; i++) {
      var child = document.getElementById('circles-' + i),
          percentage = 50 + (i * 10);

      Circles.create({
        id: child.id,
        percentage: percentage,
        radius: 80,
        width: 15,
        number: percentage / 10,
        text: '%',
        colors: colors[i - 1]
      });
    }
  }


}
