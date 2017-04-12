# Angular EmojiOne

EmojiOne for Angular 2+.

# Usage

To use this library, install both emojione and this library, angular-emojione, from npm.

```shell
$ npm install --save emojione angular-emojione
```

It is highly recommended you include the EmojiOne stylesheet to properly size the emoji in your app. Include the following `<link>` tag in your `index.html`.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/emojione/2.2.7/assets/css/emojione.min.css"/>
```

Import the `EmojiModule` into your `app.module.ts` and add it to your `imports` array:

```ts
//...
import { EmojiModule } from 'angular-emojione';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //...
    EmojiModule
  ]
})
export class AppModule {}
```

You're now ready to go! Check out the documentation below for using the various pieces of this library.

## Component

You can use the component for a single shortcode-to-emoji rendering. Simply use the markup below:

```html
<emoji [shortname]="myVar"></emoji>
```

Where `myVar` is bound to a string with a single shortcode, such as `:poop:`. That component will then render the emoji.

## Directive

IN PROGRESS...

## Pipe

Using the pipe is simple. Below is a sample component that makes use of the EmojiPipe.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div [innerHTML]="text | emoji"></div>
  `
})
export class AppComponent {
  text: string;

  constructor() {
    this.text = `This will be converted to EmojiOne emojis! :thumbsup: ❤️`;
  }
}
```

The pipe will then convert the text and the output will look like the following:

![Pipe](./assets/pipe.png)

As EmojiOne simply replaces shortcodes and native unicode emoji, you will need to bind your output to the `innerHTML` attribute, as is shown in the example above.

## Service

If you'd rather do conversions yourself, this library provides an easy to use service with various methods for managing your emoji! Simply import `EmojiService` where you wish to use it, like the example below:

```ts
import { Component } from '@angular/core';

import { EmojiService } from 'angular-emojione';

@Component({
  selector: 'app-root',
  template: `
    <div>Hello World!</div>
  `
})
export class AppComponent {

  constructor(public emojiService: EmojiService) {
    // Emoji Service methods are available to use!
  }
}
```

### shortnameToImage()

This function takes a shortname, such as `:thumbsup:`, and returns an `<img>` tag with the corresponding EmojiOne emoji.

### unicodeToShortname()

This function takes a native unicode emoji, like `❤️`, and returns a the corresponding shortname, in this case, `:heart:`.

### unicodeToImage()

This function takes a native unicode emoji, like `❤️`, and returns an `<img>` tag with the corresponding EmojiOne emoji.

### convertText()

This function takes a string and replaces all instances of native unicode emoji and shortnames with `<img>` tags with their corresponding EmojiOne emoji. This is what the angular-emojione library uses for its EmojiPipe.
