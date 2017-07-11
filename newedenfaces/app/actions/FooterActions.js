import alt from '../alt';


class FooterActions {
	contructor() {
		this.generateActions(
			'getTopCharactersSuccess',
			'getTopCharactersFail'
			);
	}
	getTopCharacter() {
		$.ajax({
			url: '/api/characters/top'
		})
		.done((data) => {
			this.actions.getTopCharactersSuccess(data)
		})
		.fail((jqXhr) => {
			this.actions.getTopCharacterFail(jqXhr)
		});
	}
}

export default alt.createActions(FooterActions);