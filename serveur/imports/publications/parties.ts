import { Meteor } from 'meteor/meteor';
import { Parties } from '../../../both/collections/parties.collection';

function buildQuery(partyId?: string): Object {
	const isAvailable = {
		$or: [{
			public:true
		},
		{
			$and: [{
				owner: this.userId
			}, {
				owner: {
					$exists: true // ???
				}
			}]
		}]
	};

	if (partyId) {
		return {
			$and: [{
				_id: partyId
			},
			isAvailable
		]};
	}

	return isAvailable;
}

if ( Meteor.isServer) {
	
	Meteor.publish('parties', function() {
		return Parties.find(buildQuery.call(this)); //call this?
	});

	Meteor.publish('party', function(partyId: string) {
		return Parties.find(buildQuery.call(this, partyId)); //  this?
	});
}
