import Home from '../image/home/cover.jpg';
export default {
	cover:{
		common:{
			backgroundImage :`url(${Home})`,
			backgroundSize:'cover',
			textAlign:'center',
			height:'300px'
		},
		button:{
			position:'relative',
			top:'220px',
			borderRadius:'10px',
			height:'50px'
		}
	},
	about:{
		common:{
			margin:'30px auto'
		},
		text:{
			textAlign:"justify"
		}
	},
	feature:{
		common:{
			textAlign:'center',
			backgroundColor:'RGBA(166,121,167,30%)',
			backgroundSize:'cover',
			margin:'10px auto',
			paddingBottom:'20px'
		},
		title:{
			textTransform: 'uppercase',	
		},
		image:{
			height:'60px',
		},
		col:{
			marginTop:'40px'
		},
		hr:{
			borderBottom:'dashed black 1px',
		},
		screen:{
			height:'200px',
		}
	},
	review:{
		common:{
			textAlign:'center'
		},
		image:{
			height:'50px',
			margin:'10px auto',
			stars:{
				height:'40px',
				margin:'20px auto 10px auto',
			}
		},
		block:{
			marginBottom:'30px',
		}
	}
}