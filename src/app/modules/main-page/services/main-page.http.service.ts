import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {catchError, map, Observable, of} from "rxjs";
import {ProjectCard} from "../sources/models/project-card.model";
import {project_cards} from '../sources/firebase-backup/project-cards';

@Injectable()
export class MainPageHttpService {

  constructor(private readonly _angularFirestore: AngularFirestore) {}

  getProjectsCards(path: string): Observable<ProjectCard[]> {
    return this._getData<{ id: string, project_cards: ProjectCard[] }[]>(path)
      .pipe(
        map(request => {
          if (!request.length) {
            return project_cards;
          }
          return request[0].project_cards
        }),
        catchError(() => of(project_cards))
      )
  }

  private _getData<T extends {id: string}[]>(path: string): Observable<T> {
    return this._angularFirestore.collection(path).valueChanges({ idField: 'id' }) as Observable<T>;
  }
}
