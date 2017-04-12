import { Pipe, PipeTransform } from '@angular/core';
import { EmojiService } from '../services/emoji.service';

@Pipe({
  name: 'emoji'
})
export class EmojiPipe implements PipeTransform {
  constructor(public emojiService: EmojiService) {}

  transform(text: string): string {
    return this.emojiService.convertText(text);
  }
}
