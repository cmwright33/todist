import React from 'react';

export const Header = () => {
	return( 
		<header className="header" data-testid="header">
			<nav>
				<div className="logo">
				</div>
			</nav>
			<ul>
				<li>Item 1</li>
				<li>Item 2</li>
				<li>Item 3</li>
				<li>Item 4</li>
			</ul>
		</header>)
}