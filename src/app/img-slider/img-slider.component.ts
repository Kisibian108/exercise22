import {Component, ContentChildren, OnInit, QueryList, ViewEncapsulation} from '@angular/core';
import {ImgSlideComponent} from "../img-slide/img-slide.component";

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ImgSliderComponent implements OnInit {

  @ContentChildren(ImgSlideComponent) slides: QueryList<ImgSlideComponent> | undefined;
  component: any;
  activeIndex = 0;
  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.slides);
    // @ts-ignore
    this.component = this.slides.first;
  }

  previos() {
    if (this.activeIndex > 0) {
      this.activeIndex--;
    }
    // @ts-ignore
    this.component = this.slides.toArray()[this.activeIndex];
  }
  next() {
    // @ts-ignore
    if (this.activeIndex < this.slides.length - 1) {
      this.activeIndex++;
    }
    // @ts-ignore
    this.component = this.slides.toArray()[this.activeIndex];
  }
}
