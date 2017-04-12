import { Directive, ElementRef, Input, OnInit, OnChanges } from '@angular/core';
import { EmojiService } from '../services/emoji.service';

@Directive({
  selector: '[emoji]'
})
export class EmojiDirective implements OnInit {

  constructor(private el: ElementRef, private emojiService: EmojiService) {}

  ngOnInit() {}
}
