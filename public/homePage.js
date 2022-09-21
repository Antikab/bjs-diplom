'use strict';

const logoutBtn = new LogoutButton();
const logoutApiConnectorCallback = (response) => {
	if (response.success) {
		location.reload();
	}
}

logoutBtn.action = () => {
	ApiConnector.logout(logoutApiConnectorCallback);
};

const currentUserApiConnectorCallback = (response) => {
	if (response.success) {
		ProfileWidget.showProfile(response.data);
	}
};

ApiConnector.current(currentUserApiConnectorCallback);