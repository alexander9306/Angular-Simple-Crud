import { Component, OnInit } from '@angular/core';
import { GetSpeakersGQL, GetSpeakersQuery, DeleteSpeakerGQL, AddSpeakerGQL, UpdateSpeakerGQL, Speaker, SpeakerDetailsFragmentDoc } from '../generated/api';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreObject } from '@apollo/client/core';


@Component({
  selector: 'app-speakers',
  templateUrl: './speakers.component.html',
  styleUrls: ['./speakers.component.scss']
})
export class SpeakersComponent implements OnInit {
  speakers: Observable<GetSpeakersQuery['speakers']>;
  speakerForm: boolean;
  isNewSpeaker: boolean;
  editSpeakerForm: boolean;
  editedSpeaker = {} as Speaker;
  newSpeaker = {} as Speaker;

  constructor(speakerGQL: GetSpeakersGQL, 
    private deleteSpeaker: DeleteSpeakerGQL, 
    private addSpeaker: AddSpeakerGQL, 
    private editSpeaker: UpdateSpeakerGQL) {
    this.speakers = speakerGQL.watch()
      .valueChanges.pipe(map(result => result.data.speakers));
  }

  showAddSpeakerForm() {
    if (this.editedSpeaker) {
      this.newSpeaker = {} as Speaker;
    }
    this.speakerForm = true;
    this.isNewSpeaker = true;
  }

  saveSpeaker(speaker: Speaker) {
    if (this.isNewSpeaker) {
      this.addSpeaker.mutate(speaker, {
        // Adding new speaker to the cache so it can update the
        update(cache, { data }) {
          cache.modify({
            fields: {
              speakers(existing = []) {
                const newSpeakerRef = cache.writeFragment({
                  data: data?.createSpeaker,
                  fragment: SpeakerDetailsFragmentDoc,
                });
                const merged = existing.slice(0);
                merged.push(newSpeakerRef);
                return merged;
              },
            },
          });
       },
      }).subscribe();
    }
    this.speakerForm = false;
    this.newSpeaker = {} as Speaker;
  }

  updateSpeaker() {
    this.editSpeaker.mutate(this.editedSpeaker).subscribe();
    this.editSpeakerForm = false;
    this.editedSpeaker = {} as Speaker;
  }

  cancelEdits() {
    this.editedSpeaker = {} as Speaker;
    this.editSpeakerForm = false;
  }


  cancelNewSpeaker() {
    this.newSpeaker = {} as Speaker;
    this.speakerForm = false;
  }

  showEditSpeakerForm(speaker: Speaker) {
    if (!speaker) {
      this.speakerForm = false;
      return;
    }
    this.editSpeakerForm = true;
    // Make a new object of the speaker that's not readOnly
    this.editedSpeaker = { ...speaker };
  }

  removeSpeaker(speaker: Speaker) {
    this.deleteSpeaker.mutate({
      id: speaker.id,
    }, {
      update(cache, { data }) {
        const idToRemove =  data.removeSpeaker.id;
        cache.modify({
          fields: {
            speakers(existing: StoreObject[], { readField  }) {
              return existing.filter(storeSpeaker => idToRemove !== readField('id', storeSpeaker));
            },
          },
        });
     },
     }).subscribe();
  }


  ngOnInit(): void {
  }

}
