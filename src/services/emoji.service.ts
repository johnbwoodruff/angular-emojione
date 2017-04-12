import { Injectable } from '@angular/core';
import * as EmojiOne from 'emojione';

@Injectable()
export class EmojiService {
  constructor() {}

  /**
   * Convert a shortname, like :thumbsup:, to an EmojiOne image.
   * 
   * @param {string} shortname 
   * @returns {string} <img> tag
   * 
   * @memberOf EmojiService
   */
  public shortnameToImage(shortname: string) {
    return EmojiOne.shortnameToImage(shortname);
  }

  /**
   * Convert a native unicode emoji to a shortname
   * 
   * @param {string} unicode 
   * @returns {string} <img> tag
   * 
   * @memberOf EmojiService
   */
  public unicodeToShortname(unicode: string) {
    return EmojiOne.toShort(unicode);
  }
  
  /**
   * Convert a native unicode emoji to an EmojiOne image
   * 
   * @param {string} unicode 
   * @returns {string} <img> tag
   * 
   * @memberOf EmojiService
   */
  public unicodeToImage(unicode: string) {
    return EmojiOne.unicodeToImage(unicode);
  }

  /**
   * Replace shortcodes and/or native emoji in a blob of text to EmojiOne images
   * 
   * @param {string} text 
   * @returns {string} text with EmojiOne images
   * 
   * @memberOf EmojiService
   */
  public convertText(text: string) {
    return EmojiOne.toImage(text);
  }
}
