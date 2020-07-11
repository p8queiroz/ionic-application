import { Location } from '../../models/Location';
import { Speaker } from '../../models/Speaker';
import { Questions, Session } from '../../models/Questions';

export interface ConfState {
  questions: Questions;
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
