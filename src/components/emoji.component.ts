import { Component, Input, OnInit } from '@angular/core';
import { EmojiService } from '../services/emoji.service';

@Component({
  selector: 'emoji',
  template: `
    <span [innerHTML]="image"></span>
  `
})
export class EmojiComponent implements OnInit {
  @Input() shortname: string;
  image: string;

  constructor(public emojiService: EmojiService) {}

  ngOnInit() {
    this.image = this.emojiService.shortnameToImage(this.shortname);
  }
}
