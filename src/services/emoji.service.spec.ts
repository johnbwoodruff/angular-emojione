import { TestBed, inject } from '@angular/core/testing';

import { EmojiService } from './emoji.service';

describe('EmojiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmojiService]
    });
  });

  it('should create service', inject([EmojiService], (service: EmojiService) => {
    expect(service).toBeTruthy();
  }));

  it('should return 42 from getMeaning', inject([EmojiService], (service: EmojiService) => {
    expect(service.shortnameToImage(':heart:')).toEqual(
      '<img class="emojione" alt="❤" title=":heart:" src="https://cdn.jsdelivr.net/emojione/assets/png/2764.png?v=2.2.7"/>'
    );
  }));
});
