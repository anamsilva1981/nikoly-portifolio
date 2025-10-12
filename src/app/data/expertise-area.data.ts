import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { site, api, mobile, monitor, speed, search } from './../icon/regular.icon';

const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    name: 'Game Design'
  },
  {
    icon: api,
    name: 'Interactive Narrative'
  },
  {
    icon: mobile,
    name: 'Visual and UI Design'
  },
  {
    icon: monitor,
    name: 'Level Design'
  },
  {
    icon: speed,
    name: 'Prototyping and Iteration'
  },
  {
    icon: search,
    name: 'Scripting and Game Logic'
  },
];

export default expertiseAreaData;
