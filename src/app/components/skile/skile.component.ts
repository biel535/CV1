import { transition, trigger, style, animate } from '@angular/animations';
import { Component, HostListener} from '@angular/core';

const scrollTransition = transition(':scroll', [
  style({
  opacity: 0
}),
animate('1s ease-in', style({ opacity: 1})),])
const sladeLeft = trigger('sladeLeft', [scrollTransition] )
const sladeRight = trigger('sladeRight', [scrollTransition] )
@Component({
  selector: 'app-skile',
  templateUrl: './skile.component.html',
  styleUrls: ['./skile.component.scss'],

})

export class SkileComponent {

isShownL= false;
isShownR= false;
sladeLeft(): void {
  this.isShownL = !this.isShownL;
}
sladeRight(): void {
  this.isShownR = !this.isShownR;
}

  // Funkcja aktywowana przy zeskrolowaniu
  @HostListener('window:scroll', [])
  onScroll(): void {
    // Przykładowa wartość progu przewijania
    const scrollThreshold = 15;

    // Sprawdź, czy użytkownik przewinął stronę ponad próg
    this.isShownL = window.scrollY > scrollThreshold;
    this.isShownR = window.scrollY > scrollThreshold;
  }
}
