import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';
import { Music } from '@shared/components/music/music'
import { Watch } from '@shared/components/watch/watch'

@Component({
  selector: 'about',
  template: `
  <section class="flex flex-col max-w-screen-lg justify-between mx-auto gap-16 dark:text-gray-200 overflow-y-hidden">
    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">About Me</h1>
      <p class="justify-start">
        I'm Nikoly Stradiotto, a passionate Game Design student and aspiring game developer. I love turning ideas into interactive experiences that are both engaging and creative. 🎮✨
      </p>
      <p *ngFor="let a of aboutDetails"><b class="dark:text-white text-black">{{a.title}}</b><br />{{a.desc}}</p>
    </div>

    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">Activity:</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <music/>
        <watch/>
      </div>
    </div>

    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">Contact Information:</h1>
      @for(c of contactInfo; track $index){
        <p>
          <b class="dark:text-white text-black">{{c.title}}:</b><br />
          <a [href]="c.link" class="hover:underline" target="_blank">{{c.desc}}</a>
        </p>
      }
    </div>
  </section>
  `,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, Music, Watch],
  standalone: true
})
export class AboutPage {
  metaService = inject(MetaService)
  traktTvService = inject(TraktTvService)

  constructor(){
    this.metaService.setMetaTags(
      `About - ${profileData.name}`,
      'Discover the journey of a passionate Game Design student turning creativity into playable experiences.',
      ['bio', 'biography', 'game design', 'portfolio', 'contact', 'interactive']
    )
  }

  public aboutDetails = [
    {
      title: 'What I Do',
      desc: `I work on projects ranging from game mechanics prototyping to UI/UX design in Figma, creating polished experiences in Unity and Godot. I focus on clean, maintainable code and thoughtful design, making interactive experiences both fun and functional.`
    },
    {
      title: 'Always Learning',
      desc: `I'm constantly exploring new game engines, programming languages, and design techniques. I enjoy experimenting, learning from tutorials, and pushing my skills to create more immersive games and interactive projects.`
    },
    {
      title: 'Off-Duty Fun',
      desc: `When I'm not designing games, I enjoy playing games myself, reading about tech trends, listening to music, and spending time with friends and family. I also love sketching ideas and exploring creative concepts for future projects.`
    },
    {
      title: 'Why I Code',
      desc: `Coding is my way to bring ideas to life. It lets me combine logic and creativity to solve problems, build experiences, and craft interactive worlds. For me, programming is the tool to shape stories, gameplay, and meaningful player experiences.`
    },
  ];

  public contactInfo = [
    {
      title: 'Location',
      desc: 'São Paulo, Brazil',
      link: 'https://goo.gl/maps/example'
    },
    {
      title: 'Email',
      desc: 'nikoly.stradiotto@gmail.com',
      link: 'mailto:nikoly.stradiotto@gmail.com'
    },
    {
      title: 'LinkedIn',
      desc: 'linkedin.com/in/nikoly-stradiotto',
      link: 'https://www.linkedin.com/in/nikoly-stradiotto-3017a7256/'
    }
  ]
}

