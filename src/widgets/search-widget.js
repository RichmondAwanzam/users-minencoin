
import React from 'react';
import './search-widget.css';
export default class SearchField extends React.Component {
	state={icon:"&#10140;"}
	cross='&#10005;'
	onSearchTextChange=(evt)=>{
		let value=evt.target.value;
		this.props.doSearch(value);
		if(value!==''){
			this.setState({value,icon:this.cross})
		}else{
			this.setState({value,icon:"&#10140;"})
		}
	}

	render() {
		return (
			<div className="flexsearch">
				<div className="flexsearch--wrapper">
					<div className="flexsearch--form">
						<div className="flexsearch--input-wrapper">
							<input onChange={this.onSearchTextChange} className="flexsearch--input" type="search" placeholder="search" />
						</div>
						<input className="flexsearch--submit" type="submit" value="&#10140;" />
					</div>
				</div>
			</div>

		)
	}
}