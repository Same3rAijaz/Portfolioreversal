import React from "react";
import Clock from 'react-live-clock';

export default function Clocks() {
return (
	<div style={{margin:'30px'}}>
	<Clock
		format={'h:mm:ssa'}
		style={{fontSize: '1.5em'}}
		ticking={true} />
	</div>
);
}
