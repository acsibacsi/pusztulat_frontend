import { Component, OnInit } from '@angular/core';
import { Article } from '../core/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles : Article[] = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      author_id: 1,
      thumbnail: 'valami.png',
      lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris ipsum, blandit a orci a, aliquet egestas mauris. Integer consequat eleifend dui quis eleifend. Maecenas nec auctor orci. Fusce porta ipsum justo, vel vulputate tellus sollicitudin ut. Quisque hendrerit at dolor sit amet molestie. Pellentesque ut mattis erat. Donec dignissim ornare nulla, in volutpat urna fringilla id. Pellentesque mollis rhoncus felis.',
      release_date: new Date(),
      last_modified: new Date(),
      main_body: 'Aliquam odio eros, interdum eu blandit sed, pharetra quis libero. Nulla porttitor lacus vel eros volutpat, quis sollicitudin eros vestibulum. Nam elementum magna id sem rhoncus gravida. Mauris ullamcorper est id vehicula facilisis. Suspendisse eget felis tortor. Vivamus scelerisque ligula vel sodales iaculis. Aliquam egestas felis velit, eu tincidunt nisl bibendum a. Aenean faucibus ipsum quis laoreet iaculis. Proin at accumsan dolor, id finibus dui. Nam et ante massa. Mauris nulla metus, venenatis non augue ultrices, cursus ornare tortor. Curabitur sit amet sapien eleifend velit aliquet facilisis. Phasellus dui enim, suscipit eu leo nec, sodales suscipit augue. Suspendisse at ullamcorper felis. Curabitur vestibulum congue nibh sed faucibus',
      tags: ['Lorem','Ipsum']
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      author_id: 1,
      thumbnail: 'valami.png',
      lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris ipsum, blandit a orci a, aliquet egestas mauris. Integer consequat eleifend dui quis eleifend. Maecenas nec auctor orci. Fusce porta ipsum justo, vel vulputate tellus sollicitudin ut. Quisque hendrerit at dolor sit amet molestie. Pellentesque ut mattis erat. Donec dignissim ornare nulla, in volutpat urna fringilla id. Pellentesque mollis rhoncus felis.',
      release_date: new Date(),
      last_modified: new Date(),
      main_body: 'Aliquam odio eros, interdum eu blandit sed, pharetra quis libero. Nulla porttitor lacus vel eros volutpat, quis sollicitudin eros vestibulum. Nam elementum magna id sem rhoncus gravida. Mauris ullamcorper est id vehicula facilisis. Suspendisse eget felis tortor. Vivamus scelerisque ligula vel sodales iaculis. Aliquam egestas felis velit, eu tincidunt nisl bibendum a. Aenean faucibus ipsum quis laoreet iaculis. Proin at accumsan dolor, id finibus dui. Nam et ante massa. Mauris nulla metus, venenatis non augue ultrices, cursus ornare tortor. Curabitur sit amet sapien eleifend velit aliquet facilisis. Phasellus dui enim, suscipit eu leo nec, sodales suscipit augue. Suspendisse at ullamcorper felis. Curabitur vestibulum congue nibh sed faucibus',
      tags: ['Lorem','Ipsum']
    },
    {
        id: 3,
        title: 'Lorem Ipsum',
        author_id: 1,
        thumbnail: 'valami.png',
        lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris ipsum, blandit a orci a, aliquet egestas mauris. Integer consequat eleifend dui quis eleifend. Maecenas nec auctor orci. Fusce porta ipsum justo, vel vulputate tellus sollicitudin ut. Quisque hendrerit at dolor sit amet molestie. Pellentesque ut mattis erat. Donec dignissim ornare nulla, in volutpat urna fringilla id. Pellentesque mollis rhoncus felis.',
        release_date: new Date(),
        last_modified: new Date(),
        main_body: 'Aliquam odio eros, interdum eu blandit sed, pharetra quis libero. Nulla porttitor lacus vel eros volutpat, quis sollicitudin eros vestibulum. Nam elementum magna id sem rhoncus gravida. Mauris ullamcorper est id vehicula facilisis. Suspendisse eget felis tortor. Vivamus scelerisque ligula vel sodales iaculis. Aliquam egestas felis velit, eu tincidunt nisl bibendum a. Aenean faucibus ipsum quis laoreet iaculis. Proin at accumsan dolor, id finibus dui. Nam et ante massa. Mauris nulla metus, venenatis non augue ultrices, cursus ornare tortor. Curabitur sit amet sapien eleifend velit aliquet facilisis. Phasellus dui enim, suscipit eu leo nec, sodales suscipit augue. Suspendisse at ullamcorper felis. Curabitur vestibulum congue nibh sed faucibus',
        tags: ['Lorem','Ipsum']
      },
      {
        id: 4,
        title: 'Lorem Ipsum',
        author_id: 1,
        thumbnail: 'valami.png',
        lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris ipsum, blandit a orci a, aliquet egestas mauris. Integer consequat eleifend dui quis eleifend. Maecenas nec auctor orci. Fusce porta ipsum justo, vel vulputate tellus sollicitudin ut. Quisque hendrerit at dolor sit amet molestie. Pellentesque ut mattis erat. Donec dignissim ornare nulla, in volutpat urna fringilla id. Pellentesque mollis rhoncus felis.',
        release_date: new Date(),
        last_modified: new Date(),
        main_body: 'Aliquam odio eros, interdum eu blandit sed, pharetra quis libero. Nulla porttitor lacus vel eros volutpat, quis sollicitudin eros vestibulum. Nam elementum magna id sem rhoncus gravida. Mauris ullamcorper est id vehicula facilisis. Suspendisse eget felis tortor. Vivamus scelerisque ligula vel sodales iaculis. Aliquam egestas felis velit, eu tincidunt nisl bibendum a. Aenean faucibus ipsum quis laoreet iaculis. Proin at accumsan dolor, id finibus dui. Nam et ante massa. Mauris nulla metus, venenatis non augue ultrices, cursus ornare tortor. Curabitur sit amet sapien eleifend velit aliquet facilisis. Phasellus dui enim, suscipit eu leo nec, sodales suscipit augue. Suspendisse at ullamcorper felis. Curabitur vestibulum congue nibh sed faucibus',
        tags: ['Lorem','Ipsum']
      },
      {
        id: 5,
        title: 'Lorem Ipsum',
        author_id: 1,
        thumbnail: 'valami.png',
        lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris ipsum, blandit a orci a, aliquet egestas mauris. Integer consequat eleifend dui quis eleifend. Maecenas nec auctor orci. Fusce porta ipsum justo, vel vulputate tellus sollicitudin ut. Quisque hendrerit at dolor sit amet molestie. Pellentesque ut mattis erat. Donec dignissim ornare nulla, in volutpat urna fringilla id. Pellentesque mollis rhoncus felis.',
        release_date: new Date(),
        last_modified: new Date(),
        main_body: 'Aliquam odio eros, interdum eu blandit sed, pharetra quis libero. Nulla porttitor lacus vel eros volutpat, quis sollicitudin eros vestibulum. Nam elementum magna id sem rhoncus gravida. Mauris ullamcorper est id vehicula facilisis. Suspendisse eget felis tortor. Vivamus scelerisque ligula vel sodales iaculis. Aliquam egestas felis velit, eu tincidunt nisl bibendum a. Aenean faucibus ipsum quis laoreet iaculis. Proin at accumsan dolor, id finibus dui. Nam et ante massa. Mauris nulla metus, venenatis non augue ultrices, cursus ornare tortor. Curabitur sit amet sapien eleifend velit aliquet facilisis. Phasellus dui enim, suscipit eu leo nec, sodales suscipit augue. Suspendisse at ullamcorper felis. Curabitur vestibulum congue nibh sed faucibus',
        tags: ['Lorem','Ipsum']
      },
      {
        id: 6,
        title: 'Lorem Ipsum',
        author_id: 1,
        thumbnail: 'valami.png',
        lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris ipsum, blandit a orci a, aliquet egestas mauris. Integer consequat eleifend dui quis eleifend. Maecenas nec auctor orci. Fusce porta ipsum justo, vel vulputate tellus sollicitudin ut. Quisque hendrerit at dolor sit amet molestie. Pellentesque ut mattis erat. Donec dignissim ornare nulla, in volutpat urna fringilla id. Pellentesque mollis rhoncus felis.',
        release_date: new Date(),
        last_modified: new Date(),
        main_body: 'Aliquam odio eros, interdum eu blandit sed, pharetra quis libero. Nulla porttitor lacus vel eros volutpat, quis sollicitudin eros vestibulum. Nam elementum magna id sem rhoncus gravida. Mauris ullamcorper est id vehicula facilisis. Suspendisse eget felis tortor. Vivamus scelerisque ligula vel sodales iaculis. Aliquam egestas felis velit, eu tincidunt nisl bibendum a. Aenean faucibus ipsum quis laoreet iaculis. Proin at accumsan dolor, id finibus dui. Nam et ante massa. Mauris nulla metus, venenatis non augue ultrices, cursus ornare tortor. Curabitur sit amet sapien eleifend velit aliquet facilisis. Phasellus dui enim, suscipit eu leo nec, sodales suscipit augue. Suspendisse at ullamcorper felis. Curabitur vestibulum congue nibh sed faucibus',
        tags: ['Lorem','Ipsum']
      },
      {
        id: 7,
        title: 'Lorem Ipsum',
        author_id: 1,
        thumbnail: 'valami.png',
        lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris ipsum, blandit a orci a, aliquet egestas mauris. Integer consequat eleifend dui quis eleifend. Maecenas nec auctor orci. Fusce porta ipsum justo, vel vulputate tellus sollicitudin ut. Quisque hendrerit at dolor sit amet molestie. Pellentesque ut mattis erat. Donec dignissim ornare nulla, in volutpat urna fringilla id. Pellentesque mollis rhoncus felis.',
        release_date: new Date(),
        last_modified: new Date(),
        main_body: 'Aliquam odio eros, interdum eu blandit sed, pharetra quis libero. Nulla porttitor lacus vel eros volutpat, quis sollicitudin eros vestibulum. Nam elementum magna id sem rhoncus gravida. Mauris ullamcorper est id vehicula facilisis. Suspendisse eget felis tortor. Vivamus scelerisque ligula vel sodales iaculis. Aliquam egestas felis velit, eu tincidunt nisl bibendum a. Aenean faucibus ipsum quis laoreet iaculis. Proin at accumsan dolor, id finibus dui. Nam et ante massa. Mauris nulla metus, venenatis non augue ultrices, cursus ornare tortor. Curabitur sit amet sapien eleifend velit aliquet facilisis. Phasellus dui enim, suscipit eu leo nec, sodales suscipit augue. Suspendisse at ullamcorper felis. Curabitur vestibulum congue nibh sed faucibus',
        tags: ['Lorem','Ipsum']
      },
      {
        id: 8,
        title: 'Lorem Ipsum',
        author_id: 1,
        thumbnail: 'valami.png',
        lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris ipsum, blandit a orci a, aliquet egestas mauris. Integer consequat eleifend dui quis eleifend. Maecenas nec auctor orci. Fusce porta ipsum justo, vel vulputate tellus sollicitudin ut. Quisque hendrerit at dolor sit amet molestie. Pellentesque ut mattis erat. Donec dignissim ornare nulla, in volutpat urna fringilla id. Pellentesque mollis rhoncus felis.',
        release_date: new Date(),
        last_modified: new Date(),
        main_body: 'Aliquam odio eros, interdum eu blandit sed, pharetra quis libero. Nulla porttitor lacus vel eros volutpat, quis sollicitudin eros vestibulum. Nam elementum magna id sem rhoncus gravida. Mauris ullamcorper est id vehicula facilisis. Suspendisse eget felis tortor. Vivamus scelerisque ligula vel sodales iaculis. Aliquam egestas felis velit, eu tincidunt nisl bibendum a. Aenean faucibus ipsum quis laoreet iaculis. Proin at accumsan dolor, id finibus dui. Nam et ante massa. Mauris nulla metus, venenatis non augue ultrices, cursus ornare tortor. Curabitur sit amet sapien eleifend velit aliquet facilisis. Phasellus dui enim, suscipit eu leo nec, sodales suscipit augue. Suspendisse at ullamcorper felis. Curabitur vestibulum congue nibh sed faucibus',
        tags: ['Lorem','Ipsum']
      },
      {
        id: 9,
        title: 'Lorem Ipsum',
        author_id: 1,
        thumbnail: 'valami.png',
        lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris ipsum, blandit a orci a, aliquet egestas mauris. Integer consequat eleifend dui quis eleifend. Maecenas nec auctor orci. Fusce porta ipsum justo, vel vulputate tellus sollicitudin ut. Quisque hendrerit at dolor sit amet molestie. Pellentesque ut mattis erat. Donec dignissim ornare nulla, in volutpat urna fringilla id. Pellentesque mollis rhoncus felis.',
        release_date: new Date(),
        last_modified: new Date(),
        main_body: 'Aliquam odio eros, interdum eu blandit sed, pharetra quis libero. Nulla porttitor lacus vel eros volutpat, quis sollicitudin eros vestibulum. Nam elementum magna id sem rhoncus gravida. Mauris ullamcorper est id vehicula facilisis. Suspendisse eget felis tortor. Vivamus scelerisque ligula vel sodales iaculis. Aliquam egestas felis velit, eu tincidunt nisl bibendum a. Aenean faucibus ipsum quis laoreet iaculis. Proin at accumsan dolor, id finibus dui. Nam et ante massa. Mauris nulla metus, venenatis non augue ultrices, cursus ornare tortor. Curabitur sit amet sapien eleifend velit aliquet facilisis. Phasellus dui enim, suscipit eu leo nec, sodales suscipit augue. Suspendisse at ullamcorper felis. Curabitur vestibulum congue nibh sed faucibus',
        tags: ['Lorem','Ipsum']
      }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
