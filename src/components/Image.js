import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Image = ({ url }) => {
	const [data, setData] = useState('')
	function getUrl() {
		axios(url).then(res => {
			setData(res.data.sprites.back_default)
		})
	}
	useEffect(() => {
		getUrl()
	}, [])
	return <img src={data} alt='' />
}

export default Image
