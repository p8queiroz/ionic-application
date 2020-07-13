import { Location } from '../../models/Location';
import { Speaker } from '../../models/Speaker';
import { Question, Session } from '../../models/Questions';

export interface ConfState {
  questions: Question[];
  sessions: Session[];
  speakers: Speaker[];
  favorites: number[];
  locations: Location[];
  filteredTracks: string[];
  searchText?: string;
  mapCenterId?: number;
  loading?: boolean;
  allTracks: string[];
  menuEnabled: boolean;
}
