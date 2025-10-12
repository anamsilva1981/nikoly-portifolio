import { Component, ViewEncapsulation, inject } from '@angular/core';
import { RouterModule } from '@angular/router'; // Importar RouterModule
import { ProjectService } from '@pages/project/project.service';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { PlatformTag } from '@shared/components/platform-tag/platform-tag';
import { Devicon } from '@shared/components/devicon/devicon';
import { ProjectLink } from '@pages/project/components/project-link';
import { FeatureProject } from '@pages/project/components/feature-project';
import { OtherProject } from '@pages/project/components/other-project';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'project-page',
  templateUrl: './project.page.html',
  // templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
  // styleUrls: ['./project.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [RouterModule, PlatformTag, Devicon, ProjectLink, FeatureProject, OtherProject, CommonModule] // Adicionar RouterModule
})
export class ProjectPage {
  projectService = inject(ProjectService);
  metaService = inject(MetaService);
    
    digitalArts = [
      { title: 'CYBER SAMURAI', image: 'assets/portfolio/digital/cyber-samurai.jpg', role: 'CHARACTER DESIGNER' },
      { title: 'NEON CITYSCAPE', image: 'assets/portfolio/digital/neon-city.jpg', role: 'ENVIRONMENT ARTIST' },
      { title: 'FUTURE SOLDIER', image: 'assets/portfolio/digital/future-soldier.jpg', role: 'CONCEPT ARTIST' },
      { title: 'SPACE PILOT', image: 'assets/portfolio/digital/space-pilot.jpg', role: 'CHARACTER DESIGNER' },
      { title: 'ROBOT GUARDIAN', image: 'assets/portfolio/digital/robot-guardian.jpg', role: 'CONCEPT ARTIST' },
      { title: 'ALIEN LANDSCAPE', image: 'assets/portfolio/digital/alien-landscape.jpg', role: 'ENVIRONMENT ARTIST' },
      { title: 'FANTASY CASTLE', image: 'assets/portfolio/digital/fantasy-castle.jpg', role: 'ILLUSTRATOR' },
      { title: 'STEAMPUNK CITY', image: 'assets/portfolio/digital/steampunk-city.jpg', role: 'ENVIRONMENT ARTIST' },
      { title: 'MAGIC FOREST', image: 'assets/portfolio/digital/magic-forest.jpg', role: 'ILLUSTRATOR' },
      { title: 'DRAGON RIDER', image: 'assets/portfolio/digital/dragon-rider.jpg', role: 'CHARACTER DESIGNER' }
    ];
  
    pixelArts = [
      { title: 'RETRO HERO', image: 'assets/portfolio/pixel/hero-sprite.png', role: 'SPRITE ARTIST' },
      { title: 'FANTASY TILESET', image: 'assets/portfolio/pixel/fantasy-tileset.png', role: 'TILE ARTIST' },
      { title: 'PIXEL DRAGON', image: 'assets/portfolio/pixel/pixel-dragon.png', role: 'SPRITE ARTIST' },
      { title: 'SPACE SHIP', image: 'assets/portfolio/pixel/space-ship.png', role: 'SPRITE ARTIST' },
      { title: 'PIXEL KNIGHT', image: 'assets/portfolio/pixel/pixel-knight.png', role: 'SPRITE ARTIST' },
      { title: 'PIXEL FOREST', image: 'assets/portfolio/pixel/pixel-forest.png', role: 'TILE ARTIST' },
      { title: 'PIXEL CASTLE', image: 'assets/portfolio/pixel/pixel-castle.png', role: 'TILE ARTIST' },
      { title: 'PIXEL MONSTER', image: 'assets/portfolio/pixel/pixel-monster.png', role: 'SPRITE ARTIST' },
      { title: 'PIXEL WIZARD', image: 'assets/portfolio/pixel/pixel-wizard.png', role: 'SPRITE ARTIST' },
      { title: 'PIXEL VILLAGE', image: 'assets/portfolio/pixel/pixel-village.png', role: 'TILE ARTIST' }
    ];
  
    threeDModels = [
      { title: 'SCI-FI WEAPON', image: 'assets/portfolio/3d/plasma-rifle.jpg', role: '3D MODELER' },
      { title: 'FANTASY CREATURE', image: 'assets/portfolio/3d/dragon-model.jpg', role: 'CHARACTER MODELER' },
      { title: 'ROBOT ARMOR', image: 'assets/portfolio/3d/robot-armor.jpg', role: '3D MODELER' },
      { title: 'SPACESHIP', image: 'assets/portfolio/3d/spaceship.jpg', role: '3D MODELER' },
      { title: 'FANTASY SWORD', image: 'assets/portfolio/3d/fantasy-sword.jpg', role: 'PROP MODELER' },
      { title: 'ALIEN HEAD', image: 'assets/portfolio/3d/alien-head.jpg', role: 'CHARACTER MODELER' },
      { title: 'CASTLE RUINS', image: 'assets/portfolio/3d/castle-ruins.jpg', role: 'ENVIRONMENT MODELER' },
      { title: 'FUTURISTIC CAR', image: 'assets/portfolio/3d/futuristic-car.jpg', role: '3D MODELER' },
      { title: 'MAGIC STAFF', image: 'assets/portfolio/3d/magic-staff.jpg', role: 'PROP MODELER' },
      { title: 'ROBOT DOG', image: 'assets/portfolio/3d/robot-dog.jpg', role: 'CHARACTER MODELER' }
    ];
  
    traditionalArts = [
      { title: 'CHARACTER SKETCHES', image: 'assets/portfolio/traditional/sketches.jpg', role: 'CONCEPT ARTIST' },
      { title: 'STORYBOARD', image: 'assets/portfolio/traditional/storyboard.jpg', role: 'STORYBOARD ARTIST' },
      { title: 'WATERCOLOR LANDSCAPE', image: 'assets/portfolio/traditional/watercolor-landscape.jpg', role: 'ILLUSTRATOR' },
      { title: 'PORTRAIT STUDY', image: 'assets/portfolio/traditional/portrait-study.jpg', role: 'ARTIST' },
      { title: 'INK DRAWING', image: 'assets/portfolio/traditional/ink-drawing.jpg', role: 'ILLUSTRATOR' },
      { title: 'CHARCOAL SKETCH', image: 'assets/portfolio/traditional/charcoal-sketch.jpg', role: 'ARTIST' },
      { title: 'OIL PAINTING', image: 'assets/portfolio/traditional/oil-painting.jpg', role: 'PAINTER' },
      { title: 'COLOR PENCIL', image: 'assets/portfolio/traditional/color-pencil.jpg', role: 'ILLUSTRATOR' },
      { title: 'LIFE DRAWING', image: 'assets/portfolio/traditional/life-drawing.jpg', role: 'ARTIST' },
      { title: 'ANATOMY STUDY', image: 'assets/portfolio/traditional/anatomy-study.jpg', role: 'ARTIST' }
    ];
  // ...existing code...
  constructor() {
    this.metaService.setMetaTags(
      `Projects - ${profileData.name}`,
      `Projects made by ${profileData.name}. Get to know all the sources.`,
      [
        'tech',
        'software',
        'development',
        'project',
        'portfolio',
        'app',
        'programming',
        'open-source',
        'web',
        'android',
        'ios'
      ]
    );
  }
}