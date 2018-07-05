import React, {Component} from 'react';
import './NotFound.css';


class NotFound extends Component {
	constructor(){
		super();
		this.state={
			nf: true
		}
	}
	
	push() {
		var myCoub = document.getElementById('coubVideo').contentWindow;
		myCoub.postMessage('play', '*');
	};
	
	componentDidMount() {
		setTimeout(function() { //Start the timer
			this.push();
		}.bind(this), 5000)
	}
	
	render() {
		return (
			<div id="div-background">
				<iframe title="This is a unique title" id="coubVideo"
				        src="//coub.com/embed/112hbk?
                    muted=false&
                    originalSize=false&
                    startWithHD=true&
                    noSiteButtons=true&
                    hideTopBar=true"
				        frameBorder="0"
				        width="1024"
				        height="547"
				        allow="autoplay"></iframe>
				
			</div>
		);
	}
}

export default NotFound;