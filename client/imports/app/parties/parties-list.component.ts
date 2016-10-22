import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Party } from '../../../../both/models/party.model';
import { Parties } from '../../../../both/collections/parties.collection';

import template from './parties-list.component.html';

@Component({
  selector: 'parties-list',
  template
})

export class PartiesListComponent {
	parties: Observable<Party[]>;
 
	constructor() {
		this.parties = Parties.find({}).zone(); //zone?
	}

	removeParty(party: Party): void {
		Parties.remove(party._id);
	}
}