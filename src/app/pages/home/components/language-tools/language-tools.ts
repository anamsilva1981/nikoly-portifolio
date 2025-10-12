import { Component, Signal, ViewEncapsulation, signal } from '@angular/core';
import { Icon } from '@shared/components/icon/icon';
import { SpotlightDirective } from '@pages/home/components/expertise-area/directive/spotlight.directive';
import { LanguagesToolsSchema } from './language-tool.interface';
// CORREÇÃO: Use caminho relativo para o arquivo na mesma pasta
import languagesToolsData from './languages-tools.data';

@Component({
  selector: 'languages-tools',
  encapsulation: ViewEncapsulation.None,
  imports: [Icon, SpotlightDirective],
  standalone: true,
  template: `
    <section class="mt-16">
      <p class="mb-8 text-2xl font-semibold text-gray-900 dark:text-white inline-block">
        Languages and Tools
      </p>

      <div
        class="max-w-screen-xl grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start group"
        spot-light
      >
        @for (t of tools(); track $index) {
          <div
            class="border border-gray-200 dark:border-gray-700 relative h-full dark:bg-slate-800 bg-white rounded-3xl p-px
            before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-primary before:rounded-full
            before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500
            before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100
            before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-primary
            after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500
            after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10
            after:blur-[100px] overflow-hidden"
          >
            <div
              class="relative h-full dark:bg-slate-900 bg-white p-6 pb-8 rounded-[inherit] overflow-hidden"
            >
              <div class="flex flex-col gap-3 text-center">
                <icon [path]="t.icon" [size]="45" class="mx-auto" />
                <span class="text-gray-800 dark:text-gray-300 font-medium">
                  {{ t.name }}
                </span>
                <p class="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {{ t.category }}
                </p>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `
})
export class LanguagesTools {
  public tools: Signal<LanguagesToolsSchema[]> = signal(languagesToolsData);
}