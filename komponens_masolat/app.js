function App(){
	return React.createElement(
		"div",
		{
			className: "border",
		},
		"App",

		React.createElement(BoxComponent, {hatterSzin: "red", felirat: 1}),
		React.createElement(BoxComponent, {hatterSzin: "blue", felirat: 2}),
		React.createElement(BoxComponent, {hatterSzin: "green", felirat: 3}),
	);
}


function BoxComponent(props){
	console.log(props);
	return React.createElement(
		"div",
		{
			style: {
				display: "inline-block",
				width: "200px",
				height: "200px",
				backgroundColor: props.hatterSzin,
			},
			className: "p-2 m-5 rounded",
		},
		props.felirat
	);
}

ReactDOM.render(
	React.createElement(App),
	document.getElementById("app-container")
);