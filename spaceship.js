class Spaceship {
	
	constructor(name,crew,phasers,shields){
		this.name = name
		this.crew = crew
		this.phasers = phasers
		this.shields = shields
		this.cloaked = false
		this.warpDrive = 'disengaged'
		this.phasersCharge = 'uncharged'

		if (crew.length === 0) {
		      this.docked = true
		} else {
		      this.docked = false
		}
	
		this.notifyCrew()
		
	}

	notifyCrew(){
		this.crew.forEach(crewMember => {
			crewMember.currentShip = this
		});
	}
}