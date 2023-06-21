let socket = new WebSocket("wss://server-resmart.onrender.com/");

// отправка сообщения из формы
document.forms.publish.onsubmit = function () {
	let outgoingMessage = this.message.value;
	socket.send(JSON.stringify(outgoingMessage));
	this.message.value = "";
	return false;
};

// получение сообщения - отобразить данные в div#messages
socket.onmessage = (event) => {
	let message = JSON.parse(event.data);
	message.forEach(messages => {
		let messageElem = document.createElement('div');
		messageElem.textContent = messages;
		document.getElementById('messages').prepend(messageElem);
	})
}
