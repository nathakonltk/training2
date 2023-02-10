import { Component ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appName = "TT SS Exam";
  userName = "User Test";

  @Output() toggleClick = new EventEmitter<boolean>();
  toggleMenu() {
    // console.log(11)
    this.toggleClick.emit();
  }
}
