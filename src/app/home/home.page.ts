import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  value ='0';
  oldaValue='0';

lastOperador ='x';

constructor() {}
  
readyForNewInput =true;

number=[
  [7,8,9,'x'],
  [4,5,6,'-'],
  [1,2,3,'+'],
  [0,'c','/','='],
]
}
  