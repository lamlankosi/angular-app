import { Component } from '@angular/core';
@Component({
  selector: 'comments',
  standalone: true,
  template: `
  <div>
      <ul>
      <li>Building for the web is fantastic!</li>
      <li>The new template syntax is great</li>
      <li>I agree with the other comments!</li>
    </ul>
  </div>
`
})

export class CommentSection {

}
