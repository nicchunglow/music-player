import CatchAVibe from './Catch the Vibe.mp3'
import Violet from './Connor Price - Violet.mp3'
import Psychic from './Chris Brown - Psychic (Audio) ft. Jack Harlow.mp3'
import JustDontLetGo from './Laberge - Just Dont Let Go ( Original Mix ).mp3'
import Candy from './Jay Park - Candy.mp3'
import SilverTooth from './SILVER TOOTH. (Clean).mp3'
import ZuluSreams from './Zulu Screams.mp3'
import {
  RieHata,
  JayPark,
  ConnorPrice,
  ChrisBrown,
  LaBerge,
  Armani,
  GoldLink,
} from '@/assets/images/artists'

const songs = [
  {
    id: 0,
    title: 'Catch A Vibe',
    artist: 'Rie Hata',
    audio: CatchAVibe,
    img: RieHata,
  },
  {
    id: 1,
    title: 'Candy',
    artist: 'Jay Park',
    audio: Candy,
    img: JayPark,
  },
  {
    id: 2,
    title: 'Violet',
    artist: 'Connor Price',
    audio: Violet,
    img: ConnorPrice,
  },
  {
    id: 3,
    title: "Just Don't Let Go",
    artist: 'Laberge',
    audio: JustDontLetGo,
    img: LaBerge,
  },
  {
    id: 4,
    title: 'Psychic',
    artist: 'Chris Brown',
    audio: Psychic,
    img: ChrisBrown,
  },
  {
    id: 5,
    title: 'Silver Tooth',
    artist: 'Armani White & A$AP Ferg',
    audio: SilverTooth,
    img: Armani,
  },
  {
    id: 6,
    title: 'Zulu Screams',
    artist: 'GoldLink',
    audio: ZuluSreams,
    img: GoldLink,
  },
]

export default songs
