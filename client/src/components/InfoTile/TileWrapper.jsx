import React from 'react'
import InfoTile from './InfoTile'
import "./TileWrapper.css"

const TileWrapper = () => {
	return (
		<div className="tile_container"> 
		<InfoTile />
		<InfoTile />
		<InfoTile />
		</div>
	)
	}

export default TileWrapper