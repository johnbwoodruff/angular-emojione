import { NgModule } from '@angular/core';
import { EmojiService } from './services/emoji.service';
import { EmojiPipe } from './pipes/emoji.pipe';
import { EmojiComponent } from './components/emoji.component';

@NgModule({
  providers: [EmojiService],
  declarations: [
    EmojiPipe,
    EmojiComponent
  ],
  exports: [
    // Export directives, components, and pipes here
    EmojiPipe,
    EmojiComponent
  ]
})
export class EmojiModule {}
